<template>
  <div class="player">
    <div
      :title="action"
      class="player__button"
      tabindex="0"
      role="button"
      @click="toggle"
      @keyup.enter="toggle"
    >
      <img
        :src="imageSrc"
        :alt="station.title"
        class="player__logo"
      >
      <svg
        v-if="!played"
        aria-hidden="true"
        viewBox="0 0 16 16"
        class="player__toggle play"
      >
        <path d="M3 2l10 6-10 6z" />
      </svg>
      <svg
        v-else
        aria-hidden="true"
        viewBox="0 0 16 16"
        class="player__toggle stop"
      >
        <path d="M2 2h12v12h-12z" />
      </svg>
    </div>
    <div class="player__information">
      <div class="player__title">
        {{ station.title }}
      </div>
      <div class="player__description">
        {{ station.description }}
      </div>
      <volume
        :volume="volume"
        :messages="volumeMessages"
        @set-volume="setVolume"
        @mute="mute"
      />
    </div>
  </div>
</template>

<script>
  import rPlayer from '@davland7/rplayer'
  import Volume from './Volume.vue'

  export default {
    name: 'PlayerComponent',
    components: {
      Volume
    },
    props: {
      messages: {
        type: Object,
        required: true
      },
      station: {
        type: Object,
        required: true
      }
    },
    data () {
      return {
        audio: null,
        played: false,
        muted: false,
        volume: 0.2,
        isFirstLoad: true
      }
    },
    computed: {
      action () {
        return this.played ? this.messages.stop : this.messages.play
      },
      volumeMessages () {
        return {
          volume: this.messages.volume,
          mute: this.messages.mute
        }
      },
      imageSrc () {
        return this.station.logo
      }
    },
    created () {
      this.audio = new rPlayer()
      this.volume = this.audio.volume
    },
    watch: {
      station(station) {
        if (!this.isFirstLoad) {
          this.play(station)
        }

        this.isFirstLoad = false
      }
    },
    methods: {
      play (station) {
        this.audio.playSrc(station.src)
        this.played = true
      },
      toggle () {
        if (!this.played) {
          this.play(this.station)
        } else {
          this.audio.stop()
          this.played = false
        }
      },
      setVolume (value) {
        this.audio.volume = value
      },
      mute () {
        this.audio.mute()
      }
    }
  }
</script>

<style lang="scss">
  .player {
    display: flex;
    justify-content: space-between;
    height: 76px;
    padding: 2px;
    margin: 2px;
    background: var(--content-color);
    border: solid 1px var(--border-color);
    border-radius: 72px 0 0 72px;

    &__button {
      position: relative;
      width: 72px;
      cursor: pointer;
    }

    &__logo {
      position: absolute;
      width: 70px;
      height: 70px;
      border-radius: 70px;
      border: solid 1px var(--border-color);
    }

    &__toggle {
      position: absolute;
      width: 100%;
      height: 100%;
      padding: 14px;
      opacity: 0;

      &.play {
        padding: 14px 11px 14px 17px;
      }

      &:hover {
        opacity: .8;
      }
    }

    &__information {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      width: 226px;
      margin: 4px;
    }

    &__title {
      font-size: 16px;
      font-weight: 600;
      color: var(--dark-color);
    }

    &__description {
      font-size: 14px;
      color: var(--light-color);
    }
  }
</style>
