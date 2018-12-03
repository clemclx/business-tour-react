// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import BootstrapVue from 'bootstrap-vue'
import VueSession from 'vue-session'
import VueRouter from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import {store} from "./store/session";

Vue.use(BootstrapVue)
Vue.use(VueSession)
Vue.use(VueRouter)
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
    router,
    store,
    el: '#app',
    components: {App},
    template: '<App/>',
    beforeCreate() {
            fetch('http://localhost:1337/api/v1/account/overview', {
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                credentials: 'include'
            }).then((response) => {
                return response.json()
            }).then((data) => {
                this.$store.dispatch('changeUserId', data.id);
                this.$store.dispatch('changeFullName', data.pseudo);
                this.$store.dispatch('changeEmailAddress', data.emailAddress);
            }).catch((e) => {

            })
        }
})