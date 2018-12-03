import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        userId: null,
        fullName: '',
        emailAddress: '',
        gameId: null,
        io: null,
        isInGame: true,
        isGameAdmin: false,
        turnOrder: null
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
        io: state => {
            return state.io
        },
        isInGame: state =>{
            return state.isInGame
        },
        isGameAdmin: state => {
            return state.isGameAdmin
        },
        turnOrder: state => {
            return state.turnOrder
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
        changeIo (state, payload) {
            state.io = payload
        },
        changeisInGame (state, payload) {
            state.isInGame = payload
        },
        changeIsGameAdmin (state, payload) {
            state.isGameAdmin = payload
        },
        changeTurnOrder (state, payload) {
            state.turnOrder = payload
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
        changeIo(context, payload) {
            context.commit('changeIo', payload)
        },
        changeisInGame(context, payload){
            context.commit('changeisInGame', payload)
        },
        changeIsGameAdmin(context, payload) {
            context.commit('changeIsGameAdmin', payload)
        },
        changeTurnOrder(context, payload) {
            context.commit('changeTurnOrder', payload)
        }
    }
})