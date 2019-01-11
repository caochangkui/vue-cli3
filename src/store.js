import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

let defaultCity = '北京'

try {
    if (localStorage.city) {
      defaultCity = localStorage.city
    }
  } catch (e) {e}

const state = {
    count: 1,
    city: defaultCity
}

const mutations = {
    increment (state, param) {
        state.count += param
    },
    decrement (state) {
        state.count --
    },
    changeCity (state, city) {
        state.city = city
        try {
          localStorage.city = city
        } catch (e) {e}
    }
}

const actions = {
    increment: ({commit}, param) => {
        commit('increment', param)
    },
    decrement: ({commit}) => {
        commit('decrement')
    }
}

export default new Vuex.Store({
    state,
    mutations,
    actions
})