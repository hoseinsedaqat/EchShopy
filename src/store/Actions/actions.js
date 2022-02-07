const actions = {
    addToCart: async ({ commit }, product) => {
        await commit('addToCart', product)
    },
    addQuantity: ({ commit }, idx) => {
        commit('addQuantity', idx)
    },
    removeQuantity: ({ commit }, idx) => {
        commit('removeQuantity', idx)
    },
    signUp: ({ commit }, user) => {
        commit('signUp', user)
    },
    Login: ({ commit }, user) => {
        commit('Login', user)
    },
    logOut: ({ commit }) => {
        commit('logOut')
    },
    changeData: ({ commit }, user) => {
        commit('changeData', user)
    },
    backToUp: ({ commit }) => {
        commit('backToUp')
    },
    openNav: ({ commit }) => {
        commit('openNav')
    },
    closeNav: ({ commit }) => {
        commit('closeNav')
    }
}

export default actions