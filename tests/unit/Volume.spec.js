import { shallowMount } from '@vue/test-utils'
import Volume from '@/components/Volume.vue'

const props = {
  messages: {
    mute: 'Mute',
    volume: 'Volume'
  },
  volume: 0.1
}

describe('Volume.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Volume, { props })
    expect(wrapper.element).toMatchSnapshot()
  })
})
