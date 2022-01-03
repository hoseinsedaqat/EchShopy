import router from "../../router";

function logOut() {
    var getUser = JSON.parse(localStorage.getItem('userAuth'));
    if (getUser.auth) {
        getUser.auth = false;
        localStorage.setItem('userAuth', JSON.stringify(getUser))
        // Learn something new router.push add you from this page to other page 
        // but router.go can reload plus other thing that Cool
        // i know it before but i thought this two method both once, but they have diffrent
        router.go('/');
    }
}

export { logOut }