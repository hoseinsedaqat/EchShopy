import sha from 'sha.js';
import router from '../../router';
import { rQuantity } from '../function/removeQuantity';
import { addToCart } from '../function/addToCart'

// Mutations it's change very soon for more readable;

const mutations = {
    addToCart: (state, product) => {
        addToCart(state, product)
    },

    dataCart: (state) => {
        if (localStorage.getItem('dataBasketCart')) {
            state.basketCart = JSON.parse(localStorage.getItem('dataBasketCart'));
        }
    },

    addQuantity: (state, idx) => {
        const qP = state.basketCart.find(pro => pro.id === idx);
        if (qP) {
            qP.quantity++;
            localStorage.setItem('dataBasketCart', JSON.stringify(state.basketCart));
        }
    },

    removeQuantity: (state, idx) => {
        rQuantity(state, idx)
    },

    signUp: (state, user) => {
        localStorage.setItem('userAuth', JSON.stringify({
            auth: false,
            name: user.name,
            email: user.email,
            token: sha('sha256').update(user.pass).digest('hex')
        }))
        router.push('/login')
    },

    Login: (state, user) => {
        var getUser = JSON.parse(localStorage.getItem('userAuth'))
        if (getUser.email === user.email && getUser.token === sha('sha256').update(user.pass).digest('hex')) {
            // console.log(true);
            getUser.auth = true;
            localStorage.setItem('userAuth', JSON.stringify(getUser));
            router.push('/');
        }
    },

    logOut: () => {
        var getUser = JSON.parse(localStorage.getItem('userAuth'));
        if (getUser.auth) {
            getUser.auth = false;
            localStorage.setItem('userAuth', JSON.stringify(getUser))
            // Learn something new router.push add you from this page to other page 
            // but router.go can reload plus other thing that Cool
            // i know it before but i thought this two method both once, but they have diffrent
            router.go('/');
        }
    },
    changeData: (state, user) => {
        var getUser = JSON.parse(localStorage.getItem('userAuth'));
        if (getUser.auth) {
            if (user.email) {
                getUser.email = user.email;
                localStorage.setItem('userAuth', JSON.stringify(getUser))
                router.go('/profile/update-profile');
            } else {
                // For Test
                alert('please enter email...')
            }
        }
        // router.go('/profile/update-profile')
    },

    backToUp: () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    },

    openNav: () => {
        document.getElementById("mySideNav").style.width = "250px";
        document.body.style.opacity = "0.8";
    },

    closeNav: () => {
        document.getElementById("mySideNav").style.width = "0";
        document.body.style.opacity = "2";
    }
}

export default mutations;