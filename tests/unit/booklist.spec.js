/* eslint-disable */
import { expect } from 'chai'
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
import Booklist  from '@/components/booklist.vue'

const localVue = createLocalVue()
localVue.use(VueMaterial)

describe('Booklist.vue', () => {
  it('Display reading log initial layout', () => {
    const wrapper = shallowMount(Booklist, {
      localVue,
      mocks: {
        $store: {
          state: 
          {  
              booklist: [
                  {
                      displayId: 1,
                      internalId: "5ecbb9989cb1f54bd8146130",
                      title: "Blink",
                      author: "Malcom Gladwell",
                      isbn: "9780316005043"
                  },
                  {
                      displayId: 2,
                      internalId: "5ecbbd8f9cb1f54bd8146132",
                      title: "Tipping Point",
                      author: "Malcom Gladwell",
                      isbn: "9780759574731"
                  },
                  {
                      displayId: 3,
                      internalId: "5ecbc2f2d3b4710f04a103c8",
                      title: "What the dog saw",
                      author: "Malcom Gladwell",
                      isbn: "9780316086134"
                  }
              ]    
          },
          getters: {
                getbooklist : (state) => {
                  return state.booklist;
                },
                getbookentry : (state,id) => {
                    let result = null;
                    result = state.booklist.find( record  => record.internalId === id);
                    return result;
                }
          }
        }
      },
      data : function() {
        return {
            currentbooklist : this.$store.getters.getbooklist,
            status : true,
            synposisTime : false,
            bookrecord : null,
            activeInternalId : 0
        }
      }
    });
    // Basic Vue component Verification
    expect(wrapper.isVisible()).to.equal(true);
    expect(wrapper.isVueInstance()).to.equal(true);
    expect(wrapper.name()).to.equal("Booklist");
    // Div Container verification
    expect(wrapper.html()).to.include("div");
    // h1 verficiation 
    expect(wrapper.html()).to.include("h1");
    const h1 = wrapper.find('h1');
    expect(h1.exists()).to.equal(true); 
    expect(h1.text()).to.equal("Booklist log as on date");
    expect(h1.element.className).to.equal("md-title");
    // All Table  body content layout verification
    expect(wrapper.html()).to.include("md-table-toolbar");
    expect(wrapper.html()).to.include("mdsort");
    expect(wrapper.html()).to.include("displayId");
    expect(wrapper.html()).to.include("md-sort-order");
    expect(wrapper.html()).to.include("asc"); 
    expect(wrapper.html()).to.include("md-card");
    // Md-table verfication
    expect(wrapper.html()).to.include("md-table");
    const table = wrapper.find('md-table-stub');
    expect(table.exists()).to.equal(true);
    expect(table.attributes("md-sort")).to.equal("displayId");
    expect(table.attributes("mdsortorder")).to.equal("asc");
    expect(table.attributes("md-card")).to.equal("");
    // Md-table-toolbar  verification
    expect(table.html()).to.include("md-table-toolbar");
    const toolbar = wrapper.findAll("md-table-toolbar-stub");
    expect(toolbar.length).to.equal(1);
    expect(toolbar.at(0).html()).to.include("h1");
    // Md-table-head verification
    expect(table.html()).to.include("md-table-head");
    const head = wrapper.findAll('md-table-head-stub');
    expect(head.length).to.equal(3);
    expect(head.at(0).exists()).to.equal(true)
    expect(head.at(0).text()).to.equal("ID");
    expect(head.at(1).exists()).to.equal(true)
    expect(head.at(1).text()).to.equal("Title");
    expect(head.at(2).exists()).to.equal(true)
    expect(head.at(2).text()).to.equal("Author");
  })

  it('Display reading log with fillup record', () => {
    const wrapper = shallowMount(Booklist, {
      localVue,
      mocks: {
        $store: {
          state: 
          {  
              booklist: [
                  {
                      displayId: 1,
                      internalId: "5ecbb9989cb1f54bd8146130",
                      title: "Blink",
                      author: "Malcom Gladwell",
                      isbn: "9780316005043"
                  },
                  {
                      displayId: 2,
                      internalId: "5ecbbd8f9cb1f54bd8146132",
                      title: "Tipping Point",
                      author: "Malcom Gladwell",
                      isbn: "9780759574731"
                  },
                  {
                      displayId: 3,
                      internalId: "5ecbc2f2d3b4710f04a103c8",
                      title: "What the dog saw",
                      author: "Malcom Gladwell",
                      isbn: "9780316086134"
                  }
              ]    
          },
          getters: {
                getbooklist : (state) => {
                  return state.booklist;
                },
                getbookentry : (state,id) => {
                    let result = null;
                    result = {
                                displayId: 1,
                                internalId: "5ecbb9989cb1f54bd8146130",
                                title: "Blink",
                                author: "Malcom Gladwell",
                                isbn: "9780316005043"
                            };
                    return result;
                }
          }
        }
      },
      data : function() {
        return {
            currentbooklist : [
              {
                  displayId: 1,
                  internalId: "5ecbb9989cb1f54bd8146130",
                  title: "Blink",
                  author: "Malcom Gladwell",
                  isbn: "9780316005043"
              },
              {
                  displayId: 2,
                  internalId: "5ecbbd8f9cb1f54bd8146132",
                  title: "Tipping Point",
                  author: "Malcom Gladwell",
                  isbn: "9780759574731"
              },
              {
                  displayId: 3,
                  internalId: "5ecbc2f2d3b4710f04a103c8",
                  title: "What the dog saw",
                  author: "Malcom Gladwell",
                  isbn: "9780316086134"
              }
          ],
            status : true,
            synposisTime : false,
            bookrecord : null,
            activeInternalId : 0
        }
      }
    });
    //LOADING IS SUCCESSFUL, NOW ADD THE TESTING PART
    // Validate Basic Component with initial Data Property
    expect(wrapper.isVisible()).to.equal(true);
    expect(wrapper.isVueInstance()).to.equal(true);
    expect(wrapper.name()).to.equal("Booklist");
    expect(wrapper.vm.currentbooklist).to.not.equal(null);
    expect(wrapper.vm.currentbooklist).to.be.an("Array");
    expect(wrapper.vm.currentbooklist.length).to.equal(3);
    expect(wrapper.vm.status).to.equal(true);
    expect(wrapper.vm.synposisTime).to.equal(false);
    expect(wrapper.vm.bookrecord).to.equal(null);
    expect(wrapper.vm.activeInternalId).to.equal(0);
    // Validate Booklist Method
    // Show Summary
    wrapper.vm.showSummary("5ecbb9989cb1f54bd8146130");
    expect(wrapper.vm.synposisTime).to.equal(true);
    expect(wrapper.vm.activeInternalId).to.equal("5ecbb9989cb1f54bd8146130");
    expect(wrapper.vm.disableShowSummary).to.equal(true);
    // +ve Computed Property
    expect(wrapper.vm.summaryOn).to.equal(true);
    expect(wrapper.vm.isShowSummaryOn).to.equal(true);
    // hide Summary
    wrapper.vm.hideSummary();
    expect(wrapper.vm.synposisTime).to.equal(false);
    expect(wrapper.vm.activeInternalId).to.equal(0);
    expect(wrapper.vm.disableShowSummary).to.equal(false);
    expect(wrapper.vm.bookrecord).to.equal(null);
    // -ve Computed Property
    expect(wrapper.vm.summaryOn).to.equal(false);
    expect(wrapper.vm.isShowSummaryOn).to.equal(false);
  })
})
/* eslint-enable */