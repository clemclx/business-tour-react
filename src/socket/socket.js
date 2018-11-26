import socketIOClient from 'socket.io-client';
import sailsIOClient from 'sails.io.js';

export default function instanciateSocket() {
    var io = sailsIOClient(socketIOClient);
    io.sails.url = 'http://localhost:1337';
    return io;
}