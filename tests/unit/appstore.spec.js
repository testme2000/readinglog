import vuex from "vuex"
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import app from '@/App.vue'
import { isIterable } from "core-js";

describe("Store check", () => {
    it('Validate store', () => {
        let appWrapper = shallowMount(app, {
            mocks: {
              $store: {
                state: 
                {  
                    booklist: [
                        {
                            title: "Blink",
                            author: "Malcom Gladwell"
                        },
                        {
                            title: "Tipping Point",
                            author: "Malcom Gladwell"
                        },
                        {
                            title: "What the dog saw",
                            author: "Malcom Gladwell"
                        }
                    ]    
                },
                getters: {
                    getbooklist : (state) => {
                        return state.booklist;
                      }
                }
              }
            }
          });


          expect(appWrapper.isVueInstance()).to.equal(true);
          expect(appWrapper.vm.$store.state.booklist).toBeInstanceOf(Array);
    });
});

