import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css'
import Vuelidate from 'vuelidate'
import '../public/style/main.css'
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'

// Global Components
Vue.component('Header', Header)
Vue.component('Footer', Footer)

// Tools
Vue.use(VueSweetalert2);
Vue.use(Vuelidate);

Vue.config.productionTip = false


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
