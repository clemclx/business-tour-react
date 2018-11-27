import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userId: null,
        fullName: '',
        emailAddress: '',
        gameId: null,
        isInGame: true
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
        },
        isInGame: state =>{
            return state.isInGame
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
        },
        changeisInGame (state, payload) {
            state.isInGame = payload
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
        },
        changeisInGame(context, payload){
            context.commit('changeisInGame', payload)
        }
    }
})