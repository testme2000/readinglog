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
    }
  },
  mutations: {
      addbook(state,payload) {
          let bookrecord = {
              "displayId" : payload.displayId,
              "internalId" : payload.internalId,
              "title" : payload.title,
              "author" : payload.author
          }
          state.booklist.push(bookrecord);
      }
  },
  actions: {
      addbook(context, payload) {
          context.commit('addbook',payload);
      }
  },
  modules: {
  }
})
