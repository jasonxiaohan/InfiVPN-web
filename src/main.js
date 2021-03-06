// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.

import ElementUI from 'element-ui'
import '../static/js/flexible.min.js'
import 'element-ui/lib/theme-chalk/index.css'
import '@/styles/index.scss' // global css
import '@/styles/custom.scss' // 自定义 css
import 'vue-social-share/dist/client.css'
import Vue from 'vue'
import App from './App.vue'
import Vuex from 'vuex'
import iView from 'iview'
import router from './router'
import store from './store'
import axios from 'axios'
import i18n from './locales'
import rapid from 'eway-rapid'
import share from 'vue-social-share'
import Router from 'vue-router'
import vueJsonp from 'vue-jsonp'

Vue.use(ElementUI)
Vue.config.productionTip = false
Vue.use(Vuex)
Vue.use(share)
Vue.use(vueJsonp)

Vue.prototype.$store = store
Vue.prototype.$ajax = axios

window.i18n = i18n

Vue.use(iView, {
  i18n: (key, value) => i18n.t(key, value)
})

// vue-router点击菜单栏同一个模块报错： Uncaught (in promise) 
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  axios,
  i18n,
  rapid,
  components: { App },
  template: '<App/>'
})
