'use strict';

var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = 3391;

var Middleware = require('./middleware')(io);

io.use(Middleware.messageEvents);
io.use(Middleware.roomEvents);
io.use(Middleware.userEvents);

io.on('connection', function(client){

});

http.listen(port,  function(){
    console.log('listening on port: ' + port);
});
