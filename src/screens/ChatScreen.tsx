import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ChatMessage from "../components/ChatMessage";

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

  return <View>
    <Text style={styles.text}>Chat Room</Text>
    <FlatList
      data={messages}
      renderItem={Item}
    ></FlatList>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default ChatScreen;