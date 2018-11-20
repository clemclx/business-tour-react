import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userId: null,
        fullName: '',
        emailAddress: ''
    },

    getters: {
        userId: state => {
            return state.userId
        },
        fullName: state => {
            return state.fullName
        },
        emailAddress: state => {
            return state.emailAddress
        }
    },

    mutations: {
        changeUserId (state, payload) {
            state.userId = payload
        },
        changeFullName (state, payload) {
            state.fullName = payload
        },
        changeEmailAddress (state, payload) {
            state.emailAddress = payload
        }
    },

    actions: {
        changeUserId(context, payload) {
            context.commit('changeUserId', payload)
        },
        changeFullName(context, payload) {
            context.commit('changeFullName', payload)
        },
        changeEmailAddress(context, payload) {
            context.commit('changeEmailAddress', payload)
        }
    }
})