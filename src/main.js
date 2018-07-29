


import 'babel-polyfill';
import axios from 'axios';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../node_modules/bootstrap/dist/js/bootstrap.js'
import '../node_modules/jquery/dist/jquery.js'
import '../node_modules/popper.js/dist/umd/popper.js'

// CSS ADD-ONS

// DYNAMIC ELEMENTS
import Vue from 'vue';
import VueRouter from 'vue-router';

// VUE TEMPLATES
import App from './components/App.vue';
import MainPage from './components/MainPage.vue';
import AboutPage from './components/About.vue';

// VUE COMPONENTS

// DYNAMIC CSS
import './scss/scss.scss';
require('vue2-animate/dist/vue2-animate.min.css');

// ROUTES
Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: [
    {path: '*', component: MainPage },
    {path:'/', component: MainPage},
    {path:'/about', component: AboutPage},
  ]
})


// CODE
new Vue({
    el: '#app',
    router: router,
    render: h => h(App)
})