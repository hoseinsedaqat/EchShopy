import { rQuantity } from '../function/removeQuantity';
import { addToCart } from '../function/addToCart';
import { dataCart } from '../function/dataCart';
import { addQuantity } from '../function/addQuantity';
import { signUp } from '../function/signUp';
import { login } from '../function/login';
import { logOut } from '../function/logOut';
import { changeUseData } from '../function/changeUserData';

// Mutations it's change very soon for more readable;

const mutations = {
    addToCart: (state, product) => {
        addToCart(state, product)
    },

    dataCart: (state) => {
        dataCart(state)
    },

    addQuantity: (state, idx) => {
        addQuantity(state, idx)
    },

    removeQuantity: (state, idx) => {
        rQuantity(state, idx)
    },

    signUp: (state, user) => {
        signUp(state, user)
    },

    Login: (state, user) => {
        login(state, user)
    },

    logOut: () => {
        logOut();
    },
    changeData: (state, user) => {
        changeUseData(state, user)
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