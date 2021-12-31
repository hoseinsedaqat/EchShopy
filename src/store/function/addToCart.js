function addToCart(state, product) {
    const qP = state.basketCart.find(pro => pro.id === product.id);
    // qP that Mean Quantity for each Product
    if (!qP) {
        state.basketCart.push(product);
        localStorage.setItem('dataBasketCart', JSON.stringify(state.basketCart));
    } else {
        qP.quantity++;
        localStorage.setItem('dataBasketCart', JSON.stringify(state.basketCart));
    }
}

export { addToCart }