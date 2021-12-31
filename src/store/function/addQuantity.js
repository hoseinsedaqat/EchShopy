function addQuantity(state, idx) {
    const qP = state.basketCart.find(pro => pro.id === idx);
    if (qP) {
        qP.quantity++;
        localStorage.setItem('dataBasketCart', JSON.stringify(state.basketCart));
    }
}

export { addQuantity }