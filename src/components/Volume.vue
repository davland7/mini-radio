<template>
  <div class="volume">
    <div class="volume__stade">
      <div
        class="volume__mute"
        tabindex="0"
        role="button"
        :aria-label="messages.mute"
        @click="mute"
        @keyup.enter="mute"
      >
        <svg
          v-if="!muted && volume > 0.6"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 34 32"
        ><path d="M27.814 28.814a1.5 1.5 0 0 1-1.061-2.56C29.492 23.515 31 19.874 31 16.001s-1.508-7.514-4.247-10.253a1.5 1.5 0 1 1 2.121-2.121C32.179 6.932 34 11.327 34 16.001s-1.82 9.069-5.126 12.374a1.495 1.495 0 0 1-1.061.439zm-5.329-2.829a1.5 1.5 0 0 1-1.061-2.56c4.094-4.094 4.094-10.755 0-14.849a1.5 1.5 0 1 1 2.121-2.121c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546a1.495 1.495 0 0 1-1.061.439zm-5.328-2.828a1.5 1.5 0 0 1-1.061-2.56 6.508 6.508 0 0 0 0-9.192 1.5 1.5 0 1 1 2.121-2.121c3.704 3.704 3.704 9.731 0 13.435a1.495 1.495 0 0 1-1.061.439zM13 30a1 1 0 0 1-.707-.293L4.586 22H1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h3.586l7.707-7.707A1 1 0 0 1 14 3v26a1.002 1.002 0 0 1-1 1z" /></svg>
        <svg
          v-else-if="!muted && volume > 0.2 && volume < 0.7"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        ><path d="M22.485 25.985a1.5 1.5 0 0 1-1.061-2.56c4.094-4.094 4.094-10.755 0-14.849a1.5 1.5 0 1 1 2.121-2.121c2.55 2.55 3.954 5.94 3.954 9.546s-1.404 6.996-3.954 9.546a1.495 1.495 0 0 1-1.061.439zm-5.328-2.828a1.5 1.5 0 0 1-1.061-2.56 6.508 6.508 0 0 0 0-9.192 1.5 1.5 0 1 1 2.121-2.121c3.704 3.704 3.704 9.731 0 13.435a1.495 1.495 0 0 1-1.061.439zM13 30a1 1 0 0 1-.707-.293L4.586 22H1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h3.586l7.707-7.707A1 1 0 0 1 14 3v26a1.002 1.002 0 0 1-1 1z" /></svg>
        <svg
          v-else-if="!muted && volume > 0.0 && volume < 0.3"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        ><path d="M17.157 23.157a1.5 1.5 0 0 1-1.061-2.56 6.508 6.508 0 0 0 0-9.192 1.5 1.5 0 1 1 2.121-2.121c3.704 3.704 3.704 9.731 0 13.435a1.495 1.495 0 0 1-1.061.439zM13 30a1 1 0 0 1-.707-.293L4.586 22H1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h3.586l7.707-7.707A1 1 0 0 1 14 3v26a1.002 1.002 0 0 1-1 1z" /></svg>
        <svg
          v-else-if="muted"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        ><path d="M30 19.348V22h-2.652L24 18.652 20.652 22H18v-2.652L21.348 16 18 12.652V10h2.652L24 13.348 27.348 10H30v2.652L26.652 16 30 19.348zM13 30a1 1 0 0 1-.707-.293L4.586 22H1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h3.586l7.707-7.707A1 1 0 0 1 14 3v26a1.002 1.002 0 0 1-1 1z" /></svg>
        <svg
          v-else
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
        ><path d="M13 30a1 1 0 0 1-.707-.293L4.586 22H1a1 1 0 0 1-1-1V11a1 1 0 0 1 1-1h3.586l7.707-7.707A1 1 0 0 1 14 3v26a1.002 1.002 0 0 1-1 1z" /></svg>
      </div>
    </div>
    <div class="volume__control">
      <input
        id="volume"
        :value="volume"
        type="range"
        max="1.0"
        min="0.0"
        step="0.1"
        class="volume__range"
        @input="setVolume($event.target.value)"
      >
      <label
        for="volume"
        class="volume__label"
      >{{ messages.volume }}</label>
    </div>
    <div class="volume__pourcent">
      {{ pourcent }}
    </div>
  </div>
</template>

<script>
  import { ref } from 'vue'

  export default {
    name: 'VolumeComponent',
    props: {
      messages: {
        type: Object,
        required: true
      },
      volume: {
        type: Number,
        required: true
      }
    },
    computed: {
      pourcent () {
        return `${this.volume * 100}%`
      }
    },
    setup(props, { emit }) {
      const volume = ref(props.volume)
      const muted = ref(false)

      const setVolume = (value) => {
        emit('setVolume', volume.value = value)
      }

      const mute = () => {
        emit('mute', muted.value = !muted.value)
      }

      return { muted, volume, setVolume, mute }
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

    &__mute {
      cursor: pointer;
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

    &__label {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
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
