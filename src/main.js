import Vue from 'vue'
import App from './App.vue'
import router from './router' 
import Meta from 'vue-meta'

import './assets/styles/main.scss'
import ScollAnimation from './directives/scrollanimation'


Vue.config.productionTip = false 

Vue.use(Meta, {
  refreshOnceOnNavigation: true
})

//filters 
Vue.filter('limit-10', function(value){
  return value.slice(0,10)
})  

//animation  
Vue.directive('scrollanimation', ScollAnimation)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
