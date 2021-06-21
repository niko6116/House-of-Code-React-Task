import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

/*
Component representing a chat room.
Should be put in a list of available chat rooms.
Props:
screenProps: The props from a screen that is registered in the navigator.
key: The unique id used to find the room in the database.
name: The name of the room.
description: The description of the room.
*/
const ChatRoom = props => {
    return <View>
        <Text style={styles.roomName}>{props.name}</Text>
        <Text style={styles.roomDescription}>{props.description}</Text>
        <Button
            title="Go to room"
            onPress={() => props.screenProps.navigation.navigate("Chat")}
        />
    </View>;
};

function openChatRoom(props: any) {

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