import axios from 'axios'
import { createStore } from 'vuex'

export default createStore({
  state: {
    users: [],
    counter: []
  },
  mutations: {
    addUsers(state, payload){
    state.users = payload
    return state.users
    }
  },
  actions: {
    async getUsers({ commit }) {
      const respone = await axios.get('https://jsonplaceholder.typicode.com/users')
    commit('addUsers', respone.data)
    }
  },
  getters:{
  },
  modules: {
  }
})
