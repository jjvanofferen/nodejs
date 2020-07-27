'use strict';


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
        socket.on('message', function(data) {
            var clientId = socket.conn.id;
            io.to(data.room).emit('message', {message: data.message, data: data.data, client: clientId});
        });

        return next();
    };
};