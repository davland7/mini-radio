<template>
  <div class="footer">
    <div class="footer__version">
      {{ messages.version }}
    </div>
    <div class="footer__github">
      <a
        :href="messages.homePageUrl"
        target="_blank"
        class="footer__link"
      >{{ messages.github }}</a>
    </div>
  </div>
</template>

<script>
  import { getMessage, getManifest } from '../utils'

  export default {
    name: 'ComponentFooter',
    data () {
      return {
        messages: {
          version: getManifest().version,
          homePageUrl: getManifest().homepage_url,
          github: getMessage('github')
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
    font-size: 10px;
    color: var(--dark-color);

    &__link {
      color: inherit;
      text-decoration: none;

      &:hover {
        text-decoration: underline;
      }
    }
  }
</style>
