import Vue from 'vue'
import Vuex from 'vuex'
import state from './State/state'
import mutations from './Mutations/mutations'
import actions from './Actions/actions'

Vue.use(Vuex)

export default new Vuex.Store({
  state,
  mutations,
  actions,
  // later Refactor it
  modules: {}
})
