import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      booklist: []
  },
  getters: {
    getbooklist : (state) => {
      return state.booklist;
    },
    getbookentry : (state) => (id) => {
      let result = null;
      result = state.booklist.find( record  => record.internalId === id);
      return result;
    }
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
          }
      },
      deletebook(state,payload) {
        let result = null;
        result = state.booklist.findIndex(record => record.internalId === payload);
        if(result != -1) {
          state.booklist.splice(result,1);
        }
      }
  },
  actions: {
      addbook(context, payload) {
          context.commit('addbook',payload);
      },
      updatebook(context, payload) {
        context.commit('updatebook',payload);
      },
      deletebook(context, payload) {
        context.commit('deletebook',payload);
      }
  },
  modules: {
  }
})
