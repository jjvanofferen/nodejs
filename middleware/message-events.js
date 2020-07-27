'use strict';


var chat = require('../controllers/message-controller.js');


/**
 * Returns a middleware function for attaching event listeners to a socket.
 *
 * @param io - The global Socket.IO server object.
 * @readonly
 */
module.exports = function(io) {

    /**
     * Attaches event listeners to the current socket.
     *
     * @param socket - An object representing the current websocket connection.
     * @param next   - A function that defers execution to the next middleware in the chain.
     * @readonly
     */
    return function(socket, next) {
        /**
         * Connects to specified room
         */
        socket.on('message', function(data, room) {
            var clientId = socket.conn.id;
            console.log("sending message");
            console.log(data.room);

            io.to(data.room).emit('message', {message: data.message, data: data.data, client: clientId, room: data.room});
        });

        socket.on('disconnect_room', function(data) {
            console.log(data);
           io.to(data.chatId).emit('user_left', {room: data.chatId, data:data});
        });

        return next();
    };
};