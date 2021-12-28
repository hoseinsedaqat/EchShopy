function getUserData() {
    if (localStorage.getItem('userAuth')) {
        var userData = JSON.parse(localStorage.getItem("userAuth"));
        return userData;

    }
}

export { getUserData }