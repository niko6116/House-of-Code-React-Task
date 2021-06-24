
/*
Manages the state of the chat rooms.
*/

// Rooms loaded from the database.
var rooms: object[];

// Id for current room.
var currentRoom: string;

// Should be false when opening a chat room, and set to true after a request for messages has been sent.
var messagesLoaded = false;

export default {
    rooms,
    messagesLoaded,
    currentRoom
}