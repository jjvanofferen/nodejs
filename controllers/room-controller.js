'use strict';

/**
 * A traditional Node.js "errorback" function.
 * @callback nodeCallback
 */

/**
 * Creates a new user with the given credentials, then Executes a given callback
 * with the new user information.
 * @arg {object} credentials        - An object containing a username/password pair.
 * @param {nodeCallback} callback   - A callback function to execute.
 * @readonly
 */

var connections = [];
connections.users = [];

/**
 * User connected to a room, make sure not to make notifications about current messages
 * @param roomId
 * @param username
 */
exports.connect = function(username, roomId) {
    // Show user as online when u send messages to this person.
    if (connections['users'].length > 0 ) { //I already have users in my list
        if (! connections['users'][username] === username) {// check if current user exists, if not, add current user
            connections['users'][username] = {
                room: roomId
            }
        }
    } else { // no users yet, create it and add current user to it
        connections.users[username] = {
            room: roomId
        };
    }
};

exports.disconnect = function(roomId, username) {
    //Just remove from a chatroom
    connections.users.username.room = ''; //Empty room
};

exports.destroy = function (roomId, username) {
    //User also went offline:)
    delete connections.users.username;
};