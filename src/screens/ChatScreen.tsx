import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";
import InputBar from "../components/InputBar";

const ChatScreen = props => {
  // Temporary placeholder data
  const messages =
    [
      { key: "1", name: "Nikolaj", userID: "", message: "Test message number 1", time: "1576623140000" },
      { key: "2", name: "Nikolaj", userID: "", message: "Test message number 2", time: "1576623150000" },
      { key: "3", name: "Nikolaj", userID: "", message: "Test message number 3", time: "1576623160000" }
    ];

  const Item = ({ item }) => {
    return <ChatMessage
      key={item.key}
      name={item.name}
      userID={item.userID}
      message={item.message}
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
    marginVertical: 10
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