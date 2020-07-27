'use scrict';

//Loading the io object
module.exports = function(io) {
    //Function list for messages

    var connect = function connect(chatId) {
        io.join(chatId);
    };

    var disconnectRoom = function disconnectRoom(roomId, username) {
        io.to(roomId).emit('user_disconnect', {roomId: roomId, username: username});
    };
}