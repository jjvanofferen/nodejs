'use scrict';

//Loading the io object
module.exports = function(io) {
	//Function list for messages

	var send = function send(clientId, data) {
		io.to(data.room).emit('message', {message:   data.message, data: data.data, client: clientId});
	};

}
