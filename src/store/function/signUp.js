import router from '../../router';

import sha from 'sha.js'

function signUp(state, user) {
    localStorage.setItem('userAuth', JSON.stringify({
        auth: false,
        name: user.name,
        email: user.email,
        token: sha('sha256').update(user.pass).digest('hex')
    }))
    router.push('/login')
}

export { signUp }