'use strict';


/**
 * Requires various middleware files and returns them as properties of an object.
 * 
 * @param io - The global Socket.IO server object.
 * @readonly
 */
module.exports = function(io) {

    //roomEvents - handles everything in chatrooms
    //messageEvents - handles all messages in chatrooms
    //userEvents - handles online/offline status of all users

    return {
        roomEvents: require('./room-events.js')(io),
        messageEvents: require('./message-events.js')(io),
        userEvents: require('./user-events.js')(io)
    };
};