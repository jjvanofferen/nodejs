'use strict';


// Handling all messageEvents
module.exports = function(io) {
    return function(client, next) {

        //Loading modules
        var rooms = require('./modules/rooms.js')(io);
        var messages = require('./modules/messages.js')(io);


        client.on('room_connection', function(id){
            client.join(id.chatId);
            rooms.connect();
        });

        return next();
    }

}