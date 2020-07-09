import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        loginVisible: false
    },
    mutations: {
        changeLoginVisible(state) {
            state.loginVisible = !state.loginVisible
            console.log(
                state.loginVisible
            );
        }
    },
    actions: {},
    modules: {}
})