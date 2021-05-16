import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store' 

import './assets/styles/main.scss'
import ScollAnimation from './directives/scrollanimation'


Vue.config.productionTip = false

//filters 
Vue.filter('limit-10', function(value){
  return value.slice(0,10)
})  

//animation  
Vue.directive('scrollanimation', ScollAnimation)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
