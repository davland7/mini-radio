import { shallowMount } from '@vue/test-utils'
import Footer from '@/components/Footer.vue'

const props = {
  messages: {
    version: '2.0.0',
    homePageUrl: '#',
    github: 'GitHub'
  }
}

describe('Footer.vue', () => {
  it('renders correctly', () => {
    const wrapper = shallowMount(Footer, { props })
    expect(wrapper.element).toMatchSnapshot()
  })
})
