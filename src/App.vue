<template>
  <div class="popup">
    <player
      :station="station"
    />
    <navbar
      :total-tabs="totalTabs"
      :stations-per-tab="stationsPerTab"
      :current-tab="currentTab"
      @tab="tabs"
    />
    <station
      v-for="(item, index) in stations"
      :key="index"
      :station="item"
      @play="play"
    />
    <footerbar />
  </div>
</template>

<script>
  import Player from './components/Player.vue'
  import Navbar from './components/Navbar.vue'
  import Station from './components/Station.vue'
  import Footerbar from './components/Footer.vue'

  import stations from './stations.json'
  import { setStorage, getStorage, getMessage } from './utils'

  export default {
    name: 'ComponentPopup',
    components: {
      Player,
      Navbar,
      Station,
      Footerbar
    },
    emits: [
      'play'
    ],
    data () {
      return {
        station: stations[0],
        currentTab: 0,
        stationsPerTab: 5
      }
    },
    computed: {
      totalTabs() {
        return Math.ceil(stations.length / this.stationsPerTab)
      },
      stations() {
        const index = this.currentTab * this.stationsPerTab
        return stations.slice(index, index + this.stationsPerTab)
      }
    },
    created () {
      document.documentElement.lang = getMessage('locale')
      document.title = getMessage('name')
      getStorage('active', (err, station) => {
        if (!err && station) {
          this.station = station
        } else {
          setStorage('active', this.station)
        }
      })
    },
    methods: {
      tabs(tabNumber) {
        this.currentTab = tabNumber
      },
      play(station) {
        setStorage('active', station)
        this.$emit('play', this.station = station)
      }
    }
  }
</script>

<style lang="scss">
  :root {
    --dark-color: #202124;
    --light-color: #5f6368;
    --border-color: #dadce0;
    --background-color: #f7f8f9;
    --content-color: #fff;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --dark-color: #e8eaed;
      --light-color: #9aa0a6;
      --border-color: #5f6368;
      --background-color: #1d1e20;
      --content-color: #292a2d;
    }
  }

  body {
    margin: 0;
    background-color: var(--background-color);
    font-family: Arial;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .popup {
    width: 320px;
  }
</style>
