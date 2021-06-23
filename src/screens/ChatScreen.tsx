import React, { useState } from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";
import InputBar from "../components/InputBar";
import DatabaseUtility from "../utility/DatabaseUtility";
import RoomStorage from "../utility/RoomStorage";

const ChatScreen = props => {
  const [messages, setMessages] = useState([]);

  // Reads messages from the database
  if (!RoomStorage.messagesLoaded) {
    RoomStorage.messagesLoaded = true;
    DatabaseUtility.readMessages(setMessages)
  }

  console.log("Messages: ", messages);

  // Temporary placeholder data
  /*const messages =
    [
      { key: "1", name: "Nikolaj", userID: "", text: "Test message number 1", time: "1624203110000" },
      { key: "2", name: "Nikolaj", userID: "", text: "Test message number 2", time: "1624203120000" },
      { key: "3", name: "Nikolaj", userID: "", text: "Test message number 3", time: "1624203130000" },
      { key: "4", name: "Nikolaj", userID: "", text: "Test message number 4", time: "1624203140000" },
      { key: "5", name: "Nikolaj", userID: "", text: "Test message number 5", time: "1624203150000" },
      { key: "6", name: "Nikolaj", userID: "", text: "Test message number 6", time: "1624203160000" },
      { key: "7", name: "Nikolaj", userID: "", text: "Test message number 7", time: "1624203170000" },
      { key: "8", name: "Nikolaj", userID: "", text: "Test message number 8", time: "1624203180000" },
      { key: "9", name: "Nikolaj", userID: "", text: "Test message number 9", time: "1624203190000" }
    ];*/

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
      <InputBar />
    </View>
  </View>;
};

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
  }
});

export default ChatScreen;

