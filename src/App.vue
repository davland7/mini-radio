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
      v-for="(item, index) in tabStations"
      :key="index"
      :item="item"
      :messages="messages.station"
      :lastStation="index === 0"
      @play="play"
    />
    <more
      v-if="currentTab === totalTabs - 1"
      :messages="messages.more"
      :moreStation="moreStation"
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
  import More from './components/More.vue'
  import FooterBar from './components/Footer.vue'

  import stations from './stations.json'
  import { setStorage, getStorage, getMessage, getManifest } from './utils'

  export default {
    name: 'PopupApp',
    components: {
      Player,
      Navbar,
      Station,
      More,
      FooterBar
    },
    data () {
      return {
        station: stations[0],
        moreStation: stations[stations.length - 1],
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
            play: getMessage('play'),
          },
          more: {
            station: {
              play: getMessage('play'),
            },
            form: {
              logo: getMessage('logo_form'),
              title: getMessage('title_form'),
              description: getMessage('description_form'),
              src: getMessage('src_form'),
              reset: getMessage('reset_form'),
              save: getMessage('save_form')
            }
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
        return Math.ceil(stations.length / this.stationsPerTab) + 1 // + 1 More
      },
      tabStations() {
        const index = this.currentTab * this.stationsPerTab
        return stations.slice(index, index + this.stationsPerTab)
      }
    },
    created () {
      stations.length = stations.length - 1
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
        this.station = station
        setStorage('active', station)
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
  }
</style>
