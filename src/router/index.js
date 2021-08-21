import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'  
import Blog from '../views/Blog'
import Playground from '../views/Playground' 
import Contact from '../views/Contact'
import Cecil from '../views/Cecil' 
import NotFound from '../components/404'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },  
  {
    path: '/blog', 
    name: 'Blog', 
    component: Blog
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
  }, 
  {
    path: '*',
    name: 'NotFound',
    component: NotFound
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
}) 

export default router 
