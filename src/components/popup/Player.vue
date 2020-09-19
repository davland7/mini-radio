<template>
  <div class="player">
    <div @click="toggle" :title="action" class="player__button">
      <img :src="station.logo" class="player__logo" />
      <svg v-if="stopped" viewBox="0 0 16 16" class="player__toggle play">
        <path d="M3 2l10 6-10 6z"></path>
      </svg>
      <svg v-else viewBox="0 0 16 16" class="player__toggle stop">
        <path d="M2 2h12v12h-12z"></path>
      </svg>
    </div>
    <div class="player__information">
      <div class="player__title">
        {{ station.title }}
      </div>
      <div class="player__description">
        {{ station.description }}
      </div>
      <volume @setVolume="setVolume" @mute="mute" :audio="{volume, muted}"></volume>
    </div>
  </div>
</template>

<script>
  import Volume from './Volume.vue'

  import GA from '../../googleAnalytics.js'

  const BG = chrome.extension.getBackgroundPage()

  export default {
    name: 'Player',
    components: {
      Volume
    },
    props: [
      'station'
    ],
    data () {
      return {
        stopped: BG.stopped(),
        muted: BG.muted(),
        volume: BG.volume(),
        messages: {
          play: chrome.i18n.getMessage('play'),
          stop: chrome.i18n.getMessage('stop')
        }
      }
    },
    methods: {
      play (station) {
        BG.play(station)
        GA.trackEvent('played', station.title + ' - ' + station.description)

        this.stopped = false
      },
      toggle () {
        if (this.stopped) {
          this.play(this.station)
        } else {
          BG.stop()
          this.stopped = true
        }
      },
      setVolume (value) {
        BG.setVolume(value)
      },
      mute () {
        BG.mute()
      }
    },
    computed: {
      action () {
        return this.stopped ? this.messages.play : this.messages.stop
      }
    },
    created () {
      this.$parent.$on('play', this.play)
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

    &__button {
      position: relative;
      width: 72px;

      svg {
        fill: black;
      }
    }

    &__logo {
      position: absolute;
      width: 72px;
      height: 72px;
    }

    &__toggle {
      position: absolute;
      width: 42px;
      height: 42px;
      padding: 14px;
      opacity: 0;

      &:hover {
        cursor: pointer;
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
