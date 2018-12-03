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
import Lobby from '@/components/Lobby'
import Waiting from '@/components/Waiting'
import {store} from "../store/session"

const router = new Router({
    mode: 'history',
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
            path: '/lobby',
            name: 'Lobby',
            component: Lobby,
            meta: {requiresAuth: true}
        },
        {
            path: '/waiting',
            name: 'Waiting',
            component: Waiting,
            meta: {requiresAuth: true}
        },
        {
            path: '/profile',
            name: 'Profile',
            component: Profile,
            meta: {requiresAuth: true}
        },
        {
            path: '/stats',
            name: 'Stats',
            component: Stats,
            meta: {requiresAuth: true}
        },
        {
            path: '/faq',
            name: 'Faq',
            component: Faq,
            meta: {requiresAuth: true}
        },
        {
            path: '/cgu',
            name: 'Cgu',
            component: Cgu,
            meta: {requiresAuth: true}
        },
        {
            path: '/rules',
            name: 'Rules',
            component: Rules,
            meta: {requiresAuth: true}
        },
    ]
})

export default router

router.beforeEach((to, from, next) => {
    if(to.matched.some(record => record.meta.requiresAuth)) {
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
            next()
        }).catch((e) => {
            next({
                path: '/login',
                query: {redirect: to.fullPath}
            })
        })
    } else {
        next()
    }
})
