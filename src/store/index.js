import Vue from 'vue'
import Vuex from 'vuex'
import VuexFire from 'vuexfire'
import * as getters from './getters'
import * as actions from './actions'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)
Vue.use(VuexFire)

// We're doing a simple app, there's no need to modularize
export default new Vuex.Store({
  actions: actions,
  state: state,
  mutations: Object.assign({}, VuexFire.mutations, mutations),
  getters: getters
})
