import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
    count: 1
}

const mutations = {
    increment (state, param) {
        state.count += param
    },
    decrement (state) {
        state.count --
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