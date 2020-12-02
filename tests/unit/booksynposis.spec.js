/* eslint-disable */
import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import booksynposis  from '@/components/booksynposis.vue'

const localVue = createLocalVue()


describe('Book Synposis.vue', () => {
    it('Basic Book Synposis basic comppoent', () => {
      const wrapper = shallowMount(booksynposis, {
          propsData: {
              bookentry : {
                displayId: 1,
                internalId: "5ecbb9989cb1f54bd8146130",
                title: "Blink",
                author: "Malcom Gladwell",
                isbn: "9780316005043"
              }
          }
      });
      expect(wrapper.isVisible()).to.equal(true);
      expect(wrapper.isVueInstance()).to.equal(true);
      expect(wrapper.name()).to.equal("booksynposis");
      expect(wrapper.html()).to.include("div");
    })
  });

  describe('Book Synposis', () => {
    it('Basic Book Synposis user interface layout', () => {
      const wrapper = shallowMount(booksynposis, {
          propsData: {
              bookentry : {
                displayId: 1,
                internalId: "5ecbb9989cb1f54bd8146130",
                title: "Blink",
                author: "Malcom Gladwell",
                isbn: "9780316005043"
              }
          }
      });
      // Diaog Verification
      expect(wrapper.html()).to.include("md-dialog");
      const dialog = wrapper.find("md-dialog");
      expect(dialog.exists()).to.equal(true);
      // md-card Verification
      expect(dialog.html()).to.include("md-card");
      const card = wrapper.findAll("md-card");
      expect(card.at(0).html()).to.include("md-card-header");
      expect(card.at(0).html()).to.include("md-card-content");
      // md-card-header Verification
      const cardHead = wrapper.find("md-card-header");
      expect(cardHead.html()).to.include("md-card-header-text");
      expect(cardHead.html()).to.include("md-card-media");
      // md-card-header-text verification
      const cardHeadText = wrapper.find("md-card-header-text");
      const allSubDiv = cardHeadText.findAll("div");
      expect(allSubDiv.length).to.equal(2);
      expect(allSubDiv.at(0).html()).to.include("div");
      expect(allSubDiv.at(0).exists()).to.equal(true); 
      expect(allSubDiv.at(0).text()).to.equal("Summary");
      expect(allSubDiv.at(0).element.className).to.equal("md-title");
      expect(allSubDiv.at(0).attributes("class")).to.equal("md-title");
      expect(allSubDiv.at(1).html()).to.include("div");
      expect(allSubDiv.at(1).exists()).to.equal(true); 
      expect(allSubDiv.at(1).text()).to.equal("Blink");
      expect(allSubDiv.at(1).element.className).to.equal("md-subhead");
      expect(allSubDiv.at(1).attributes("class")).to.equal("md-subhead");
      // md-card-media verficiation
      const cardMedia = wrapper.find("md-card-media");
      expect(cardMedia.exists()).to.equal(true);
      expect(cardMedia.text()).to.equal("");
      // md-card-content verification
      const cardContent = wrapper.find("md-card-content");
      expect(cardContent.exists()).to.equal(true);
      // md-dialog-actions verfication
      const actions = wrapper.find("md-dialog-actions");
      expect(actions.exists()).to.equal(true);
      expect(actions.html()).to.include("md-button");
      // md-buttons verfication
      const actionsButton = actions.find("md-button");
      expect(actionsButton.exists()).to.equal(true);
      expect(actionsButton.text()).to.equal("Close");
      expect(actionsButton.element.className).to.equal("md-primary");
      expect(actionsButton.attributes("class")).to.equal("md-primary");
    })
  });

  describe('Book Synposis', () => {
    it('Book Synposis data interaction', () => {
      const wrapper = shallowMount(booksynposis, {
          propsData: {
              bookentry : {
                displayId: 1,
                internalId: "5ecbb9989cb1f54bd8146130",
                title: "Blink",
                author: "Malcom Gladwell",
                isbn: "9780316005043"
              }
          }
      });
      // Validate Book Synposis Component with initial Data Property
      expect(wrapper.isVisible()).to.equal(true);
      expect(wrapper.isVueInstance()).to.equal(true);
      expect(wrapper.name()).to.equal("booksynposis");
      expect(wrapper.vm.booksummary).to.equal(null);
      expect(wrapper.vm.bookimage).to.equal(null);
      expect(wrapper.vm.showDialog).to.equal(true);
      expect(wrapper.vm.fetchbooksummary).to.equal(false);
      // Validate Book Synposis Method 
      wrapper.vm.closeDialog();
      expect(wrapper.vm.showDialog).to.equal(false);
      expect(wrapper.vm.fetchbooksummary).to.equal(false);
      // Validate Button click and its response
      const closeBtn = wrapper.find("md-button");
      closeBtn.trigger("click");
      expect(wrapper.vm.showDialog).to.equal(false);
      expect(wrapper.vm.fetchbooksummary).to.equal(false);
      // Validate closesynposis emited event
      expect(wrapper.emitted()).to.not.be.undefined;
      expect(wrapper.emitted()).to.have.property('closesynposis');
      expect(wrapper.emitted()).to.have.keys(['closesynposis']);
    });
  });
/* eslint-enable */