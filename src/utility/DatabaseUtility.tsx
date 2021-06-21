import React, { Component } from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";
import database from '@react-native-firebase/database';

const refChatRooms = database().ref('chat-rooms');

function readRooms() {
    refChatRooms
        .once('value')
        .then(snapshot => {
            console.log('Data: ', snapshot.val());
        });
}

export default {
    readRooms
};