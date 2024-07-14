<template>
  <station
    :messages="messages.station"
    :item="station"
    @play="play"
  />
  <form class="form" @submit.prevent="submitForm">
    <label class="form__button">
      {{ messages.form.logo }}
      <input class="form__file" accept="image/*" type="file" id="logo" @change="handleFileUpload" />
    </label>
    <div class="form__group">
      <label class="form__label" for="title">{{messages.form.title}}</label>
      <input class="form__field" type="text" id="title" v-model="station.title" required />
    </div>
    <div class="form__group">
      <label class="form__label" for="description">{{messages.form.description}}</label>
      <input class="form__field" type="text" id="description" v-model="station.description" required />
    </div>
    <div class="form__group form__group--column">
      <label class="form__label" for="src">{{messages.form.src}}</label>
      <input class="form__field" type="text" id="src" v-model="station.src" required />
    </div>
    <div class="form__group form__group--actions">
      <button class="form__button" @click="handleReset">
        {{ messages.form.reset }}
      </button>
      <button class="form__button" @click="handleSave">
        {{ messages.form.save }}
      </button>
    </div>
  </form>
  <div class="placeholder"></div>
</template>

<script>
import { computed, reactive } from 'vue'
import Station from './Station.vue'
import { setStorage, getStorage } from '../utils'

export default {
  name: 'MoreComponent',
  props: {
    messages: {
      type: Object,
      required: true
    },
    play: {
      type: Function,
      required: true
    },
    moreStation: {
      type: {
        title: {
          type: String,
          required: true
        },
        description: {
          type: String,
          required: true
        },
        src: {
          type: String,
          required: true
        },
        logo: {
          type: String,
          required: true
        }
      }
    },
    placeholderLang: {
      type: String,
      required: true
    }
  },
  components: {
    Station
  },
  setup(props, { emit }) {
    const station = reactive({ ...props.moreStation });
    const imageSrc = computed(() => station.logo);

    getStorage('more', (err, more) => {
      if (!err && more) {
        Object.assign(station, more);
      } else {
        setStorage('more', station);
      }
    });

    const handleFileUpload = (event) => {
      const file = event.target.files[0];

      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            canvas.width = 72;
            canvas.height = 72;
            ctx.drawImage(img, 0, 0, 72, 72);
            station.logo = canvas.toDataURL('image/png');
          };
          img.src = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    };

    const handleReset = (e) => {
      e.preventDefault();
      Object.assign(station, { ...props.moreStation });
    };

    const handleSave = (e) => {
      e.preventDefault();
      setStorage('more', station);
    };

    const play = () => {
      setStorage('more', station);
      emit('play', station);
    };

    return { handleFileUpload, handleReset, handleSave, play, imageSrc, station };
  }
};
</script>

<style lang="scss">
  .form {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 212px;
    padding: 4px;

    &__group {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin: 2px;
      padding: 4px 6px;
      background-color: var(--content-color);

      &--column {
        flex-direction: column;
        justify-content: flex-start;
        align-items: flex-start;
      }

      &--actions {
        background-color: transparent;
        padding: 0;
        gap: 4px;
      }
    }

    &__label {
      width: 84px;
      padding: 4px 0;
      color: var(--light-color);
      font-size: 10px;
      font-weight: bold;
    }

    &__field {
      width: 100%;
      padding: 4px;
      border: solid 1px var(--border-color);
      border-radius: 4px;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      flex: 1 1 auto;
      height: 24px;
      background-color: var(--content-color);
      border: 1px solid var(--border-color);
      border-radius: 4px;
      text-align: center;
      cursor: pointer;
      font-size: 12px;
      font-weight: bold;
      margin: 2px;
      color: var(--dark-color);

      &:hover {
        background-color: var(--border-color);
      }
    }

    &__file {
      display: none;
    }
  }

  .placeholder {
    width: 320px;
    height: 50px;
  }
</style>
