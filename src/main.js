// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueSession)
Vue.use(VueRouter)
Vue.use(Vuex)
Vue.config.productionTip = false

/* eslint-disable no-new */
export var globalVue = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  data: {
    loggedUser: {
      userId: '',
      emailAddress: '',
      fullName: ''
    }
  }
})