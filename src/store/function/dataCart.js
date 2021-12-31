function dataCart(state) {
    if (localStorage.getItem('dataBasketCart')) {
        state.basketCart = JSON.parse(localStorage.getItem('dataBasketCart'));
    }
}

export { dataCart }