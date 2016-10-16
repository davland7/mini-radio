Vue.component('volume', {
  props: ['value', 'muted'],
  filters: {
    pourcent(value) {
      return value * 10 + ' %';
    }
  },
  methods: {
    volume() {
      this.$emit('volume', this.value);
    },
    mute() {
      this.$emit('mute', this.muted = this.muted ? false : true);
    }
  },
  computed: {
    icon() {
      if (!this.muted && this.value > 6) {
        return '295-volume-high';
      } else if (!this.muted && this.value > 2 && this.value < 7) {
        return '296-volume-medium';
      } else if (!this.muted && this.value && this.value < 3) {
        return '297-volume-low';
      } else if (this.muted) {
        return '299-volume-mute2';
      } else {
        return '298-volume-mute';
      }
    }
  },
  template: `<div class="volume">
    <div class="volume__stade">
      <svg @click="mute">
        <use xlink:href="images/volume.svg#{{ icon }}"/>
      </svg>
    </div>
    <div class="volume__control">
      <input @change="volume" v-model="value" class="volume__range" type="range" min="0" max="10" step="1" :value="value">
    </div>
    <div class="volume__pourcent">{{ value | pourcent }}</div>
  </div>`
})
