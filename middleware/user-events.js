'use strict';



// var user = require('../controllers/user-controller.js');
var roomModel = require('../modules/rooms.js');

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
         * User connects to the application and is online
         */
        socket.on('connect', function(id, username) {

            // user.connect(username);

        });


        /**
         * User disconnects from the application and is offline
         */
        socket.on('disconnect', function(id, username) {

        });

        /**
         * User left the chat with the given chatId
         */
        socket.on('disconnect_room', function(roomId, username){
            console.log('user disconnected from room');
            console.log(roomId);
            console.log(username);
            roomModel.disconnectRoom(roomId, username);
        });

        return next();
    };
};