import Vue from 'vue'
import VueRouter from 'vue-router'
// import ProductLaptop from '../views/ProductLaptop.vue'
import ProductMobile from '../views/ProductMobile.vue'
import BooksPage from '../views/EachBookPage.vue'
import ForgotPassword from '../views/ForgotPassword.vue'
import Profile from '../views/Profile.vue'
import ProfileFavoriteList from '../views/ProfileFavoriteList.vue'
import ProfileDataForm from '../views/ProfileDataForm.vue'

// Check for Authentication
import { checkAuth } from '../utils/Auth'

// Chunk with Import and NprogressBar

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/aboutus',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import('../views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: () => import('../views/Signup.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: () => import('../views/Cart.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: async () => await import('../views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: async () => await import('../views/Faq.vue')
  },
  {
    path: '/product',
    name: 'ProdcutPage',
    component: () => import('../views/ProductPage.vue')
  },
  {
    path: '/books',
    name: 'BookPage',
    component: () => import('../views/BookPage.vue')
  },
  // ErrorPage
  {
    path: '*',
    name: 'ErrorPage',
    component: () => import('../views/Error.vue')
  },
  {
    path: '/book/:id',
    name: 'ProductBook',
    component: () => import('../views/ProductBook.vue')
  },
  {
    path: '/laptop/:id',
    name: 'ProductLaptop',
    component: () => import('../views/ProductLaptop.vue')
  },
  {
    path: '/mobile/:id',
    name: 'ProductMobile',
    component: ProductMobile
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: ForgotPassword
  },
  {
    path: '/books/:id',
    name: 'EachBookPage',
    component: BooksPage
  },
  {
    path: '/profile',
    name: 'Profile',
    beforeEnter: checkAuth,
    component: Profile
  },
  {
    path: '/profile/favoritelist',
    name: 'FavoriteList',
    beforeEnter: checkAuth,
    component: ProfileFavoriteList
  },
  {
    path: '/profile/update-profile',
    name: 'ProfileDataForm',
    beforeEnter: checkAuth,
    component: ProfileDataForm
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router