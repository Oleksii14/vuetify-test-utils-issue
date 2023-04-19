import { shallowMount } from '@vue/test-utils'
import HelloWorld from "./HelloWorld.vue";

describe('HelloWorld', () => {
  it('renders', () => {
    const wrapper = shallowMount(HelloWorld)
    expect(wrapper.exists()).toBe(true)
  })
})