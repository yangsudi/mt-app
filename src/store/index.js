import Vue from 'vue'
import Vuex from 'vuex'
import { routes } from '../router'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    routes: routes
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
