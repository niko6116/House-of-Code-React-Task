import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ChatRoom = props => {
    return <View>
        <Button
            title="Chat room name"
            onPress={ () => openChatRoom() }
        />

    </View>;
};

function openChatRoom() {

}

const styles = StyleSheet.create({
    text: {
        fontSize: 30
    }
});

export default ChatRoom;