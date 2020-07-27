'use strict';


var room = require('../controllers/room-controller.js');


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
        socket.on('room_connection', function(id, username) {
            socket.join(id.chatId);
            room.connect(username, id.chatId);
        });

        /**
         * Disconnects from specified room
         */
        socket.on('room_disconnect', function(id, username){
            socket.leave(id.chatId);
            room.disconnect(id.chatId, username);
        });

        return next();
    };
};