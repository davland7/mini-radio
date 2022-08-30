<template>
  <div class="popup">
    <player
      :station="station"
      :messages="messages.player"
    />
    <navbar
      :total-tabs="totalTabs"
      :stations-per-tab="stationsPerTab"
      :current-tab="currentTab"
      :messages="messages.navbar"
      @tab="tabs"
    />
    <station
      v-for="(item, index) in stations"
      :key="index"
      :item="item"
      :messages="messages.station"
      @play="play"
    />
    <footer-bar
      :messages="messages.footer"
    />
  </div>
</template>

<script>
  import Player from './components/Player.vue'
  import Navbar from './components/Navbar.vue'
  import Station from './components/Station.vue'
  import FooterBar from './components/Footer.vue'

  import stations from './stations.json'
  import { setStorage, getStorage, getMessage, getManifest } from './utils'

  export default {
    name: 'PopupApp',
    components: {
      Player,
      Navbar,
      Station,
      FooterBar
    },
    emits: [
      'play'
    ],
    data () {
      return {
        station: stations[0],
        currentTab: 0,
        stationsPerTab: 5,
        messages: {
          player: {
            play: getMessage('play'),
            stop: getMessage('stop'),
            mute: getMessage('mute'),
            volume: getMessage('volume')
          },
          navbar: {
            name: getMessage('name'),
            list: getMessage('list')
          },
          station: {
            play: getMessage('play')
          },
          footer: {
            version: getManifest().version,
            homePageUrl: getManifest().homepage_url,
            github: getMessage('github')
          }
        }
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
        this.emitter.emit('play', this.station = station)
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

  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    background-color: var(--background-color);
    font-family: Arial;
    overflow: hidden;
  }

  #app {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }

  .popup {
    width: 320px;
    margin: 2px;
  }
</style>
