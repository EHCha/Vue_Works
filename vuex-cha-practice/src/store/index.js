import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'message in store'
  },
  getters: {
    message(state) {
      return state.message
    }
  },
  mutations: {
    CHANGE_MESSAGE(state, newMessage) {
      console.log(state)
      console.log(newMessage)
      state.message = newMessage
    }
  },
  actions: {
    changeMessage(context, newMessage) {
      console.log(context)
      console.log(newMessage)
      context.commit('CHANGE_MESSAGE', newMessage)
      // 액션에서 대문자로 mutations변수로 넘겨줌
    }
  },
  modules: {
  }
})
