import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';
import {store} from "../store/session"

export default function instanciateSocket() {
    var io = sailsIOClient(socketIOClient);
    io.sails.url = 'http://192.168.99.100:1337';

    store.commit('changeIo', io)

    return io;
}