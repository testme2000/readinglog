/* eslint-disable */
import vuex from "vuex"
import { shallowMount, mount, createLocalVue } from '@vue/test-utils'
import app from '@/App.vue'
import { isIterable } from "core-js";
import { expect } from 'chai';

import VueRouter from 'vue-router'
//import { get } from "core-js/fn/dict";

const localVue = createLocalVue()
localVue.use(VueRouter)
const router = new VueRouter()

describe("Store check", () => {
    it('Validate store', () => {

        let appWrapper = shallowMount(app, {
            localVue,
            router,
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
                      }
                }
              }
            }
          });
          expect(appWrapper.vm.$store.state.booklist).to.be.an("Array");
          expect(appWrapper.vm.$store.state.booklist).to.have.lengthOf(3);
          expect(appWrapper.vm.$store.state.booklist).to.deep.include({
                                                        displayId: 1,
                                                        internalId: "5ecbb9989cb1f54bd8146130",
                                                        title: "Blink",
                                                        author: "Malcom Gladwell",
                                                        isbn: "9780316005043"
                                                    });
          // Validate each object member
          // DisplayId
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.own.property('displayId');
          expect(appWrapper.vm.$store.state.booklist[0].displayId).to.be.a('Number');
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.property("displayId",1);
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.keys(["displayId","internalId","title","author","isbn"]);
          // Internal Id
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.own.property('internalId');
          expect(appWrapper.vm.$store.state.booklist[0].internalId).to.be.a('String');
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.property("internalId","5ecbb9989cb1f54bd8146130");
          // Title
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.own.property('title');
          expect(appWrapper.vm.$store.state.booklist[0].internalId).to.be.a('String');
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.property("title","Blink");
          // Author
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.own.property('author');
          expect(appWrapper.vm.$store.state.booklist[0].internalId).to.be.a('String');
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.property("author","Malcom Gladwell");
          // ISBN
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.own.property('isbn');
          expect(appWrapper.vm.$store.state.booklist[0].internalId).to.be.a('String');
          expect(appWrapper.vm.$store.state.booklist[0]).to.have.property("isbn","9780316005043");
     });

    it('Validate store State - getters', () => {
      let appWrapper = shallowMount(app, {
          localVue,
          router,
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
          }
        });
        // Validate State
        // Getters - getbooklist
        let allBook = appWrapper.vm.$store.getters.getbooklist(appWrapper.vm.$store.state);
        expect(allBook).to.be.an("Array");
        expect(allBook).to.have.lengthOf(3);
        expect(allBook).to.deep.include({
            displayId: 1,
            internalId: "5ecbb9989cb1f54bd8146130",
            title: "Blink",
            author: "Malcom Gladwell",
            isbn: "9780316005043"
        });
        // DisplayId
        expect(allBook[0]).to.have.own.property('displayId');
        expect(allBook[0].displayId).to.be.a('Number');
        expect(allBook[0]).to.have.property("displayId",1);
        expect(allBook[0]).to.have.keys(["displayId","internalId","title","author","isbn"]);
        // Internal Id
        expect(allBook[0]).to.have.own.property('internalId');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("internalId","5ecbb9989cb1f54bd8146130");
        // Title
        expect(allBook[0]).to.have.own.property('title');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("title","Blink");
        // Author
        expect(allBook[0]).to.have.own.property('author');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("author","Malcom Gladwell");
        // ISBN
        expect(allBook[0]).to.have.own.property('isbn');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("isbn","9780316005043");
        // getters-getbookentry
        let oneBook = appWrapper.vm.$store.getters.getbookentry(appWrapper.vm.$store.state,"5ecbb9989cb1f54bd8146130");
        console.log(oneBook);
        expect(oneBook).to.be.an("Object");
        expect(oneBook).to.deep.include({
            displayId: 1,
            internalId: "5ecbb9989cb1f54bd8146130",
            title: "Blink",
            author: "Malcom Gladwell",
            isbn: "9780316005043"
        });
        // DisplayId
        expect(oneBook).to.have.own.property('displayId');
        expect(oneBook.displayId).to.be.a('Number');
        expect(oneBook).to.have.property("displayId",1);
        expect(oneBook).to.have.keys(["displayId","internalId","title","author","isbn"]);
        // Internal Id
        expect(oneBook).to.have.own.property('internalId');
        expect(oneBook.internalId).to.be.a('String');
        expect(oneBook).to.have.property("internalId","5ecbb9989cb1f54bd8146130");
        // Title
        expect(oneBook).to.have.own.property('title');
        expect(oneBook.internalId).to.be.a('String');
        expect(oneBook).to.have.property("title","Blink");
        // Author
        expect(oneBook).to.have.own.property('author');
        expect(oneBook.internalId).to.be.a('String');
        expect(oneBook).to.have.property("author","Malcom Gladwell");
        // ISBN
        expect(oneBook).to.have.own.property('isbn');
        expect(oneBook.internalId).to.be.a('String');
        expect(oneBook).to.have.property("isbn","9780316005043");
    });
    it('Validate store State - Muttions', () => {
      let appWrapper = shallowMount(app, {
          localVue,
          router,
          mocks: {
            $store: {
              state: 
              {  
                  booklist: []    
              },
              mutations: {
                addbook(state,payload) {
                    let bookrecord = {
                        "displayId" : state.booklist.length + 1,
                        "internalId" : payload.internalId,
                        "title" : payload.title,
                        "author" : payload.author,
                        "isbn" : payload.isbn
                    }
                    state.booklist.push(bookrecord);
                },
                updatebook(state,payload) {
                    let result = null;
                    result = state.booklist.findIndex( record  => record.internalId === payload.internalId);
                    if(result != -1) {
                        state.booklist[result].title = payload.title;
                        state.booklist[result].author = payload.author;
                        state.booklist[result].isbn = payload.isbn;
                    }
                }
              }
            }
          }
        });
        // Validate State - Muttions
        let newBook = { internalId: "5ecbc2f2d3b4710f04a103c8",
                        title: "What the dog saw",
                        author: "Malcom Gladwell",
                        isbn: "9780316086134"
                      };
        // Add the new book
        appWrapper.vm.$store.mutations.addbook(appWrapper.vm.$store.state,newBook);
        // Validate the state
        let allBook = appWrapper.vm.$store.state.booklist;
        console.log(allBook);
        expect(allBook).to.be.an("Array");
        expect(allBook).to.have.lengthOf(1);
        // DisplayId
        expect(allBook[0]).to.have.own.property('displayId');
        expect(allBook[0].displayId).to.be.a('Number');
        expect(allBook[0]).to.have.property("displayId",1);
        expect(allBook[0]).to.have.keys(["displayId","internalId","title","author","isbn"]);
        // Internal Id
        expect(allBook[0]).to.have.own.property('internalId');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("internalId","5ecbc2f2d3b4710f04a103c8");
        // Title
        expect(allBook[0]).to.have.own.property('title');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("title","What the dog saw");
        // Author
        expect(allBook[0]).to.have.own.property('author');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("author","Malcom Gladwell");
        // ISBN
        expect(allBook[0]).to.have.own.property('isbn');
        expect(allBook[0].internalId).to.be.a('String');
        expect(allBook[0]).to.have.property("isbn","9780316086134");

    });
});
/* eslint-enable */