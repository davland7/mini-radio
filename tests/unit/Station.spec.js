import { shallowMount } from '@vue/test-utils'
import Station from '@/components/Station.vue'

const props = {
  messages: {
    play: 'Play'
  },
  item: {
    title: '92.5 The Beat',
    description: 'Montréal',
    src: '#',
    logo: 'ckbe-fm.png'
  }
}

describe('Station.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Station, { props })
    expect(wrapper.element).toMatchSnapshot()
  })
})
