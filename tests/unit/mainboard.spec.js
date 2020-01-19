import { expect } from 'chai'
import { shallowMount } from '@vue/test-utils'
import Mainboard  from '@/components/mainboard.vue'

describe('Mainboard.vue', () => {
  it('Display readinglog board', () => {
    const wrapper = shallowMount(Mainboard);

    expect(wrapper.isVisible()).to.equal(true);
    expect(wrapper.isVueInstance()).to.equal(true);
    expect(wrapper.name()).to.equal("Mainboard");
    expect(wrapper.html()).to.include("div");
  })
})
