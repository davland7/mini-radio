<template>
  <div class="station">
    <div
      aria-pressed="false"
      class="station__button"
      role="button"
      tabindex="0"
      :title="messages.play"
      @click="play"
      @keyup.enter="play"
    >
      <img
        :alt="item.title"
        class="station__logo"
        :src="require(`@/images/${item.logo}`)"
      >
      <svg
        aria-hidden="true"
        class="station__play"
        viewBox="0 0 16 16"
      >
        <path d="M3 2l10 6-10 6z" />
      </svg>
    </div>
    <div class="station__text">
      <strong>{{ item.title }}</strong>
      <span>{{ item.description }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'StationComponent',
    props: {
      messages: {
        type: Object,
        required: true
      },
      item: {
        type: Object,
        required: true
      }
    },
    setup(props, { emit }) {
      const play = () => {
        emit('play', props.item);
      }

      return { play };
    }
  }
</script>

<style lang="scss">
  .station {
    display: flex;
    height: 64px;
    padding: 2px;
    margin: 2px;
    border: solid 1px var(--border-color);
    background-color: var(--content-color);
    border-radius: 60px 0 0 60px;

    &__text {
      display: flex;
      flex-direction: column;
      justify-content: center;
      margin: 0 16px;
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
      width: 100%;
      height: 100%;
      padding: 9px 6px 9px 12px;
      opacity: 0;

      &:hover {
        opacity: .8;
      }
    }
  }
</style>
