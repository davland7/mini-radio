<template>
  <div class="popup">
    <player :station="station"></player>
    <navbar @tabClick="tabs" :totalTabs="totalTabs" :stationsPerTab="stationsPerTab" :currentTab="currentTab"></navbar>
    <station @play="play" :station="station" :key="index" v-for="(station, index) in stations"></station>
    <bottom></bottom>
  </div>
</template>

<script>
  import Player from './components/Player.vue'
  import Navbar from './components/Navbar.vue'
  import Station from './components/Station.vue'
  import Bottom from './components/Footer.vue'

  import stations from './stations.json'
  import Storage from './storage.js'

  export default {
    name: 'Popup',
    components: {
      Player,
      Navbar,
      Station,
      Bottom
    },
    data () {
      return {
        station: stations[0],
        currentTab: 0,
        stationsPerTab: 5
      }
    },
    methods: {
      tabs (tabNumber) {
        this.currentTab = tabNumber
      },
      play (station) {
        Storage.set('active', station)
        this.$emit('play', this.station = station)
      }
    },
    computed: {
      totalTabs () {
        return Math.ceil(stations.length / this.stationsPerTab)
      },
      stations () {
        const index = this.currentTab * this.stationsPerTab
        return stations.slice(index, index + this.stationsPerTab)
      }
    },
    created () {
      document.title = chrome.i18n.getMessage('name')
      Storage.get('active', (err, station) => {
        if (!err && station) {
          this.station = station
        } else {
          Storage.set('active', this.station)
        }
      })
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
