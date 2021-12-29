function rQuantity(state, idx) {
    const qP = state.basketCart.find(pro => pro.id === idx.idx);
    if (qP.quantity > 1 && qP) {
        qP.quantity--;
        localStorage.setItem('dataBasketCart', JSON.stringify(state.basketCart));
    } else if (qP.quantity <= 1 && qP) {
        state.basketCart.splice(idx.index, 1);
        localStorage.setItem('dataBasketCart', JSON.stringify(state.basketCart));
    }
}

export { rQuantity }