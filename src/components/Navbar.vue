<template>
  <div class="navbar">
    <div class="navbar__logo">
      <img
        :src="imageSrc"
        alt=""
      >
      {{ messages.name }}
    </div>
    <div class="navbar__tabs">
      <div
        v-for="(tabNumber, index) in totalTabs"
        :key="index"
        class="navbar__tab"
        :class="{'navbar__tab--current': currentTab === index}"
        tabindex="0"
        role="button"
        @click="tab(index)"
        @keyup.enter="tab(index)"
      >
        <span class="navbar__list">{{ messages.list }}</span> {{ tabNumber }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NavbarComponent',
    props: {
      messages: {
        type: Object,
        required: true
      },
      currentTab: {
        type: Number,
        required: true
      },
      totalTabs: {
        type: Number,
        required: true
      }
    },
    computed: {
      imageSrc () {
        return `../images/icon48.png`
      }
    },
    setup(props, { emit }) {
      const tab = (index) => {
        emit('tab', index)
      }

      return { tab }
    }
  }
</script>

<style lang="scss">
  .navbar {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4px 0;

    &__logo {
      display: flex;
      align-items: center;
      height: 32px;
      font-size: 14px;
      font-weight: 600;
      color: var(--dark-color);

      img {
        margin: 0 6px;
        width: 24px;
        height: 24px;
      }
    }

    &__list {
      border: 0;
      clip: rect(0 0 0 0);
      height: 1px;
      margin: -1px;
      overflow: hidden;
      padding: 0;
      position: absolute;
      width: 1px;
    }

    &__tabs {
      display: flex;
    }

    &__tab {
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 0 2px;
      width: 30px;
      height: 30px;
      font-size: 18px;
      color: var(--light-color);
      border: solid 1px var(--border-color);
      border-radius: 30px;
      cursor: pointer;

      &--current,
      &:hover {
        background-color: var(--content-color);;
      }
    }
  }
</style>
