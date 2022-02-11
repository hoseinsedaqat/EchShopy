import Vue from 'vue'
import VueRouter from 'vue-router'

// Check for Authentication
import { checkAuth } from '@/utils/Auth'

// some stuff to add
// Chunk with Import and NprogressBar
// Add Error page to github

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: async () => await import('@/views/Home.vue')
  },
  {
    path: '/aboutus',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: async () => await import('@/views/About.vue')
  },
  {
    path: '/login',
    name: 'Login',
    component: async () => await import('@/views/Login.vue')
  },
  {
    path: '/signup',
    name: 'Signup',
    component: async () => await import('@/views/Signup.vue')
  },
  {
    path: '/cart',
    name: 'Cart',
    component: async () => await import('@/views/Cart.vue')
  },
  {
    path: '/contact',
    name: 'Contact',
    component: async () => await import('@/views/Contact.vue')
  },
  {
    path: '/faq',
    name: 'Faq',
    component: async () => await import('@/views/Faq.vue')
  },
  {
    path: '/product',
    name: 'ProdcutPage',
    component: async () => await import('@/views/ProductPage.vue')
  },
  {
    path: '/books',
    name: 'BookPage',
    component: async () => await import('@/views/BookPage.vue')
  },
  // ErrorPage
  {
    path: '*',
    name: 'ErrorPage',
    component: async () => await import('@/views/Error.vue')
  },
  {
    path: '/book/:id',
    name: 'ProductBook',
    component: async () => await import('../views/ProductBook.vue')
  },
  {
    path: '/laptop/:id',
    name: 'ProductLaptop',
    component: async () => await import('@/views/ProductLaptop.vue')
  },
  {
    path: '/mobile/:id',
    name: 'ProductMobile',
    component: async () => await import('@/views/ProductMobile.vue')
  },
  {
    path: '/forgotpassword',
    name: 'ForgotPassword',
    component: async () => await import('@/views/ForgotPassword.vue')
  },
  {
    path: '/books/:id',
    name: 'EachBookPage',
    component: async () => await import('@/views/EachBookPage.vue')
  },
  {
    path: '/profile',
    name: 'Profile',
    beforeEnter: checkAuth,
    component: async () => await import('@/views/Profile.vue')
  },
  {
    path: '/profile/favoritelist',
    name: 'FavoriteList',
    beforeEnter: checkAuth,
    component: async () => await import('@/views/ProfileFavoriteList.vue')
  },
  {
    path: '/profile/update-profile',
    name: 'ProfileDataForm',
    beforeEnter: checkAuth,
    component: async () => await import('@/views/ProfileDataForm.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router