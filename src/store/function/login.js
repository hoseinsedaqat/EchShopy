import router from '../../router';
import sha from 'sha.js'

function login(state, user) {
    var getUser = JSON.parse(localStorage.getItem('userAuth'))
    if (getUser.email === user.email && getUser.token === sha('sha256').update(user.pass).digest('hex')) {
        // console.log(true);
        getUser.auth = true;
        localStorage.setItem('userAuth', JSON.stringify(getUser));
        router.push('/');
    }
}

export { login }