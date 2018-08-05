<template>
  <div class="footer">
    <div class="footer__version">
      {{messages.version}}
    </div>
    <div class="footer__github">
      <a @click="githubTrack" :href="messages.homePageUrl" target="_blank" class="footer__link">{{ messages.github }}</a>
    </div>
  </div>
</template>

<script>
  import GA from '../../googleAnalytics.js'

  export default {
    name: 'Footer',
    methods: {
      githubTrack () {
        GA.trackEvent(this.messages.github, 'clicked')
      }
    },
    data () {
      return {
        messages: {
          version: chrome.runtime.getManifest().version,
          homePageUrl: chrome.runtime.getManifest().homepage_url,
          github: chrome.i18n.getMessage('github')
        }
      }
    }
  }
</script>

<style lang="scss">
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4px;
    margin: 4px 2px 2px;
    background-color: #b34044;
    font-size: 10px;
    color: #fff;
  }

  .footer__link {
    color: #fff;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
</style>
