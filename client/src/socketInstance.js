import socketio from 'socket.io-client';
const socket = socketio.connect("ws://localhost:3030");
export {socket};