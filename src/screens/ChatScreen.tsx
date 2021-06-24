import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import ChatMessage from "../components/ChatMessage";
import InputBar from "../components/InputBar";
import DatabaseUtility from "../utility/DatabaseUtility";
import RoomState from "../utility/RoomState";

const ChatScreen = props => {
  // Chat messages.
  const [messages, setMessages] = useState([]);
  // User input.
  const [input, setInput] = useState("");

  // Reads messages from the database
  if (!RoomState.messagesLoaded) {
    RoomState.messagesLoaded = true;
    DatabaseUtility.readMessages(setMessages)
  }

  console.log("Messages: ", messages);

  // Chat message item.
  const Item = ({ item }) => {
    return <ChatMessage
      key={item.key}
      name={item.name}
      userID={item.userID}
      text={item.text}
      time={item.time}
    />;
  };

  return <View style={styles.main}>
    <Text style={styles.text}>Chat Room</Text>
    <View style={styles.messages}>
      <FlatList
        data={messages}
        renderItem={Item}
      ></FlatList>
    </View>
    <View style={styles.bottom}>
      <View style={styles.bottomHorizontal}>
        <View style={styles.bottomInput}>
          <InputBar
            input={input}
            onInputChange={newInput => setInput(newInput)}
          />
        </View>
        <View style={styles.bottomButton}>
          <Button
            title="Send"
            onPress={() => { sendButtonPressed(input) }}
          />
        </View>
      </View>
    </View>
  </View>;
};

/**
 * Send message in chat room.
 * @param input 
 */
function sendButtonPressed(input: string) {
  console.log("Text input: ", input);

  const text = input;
  const time = Date.now();
  const user = "Guest User"; // Placeholder
  const userID = "0000xxxx"; // Placeholder

  DatabaseUtility.writeMessage(text, time, user, userID);
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  },
  messages: {
    marginHorizontal: 10,
    marginVertical: 10,
    height: 400
  },
  main: {
    flex: 1
  },
  bottom: {
    flex: 1,
    justifyContent: "flex-end",
    marginBottom: 25
  },
  bottomHorizontal: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  bottomInput: {
    width: 300
  },
  bottomButton: {
    marginEnd: 10
  }
});

export default ChatScreen;

