import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/', component: () => import('../components/Index.vue')
    },
    {
      path: '/login', component: () => import('../components/Login.vue')
    },
    {
      path: '/signup', component: () => import('../components/Signup.vue')
    },
    {
      path: '/play', component: () => import('../components/Play.vue')
    },
    {
      path: '/profile', component: () => import('../components/Profile.vue')
    },
    {
      path: '/stats', component: () => import('../components/Stats.vue')
    },
    {
      path: '/faq', component: () => import('../components/Faq.vue')
    },
    {
      path: '/cgu', component: () => import('../components/Cgu.vue')
    },
    {
      path: '/rules', component: () => import('../components/Rules.vue')
    }
  ]
})
