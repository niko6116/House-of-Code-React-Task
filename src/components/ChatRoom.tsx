import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import DatabaseUtility from "../utility/DatabaseUtility";
import RoomStorage from "../utility/RoomStorage";

/*
Component representing a chat room.
Should be put in a list of available chat rooms.
Props:
screenProps: The props from a screen that is registered in the navigator.
Id: The unique id used to find the room in the database.
name: The name of the room.
description: The description of the room.
*/
const ChatRoom = props => {
    return <View>
        <Text style={styles.roomName}>{props.name}</Text>
        <Text style={styles.roomDescription}>{props.description}</Text>
        <Button
            title="Go to room"
            onPress={() => openChatRoom(props)}
        />
    </View>;
};

function openChatRoom(props: any) {
    console.log("Room id: ", props.id);
    RoomStorage.currentRoom = props.id; // Sets current room id
    RoomStorage.messages = DatabaseUtility.readMessages(); // Reads messages from the database
    props.screenProps.navigation.navigate("Chat") // Opens room
}

const styles = StyleSheet.create({
    roomName: {
        fontSize: 25
    },
    roomDescription: {
        fontSize: 15
    }
});

export default ChatRoom;