function checkAuth(to, from, next) {
    if (localStorage.getItem('userAuth')) {
        var auth = JSON.parse(localStorage.getItem('userAuth'));
        if (auth.auth) {
            next()
        } else {
            next({
                path: '/'
            })
        }
    } else {
        next({
            path: '/'
        })
    }
}

export { checkAuth }