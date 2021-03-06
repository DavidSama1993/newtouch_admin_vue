import Vue from 'vue'

// import Cookies from 'js-cookie'

import 'normalize.css' // css reset

import Element from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import './style/index.scss' // global css

import App from './App.vue'
import router from './router'
import store from './store'

import './mock'
import './permission'

import * as filters from './filters'

import { output } from './utils'

Vue.use(Element, {
  size: 'mini'
})

Object.keys(filters).forEach(key => {
  Vue.filter(key, filters[key])
})

Vue.prototype.output = output

Vue.config.productionTip = false

window.app = new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
