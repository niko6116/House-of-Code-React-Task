import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

/*
Component representing a chat room.
Should be put in a list om available chat rooms.
Props:
name: The name of the room.
description: The description of the room.
*/
const ChatRoom = props => {
    return <View>
        <Text style={styles.roomName}>{props.name}</Text>
        <Text style={styles.roomDescription}>{props.description}</Text>
        <Button
            title="Go to room"
            onPress={() => openChatRoom()}
        />
    </View>;
};

function openChatRoom() {

}

const styles = StyleSheet.create({
    roomName: {
        fontSize: 30
    },
    roomDescription: {
        fontSize: 15
    }
});

export default ChatRoom;