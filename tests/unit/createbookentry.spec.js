/* eslint-disable */
import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import createbookentry  from '@/components/createbookentry.vue'

describe('Create Book Entry Basic Component Test', () => {
    it('Create Book Entry Basic comppoent Verification', () => {
      const wrapper = shallowMount(createbookentry);
      expect(wrapper.isVisible()).to.equal(true);
      expect(wrapper.isVueInstance()).to.equal(true);
      expect(wrapper.name()).to.equal("createbookentry");
    })
});

describe('Create Book Entry User Interface test', () => {
    it('Create Book Entry user interface layout', () => {
      const wrapper = shallowMount(createbookentry);

      expect(wrapper.html()).to.include("div");
      // h1 verficiation 
      expect(wrapper.html()).to.include("h1");
      const h1 = wrapper.find('h1');
      expect(h1.exists()).to.equal(true); 
      expect(h1.text()).to.equal("Add book to Reading Log");
      expect(h1.element.className).to.equal("md-title");
      const form = wrapper.find('form');
      expect(form.exists()).to.equal(true); 
      expect(form.element.className).to.equal("md-layout");
      const card = wrapper.find('md-card');
      expect(card.exists()).to.equal(true);
      expect(card.element.className).to.equal("md-layout-item md-size-50 md-small-size-100")
      const cardHeader = wrapper.find('md-card-header');
      expect(cardHeader.exists()).to.equal(true);
      const cardDiv = wrapper.findAll('div');
      expect(cardDiv.exists()).to.equal(true);
      expect(cardDiv.length).to.equal(5);
      const cardContent = wrapper.find("md-card-content");
      expect(cardContent.exists()).to.equal(true);
      // All div within md-card-content
      const cardContentDiv = cardContent.findAll('div');
      expect(cardContentDiv.length).to.equal(2);
      expect(cardContentDiv.at(0).exists()).to.equal(true);
      expect(cardContentDiv.at(0).element.className).to.equal("md-layout md-gutter");
      expect(cardContentDiv.at(1).exists()).to.equal(true);
      expect(cardContentDiv.at(1).element.className).to.equal("md-layout-item md-small-size-100");
      // All md-field within md-card-content
      const fieldIncard = cardContent.findAll('md-field');
      expect(fieldIncard.length).to.equal(2);
      expect(fieldIncard.at(0).exists()).to.equal(true);
      expect(fieldIncard.at(1).exists()).to.equal(true);
      // All label within md-card-content
      const labelInCard = cardContent.findAll('label');
      expect(labelInCard.length).to.equal(2);
      expect(labelInCard.at(0).exists()).to.equal(true);
      expect(labelInCard.at(0).attributes('for')).to.equal('title');
      expect(labelInCard.at(0).text()).to.equal("Title");
      expect(labelInCard.at(1).exists()).to.equal(true);
      expect(labelInCard.at(1).text()).to.equal("Author");
      expect(labelInCard.at(1).attributes('for')).to.equal('author');
      const mdInput = cardContent.findAll('md-input');
      expect(mdInput.length).to.equal(2);
      expect(mdInput.at(0).exists()).to.equal(true);
      expect(mdInput.at(0).attributes('id')).to.equal('title');
      expect(mdInput.at(1).exists()).to.equal(true);
      expect(mdInput.at(1).attributes('id')).to.equal('author');
      const mdActions = card.findAll('md-card-actions');
      expect(mdActions.length).to.equal(1);
      expect(mdActions.at(0).exists()).to.equal(true);
      const mdActButton = mdActions.at(0).find('md-button');
      expect(mdActButton.exists()).to.equal(true);
      expect(mdActButton.element.className).to.equal("md-primary");
      expect(mdActButton.attributes('type')).to.equal('submit');
      expect(mdActButton.text()).to.equal("Add Book");
    })
});

describe('Create Book Entry Data Test', () => {
  it('Create Book Entry Data Verification', () => {
      const wrapper = shallowMount(createbookentry);
      expect(wrapper.vm.errors.length).to.equal(0);
      expect(wrapper.vm.title).to.equal('');
      expect(wrapper.vm.author).to.equal("");
      expect(wrapper.vm.statusmsg).to.equal("");
  })
});

describe('Create Book Entry Method Test', () => {
  it('Create Book Entry Method Verification', () => {
      var e = {
        preventDefault: () => {

        }
      }
      const wrapper = shallowMount(createbookentry);
      // Clear Status
      // Set something in Status Message
      wrapper.vm.statusmsg = "TEST";
      wrapper.vm.clearStatus();
      expect(wrapper.vm.statusmsg).to.equal("");
      // Clear Form
      // Set something in title and author
      wrapper.vm.title = "Dummy";
      wrapper.vm.author = "Another Dummy";
      wrapper.vm.clearForm();
      expect(wrapper.vm.title).to.equal("");
      expect(wrapper.vm.author).to.equal("");
      // Add Log Entry
      // Pass Blank title
      wrapper.vm.title = "";
      wrapper.vm.author = "";
      wrapper.vm.addNewLogEntry(e);
      expect(wrapper.vm.errors.length).to.greaterThan(0);
      expect(wrapper.vm.errors[0]).to.equal("Please add the title of the book");
      expect(wrapper.vm.errors[1]).to.equal("Please add the author of the book");
      // Pass Valid title
      wrapper.vm.title = "This is Test Book";
      wrapper.vm.author = "Test Author";
      wrapper.vm.addNewLogEntry(e);
      expect(wrapper.vm.errors.length).to.equal(0);
      console.log("Status Message : " + wrapper.vm.statusmsg);

    })
});
