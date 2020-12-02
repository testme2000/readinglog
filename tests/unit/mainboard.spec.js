/* eslint-disable */
import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Mainboard  from '@/components/mainboard.vue'

describe('Mainboard.vue', () => {
  it('Display readinglog board', () => {
    const wrapper = shallowMount(Mainboard);

    expect(wrapper.isVisible()).to.equal(true);
    expect(wrapper.isVueInstance()).to.equal(true);
    expect(wrapper.name()).to.equal("Mainboard");
    expect(wrapper.html()).to.include("div");
    expect(wrapper.vm.status).to.equal(true);
  })
})

/* eslint-enable */
