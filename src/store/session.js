import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userId: null,
        fullName: '',
        emailAddress: '',
        gameId: null
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
        },
        gameId: state => {
            return state.gameId
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
        },
        changeGameId (state, payload) {
            state.gameId = payload
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
        },
        changeGameId(context, payload) {
            context.commit('changeGameId', payload)
        }
    }
})