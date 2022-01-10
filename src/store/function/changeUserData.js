import router from "../../router";

function changeUseData(state, user) {
    var getUser = JSON.parse(localStorage.getItem('userAuth'));
    if (getUser.auth) {
        if (user.email) {
            getUser.email = user.email;
            localStorage.setItem('userAuth', JSON.stringify(getUser))
            router.go('/');
        } else {
            // For Test
            alert('please enter email...')
        }
    }
    // router.go('/profile/update-profile')
}

export { changeUseData }