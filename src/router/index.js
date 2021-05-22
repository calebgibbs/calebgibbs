import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue' 
import Playground from '../views/Playground' 
import Contact from '../views/Contact'
import Cecil from '../views/Cecil'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }, 
  {
    path: '/playground', 
    name: 'Playground', 
    component: Playground
  }, 
  { 
    path: '/contact', 
    name: 'Contact', 
    component: Contact
  }, 
  {
    path: '/cecil', 
    name: 'Cecil', 
    component: Cecil
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router 
