const state = {
    isAuthenticated: false 
}

const getters = {
    isAuthenticated: state => state.isAuthenticated
}

const actions = {

}

const mutations = {
    TOGGLE_AUTH(state) {
        state.isAuthenticated = !state.isAuthenticated
    },
}

export default {
    state,
    getters,
    actions,
    mutations
}