<template>
  <div class="station">
    <div @click="play" :title="messages.play" class="station__button">
      <img :src="station.logo" class="station__logo" />
      <svg viewBox="0 0 16 16" class="station__play">
        <path d="M3 2l10 6-10 6z"></path>
      </svg>
    </div>
    <div class="station__text">
      <strong>{{ station.title }}</strong>
      <span>{{ station.description }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Station',
    props: [
      'station'
    ],
    data () {
      return {
        messages: {
          play: chrome.i18n.getMessage('play')
        }
      }
    },
    methods: {
      play () {
        const station = this.station

        this.$emit('play', station)
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
    border: solid 1px #dcdcdd;
  }

  .station__text {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 242px;
    padding: 0 10px;
    font-size: 14px;
  }

  .station__button {
    position: relative;
    width: 60px;
    background: #fff;
  }

  .station__logo {
    position: absolute;
    width: 60px;
    height: 60px;
  }

  .station__play {
    position: absolute;
    width: 40px;
    height: 40px;
    padding: 9px;
    border: solid 1px #000;
    opacity: 0;

    &:hover {
      cursor: pointer;
      opacity: .8;
    }
  }
</style>
