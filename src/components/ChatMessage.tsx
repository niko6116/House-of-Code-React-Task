import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

/*
Component representing a chat message.
Should be put in a list om messages.
Props:
key: The unique id used to find the message in the database.
name: The name of the user.
userID: The unique id for the user.
message: The content of the message.
time: The time the message was sent.
*/
const ChatMessage = props => {
    const d = new Date(parseInt(props.time));

    return <View>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.time}>{d.toUTCString()}</Text>
        <Text style={styles.message}>{props.message}</Text>
    </View>;
};

const styles = StyleSheet.create({
    name: {
        fontSize: 25
    },
    time: {
        fontSize: 15
    },
    message: {
        fontSize: 20
    }
});

export default ChatMessage;