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
    const date = new Date(parseInt(props.time));

    return <View style={styles.main}>
        <Text style={styles.name}>{props.name}</Text>
        <Text style={styles.time}>{date.toUTCString()}</Text>
        <Text style={styles.message}>{props.message}</Text>
    </View>;
};

const styles = StyleSheet.create({
    name: {
        fontSize: 25
    },
    time: {
        fontSize: 12
    },
    message: {
        fontSize: 18
    },
    main: {
        marginHorizontal: 5,
        marginVertical: 5
      }
});

export default ChatMessage;