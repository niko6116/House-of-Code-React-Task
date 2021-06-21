import React from "react";
import { FlatListProperties } from "react-native";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ChatRoom from "../components/ChatRoom";

const RoomSelectionScreen = props => {
  const rooms = [
    { name: "Room num 1", description: "First room" },
    { name: "Room num 2", description: "Second room" },
    { name: "Room num 3", description: "Third room" }
  ];

  const Item = ({ item }) => {
    return <ChatRoom name={item.name} s description={item.description} />;
  };

  return <View>
    <Text style={styles.text}>Room Selection</Text>
    <FlatList
      data={rooms}
      renderItem={Item}
    ></FlatList>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default RoomSelectionScreen;