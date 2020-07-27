'use strict';


// Handling all messageEvents
module.exports = function(io) {
	return function(client, next) {

		//Loading modules 
		var messages = require('./modules/messages.js')(io);

		client.on('message', function(data) {
            var clientId = client.conn.id;
            messages.send(clientId, data);
        });

        return next();
	}

}