import socketio from 'socket.io-client';
const socket = socketio("ws://localhost:3030");
export {socket};