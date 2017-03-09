import Vue from 'vue'
import Vuex from 'vuex'
import * as actions from './actions'
import * as getters from './getters'
import mutations from './mutations'
import state from './state'

Vue.use(Vuex)

// We're doing a simple app, there's no need to modularize
export default new Vuex.Store({
  actions,
  getters,
  mutations,
  state,
  strict: true // Prevent mutations outside mutation handlers
})
