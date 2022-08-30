import { shallowMount } from '@vue/test-utils'
import Navbar from '@/components/Navbar.vue'

const props = {
  messages: {
    list: 'List',
    name: 'Mini Radio'
  },
  currentTab: 1,
  totalTabs: 3,
  stationsPerTab: 5
}

describe('Navbar.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Navbar, { props })
    expect(wrapper.element).toMatchSnapshot()
  })
})
