var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var rooms = require('modules/rooms.js');
var clients = require('modules/clients.js');

var online = {};
var onlineCheck = {};

io.on('connection', function(client){

    //execute a join method

    userJoined(client);

    client.on('test', function(data){
        io.emit('test');
        io.emit(data);
    });

    client.on('getOnline', function (room, users) {
        if(room !== false) {
            getOnlineFromRoom(room);
        } else {
            getOnlineFromList(users);
        }
    });

    client.on('room_connection', function(id){
        client.join(id.chatId);
    });

    client.on('room_disconnect', function(id){
        client.leave(id.chatId);
    });

    client.on('message', function(data) {
        var clientId = client.conn.id;
        io.to(data.room).emit('message', {message: data.message, data: data.data, client: clientId});
    });

    client.on('show_room', function(data){
        var namespace = '/';
        var roomName = data;
        console.log('connections');
        console.log(clients.show(io.nsps[namespace].adapter.rooms[roomName]));
        // for (var socketId in io.nsps[namespace].adapter.rooms[roomName]) {
        //     console.log(socketId);
        // }
    });

    client.on('disconnect', function() {
        var index;
        for (index = 0; index < online.length; ++index) {
            io.to(online[index]).emit('status');
        }
        
        //set a wait function because of the last user request
        setTimeout(setNewOnline, 3000);
    });

    client.on('status', function() {
        onlineCheck.push(client.conn.id);
    });


    function setNewOnline() {
        online = onlineCheck;
        onlineCheck = {};

        pushNewOnlineToUsers();
    }

    function userJoined(client) {
        console.log('User join');
        online.push(client.conn.id);
    }

    function getOnlineFromRoom(roomId) {

    }

    function getOnlineFromList() {

    }

});

http.listen(3333, function(){
    console.log('listening on port: 3333');
});