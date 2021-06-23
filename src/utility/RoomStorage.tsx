import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

var rooms: object[]; // Rooms loaded from the database
var currentRoom: string; // Id for current room
var messagesLoaded = false;

export default {
    rooms,
    messagesLoaded,
    currentRoom
}