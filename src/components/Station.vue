<template>
  <div class="station">
    <div
      :title="messages.play"
      class="station__button"
      tabindex="0"
      role="button"
      aria-pressed="false"
      @click="play"
      @keyup.enter="play"
    >
      <img
        :src="require(`@/images/${station.logo}`)"
        :alt="station.title"
        class="station__logo"
      >
      <svg
        aria-hidden="true"
        viewBox="0 0 16 16"
        class="station__play"
      >
        <path d="M3 2l10 6-10 6z" />
      </svg>
    </div>
    <div class="station__text">
      <strong>{{ station.title }}</strong>
      <span>{{ station.description }}</span>
    </div>
  </div>
</template>

<script>
  import { getMessage } from '../utils'

  export default {
    name: 'Station',
    props: {
      station: Object
    },
    data () {
      return {
        messages: {
          play: getMessage('play')
        }
      }
    },
    methods: {
      play () {
        this.$emit('play', this.station)
      }
    }
  }
</script>

<style lang="scss">
  .station {
    display: flex;
    height: 60px;
    padding: 2px;
    margin: 2px;
    border: solid 1px var(--border-color);
    background-color: var(--content-color);
    border-radius: 60px 0 0 60px;

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      width: 242px;
      padding: 0 10px;
      font-size: 14px;
      line-height: 1.5;
      color: var(--light-color);

      strong {
        color: var(--dark-color);
      }
    }

    &__button {
      position: relative;
      width: 60px;
      cursor: pointer;
    }

    &__logo {
      position: absolute;
      width: 58px;
      height: 58px;
      border-radius: 58px;
      border: solid 1px var(--border-color);
    }

    &__play {
      position: absolute;
      width: 40px;
      height: 40px;
      padding: 9px 6px 9px 12px;
      opacity: 0;

      &:hover {
        opacity: .8;
      }
    }
  }
</style>
