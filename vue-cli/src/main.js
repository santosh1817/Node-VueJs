// import Vue from 'vue'
// import App from './App.vue'

// Vue.config.productionTip = false

// new Vue({
//   render: h => h(App),
// }).$mount('#app')

import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
//import VueRouter from 'vue-router'
import router from './router'
//import Home from './components/Home.vue'

Vue.use(VueRouter)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')

