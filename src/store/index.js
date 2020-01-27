import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
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
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        },
        {
            title: "Blink",
            author: "Malcom Gladwell"
        }
    ]
  },
  getters: {
    getbooklist : (state) => {
      return state.booklist;
    }
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
