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
        :src="require(`@/images/${station.logo}`)"
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
        @set-volume="setVolume"
        @mute="mute"
      />
    </div>
  </div>
</template>

<script>
  import rPlayer from '@davland7/rplayer'
  import Volume from './Volume.vue'

  import { getMessage } from '../utils'

  export default {
    name: 'ComponentPlayer',
    components: {
      Volume
    },
    props: {
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
        messages: {
          play: getMessage('play'),
          stop: getMessage('stop')
        }
      }
    },
    computed: {
      action () {
        return this.played ? this.messages.stop : this.messages.play
      }
    },
    created () {
      this.audio = new rPlayer()
      this.volume = this.audio.volume

      this.emitter.on('play', this.play)
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
    height: 72px;
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
      width: 42px;
      height: 42px;
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
