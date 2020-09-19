<template>
  <div class="volume">
    <div class="volume__stade">
      <svg @click="mute">
        <use :xlink:href="icon" />
      </svg>
    </div>
    <div class="volume__control">
      <input v-on:input="setVolume($event.target.value)" :value="value" type="range" max="10" min="0" step="1" class="volume__range" />
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
        return (this.value * 10) + '%'
      },
      icon () {
        if (!this.muted && this.value > 6) {
          return 'images/volume.svg#295-volume-high'
        } else if (!this.muted && this.value > 2 && this.value < 7) {
          return 'images/volume.svg#296-volume-medium'
        } else if (!this.muted && this.value > 0 && this.value < 3) {
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

    &__stade {
      display: flex;
      align-items: center;
      width: 30px;

      svg {
        width: 20px;
        height: 20px;
        fill: var(--dark-color);
      }
    }

    &__control {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0;
      margin: 0;
    }

    &__range {
      width: 120px;
      height: 4px;
      background-color: var(--background-color);
      -webkit-appearance: none;

      &:focus {
        outline: none;
      }

      &::-webkit-slider-thumb {
        width: 6px;
        height: 18px;
        background-color: var(--dark-color);
        cursor: pointer;
        -webkit-appearance: none;
      }
    }

    &__pourcent {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      padding-left: 10px;
      font-size: 14px;
      font-weight: 600;
      color: var(--dark-color);
    }
  }
</style>
