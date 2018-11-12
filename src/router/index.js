import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index'
import Login from '@/components/Login'
import Signup from '@/components/Signup'
import Play from '@/components/Play'
import Profile from '@/components/Profile'
import Stats from '@/components/Stats'
import Faq from '@/components/Faq'
import Cgu from '@/components/Cgu'
import Rules from '@/components/Rules'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Index',
            component: Index
        },
        {
            path: '/login',
            name: 'Login',
            component: Login
        },
        {
            path: '/signup',
            name: 'Signup',
            component: Signup
        },
        {
            path: '/play',
            name: 'Play',
            component: Play
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Stats
        },
        {
            path: '/faq',
            name: 'Faq',
            component: Faq
        },
        {
            path: '/cgu',
            name: 'Cgu',
            component: Cgu
        },
        {
            path: '/rules',
            name: 'Rules',
            component: Rules
        },
    ]
})
