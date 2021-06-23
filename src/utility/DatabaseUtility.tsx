import React, { Component, useEffect } from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";
import database, { FirebaseDatabaseTypes } from '@react-native-firebase/database';
import RoomStorage from "./RoomStorage";

const refChatRooms = database().ref("chat-rooms");

function readRooms() {
    const json = refChatRooms.toJSON();
    console.log("JSON:", json);

    const data = [];

    refChatRooms.once('value').then(snapshot => {
        const exists = snapshot.val() !== null;

        if (exists) {
            console.log('Rooms Snapshot: ', snapshot.val());
            //return snapshot.val();

            snapshot.forEach(item => {
                const key = item.key;
                const id = item.key;
                const name = item.val().name;
                const description = item.val().description;

                const room = { key, id, name, description };
                console.log("Room: ", room);

                data.push(room);

                return false; // false is not assignable (seems to still compile), but true limits data return to one object
            });
            console.log("Room Data: ", data);
        }
    });

    return data;
}

function readMessages() {
    const roomID = RoomStorage.currentRoom;
    const refMessages = database().ref(`chat-rooms/${roomID}/messages`);

    const data = [];

    refMessages.on("value", snapshot => {
        const exists = snapshot.val() !== null;

        if (exists) {
            console.log("Message data: ", snapshot.val());

            snapshot.forEach(item => {
                const key = item.key;
                const messageText = item.val().messageText;
                const messageTime = item.val().messageTime;
                const messageUser = item.val().messageUser;
                const messageUserID = item.val().messageUserID;

                const message = { key, messageText, messageTime, messageUser, messageUserID };
                console.log("Message: ", message);

                data.push(message);

                return false; // false is not assignable (seems to still compile), but true limits data return to one object
            });
            console.log("Message Data: ", data);
        }
    });

    return data;
}

function Room({ roomID }) {
    useEffect(() => {
        const onValueChange = database()
            .ref(`/chat-rooms/${roomID}`)
            .on('value', snapshot => {
                console.log('User data: ', snapshot.val());
            });

        // Stop listening for updates when no longer required
        return () => database().ref(`/users/${roomID}`).off('value', onValueChange);
    }, [roomID]);
}

export default {
    readRooms,
    readMessages
};