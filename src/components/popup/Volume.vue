<template>
  <div class="volume">
    <div class="volume__stade">
      <svg @click="mute">
        <use :xlink:href="icon" />
      </svg>
    </div>
    <div class="volume__control">
      <input v-on:input="setVolume($event.target.value)" :value="value" type="range" max="1" min="0" step="0.1" class="volume__range" />
    </div>
    <div class="volume__pourcent">
      {{ pourcent }}
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Volume',
    props: [
      'audio'
    ],
    data () {
      return {
        value: this.audio.volume,
        muted: this.audio.muted
      }
    },
    methods: {
      setVolume (value) {
        this.$emit('setVolume', this.value = value)
      },
      mute () {
        this.$emit('mute', this.muted = !this.muted)
      }
    },
    computed: {
      pourcent () {
        return (this.value * 100) + '%'
      },
      icon () {
        if (!this.muted && this.value > 0.6) {
          return 'images/volume.svg#295-volume-high'
        } else if (!this.muted && this.value > 0.2 && this.value < 0.7) {
          return 'images/volume.svg#296-volume-medium'
        } else if (!this.muted && this.value > 0 && this.value < 0.3) {
          return 'images/volume.svg#297-volume-low'
        } else if (this.muted) {
          return 'images/volume.svg#299-volume-mute2'
        } else {
          return 'images/volume.svg#298-volume-mute'
        }
      }
    }
  }
</script>

<style lang="scss">
  .volume {
    display: flex;
    align-items: center;
  }

  .volume__stade {
    display: flex;
    align-items: center;
    width: 30px;

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .volume__control {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0;
    margin: 0;
  }

  .volume__range {
    width: 120px;
    height: 4px;
    background-color: #d2d2d2;
    -webkit-appearance: none;

    &:focus {
      outline: none;
    }

    &::-webkit-slider-thumb {
      width: 6px;
      height: 18px;
      background-color: #000;
      cursor: pointer;
      -webkit-appearance: none;
    }

    &::-moz-range-thumb {
      width: 6px;
      height: 18px;
      background-color: #000;
      border: 0;
      border-radius: 0;
      cursor: pointer;
    }

    &::-moz-range-track {
      background-color: #d2d2d2;
    }

    &::-moz-focus-outer {
      border: 0;
    }
  }

  .volume__pourcent {
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding-left: 10px;
    font-size: 14px;
    font-weight: 600;
  }
</style>
