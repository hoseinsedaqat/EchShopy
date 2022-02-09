const actions = {
    addToCart: async ({ commit }, product) => {
        await commit('addToCart', product)
    },
    addQuantity: async({ commit }, idx) => {
        await commit('addQuantity', idx)
    },
    removeQuantity: async ({ commit }, idx) => {
        await commit('removeQuantity', idx)
    },
    signUp: async({ commit }, user) => {
        await commit('signUp', user)
    },
    Login: async({ commit }, user) => {
        await commit('Login', user)
    },
    logOut: async({ commit }) => {
        await commit('logOut')
    },
    changeData: async({ commit }, user) => {
        await commit('changeData', user)
    },
    backToUp: async({ commit }) => {
        await commit('backToUp')
    },
    openNav: async({ commit }) => {
        await commit('openNav')
    },
    closeNav: async({ commit }) => {
        await commit('closeNav')
    }
}

export default actions