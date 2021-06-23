import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

var rooms: object[]; // Rooms loaded from the database
var messages: Object[] // Messages loaded from the database
var currentRoom: string; // Key/id for current room

export default {
    rooms,
    messages,
    currentRoom
}