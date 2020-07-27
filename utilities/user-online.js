//This will handle keeping record of all users that are currently online on the app


var connectedUsers = [];

function setUserOnline (userId, username) {
    if (!checkIfUserIsOnline(userId, username)) {
        connectedUsers[userId] = username;
    }
}

function userDisconnected (userId) {
    if (checkIfUserIsOnline(userId, false)) {
       connectedUsers[userId].destroy;
    }
}

function checkIfUserIsOnline (userId, username) {
    if (username !== false) {
        if (connectedUsers[userId] === username) {
            return true;
        } return false
    } else {
        if (connectedUsers[userId].length > 1) {
            return true;
        } return false
    }
}