<template>
  <div class="footer">
    <div class="footer__version">
      {{ messages.version }}
    </div>
    <div class="footer__github">
      <a
        class="footer__link"
        :href="messages.homePageUrl"
        target="_blank"
      >
        {{ messages.github }}
      </a>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'FooterComponent',
    props: {
      messages: {
        type: Object,
        required: true
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
