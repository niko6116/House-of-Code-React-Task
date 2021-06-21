import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ChatRoom from "../components/ChatRoom";
import DatabaseUtility from "../utility/DatabaseUtility";

const RoomSelectionScreen = props => {
  //DatabaseUtility.readRooms();

  // Temporary placeholder data
  const rooms =
    [
      { key: "1", name: "Room num 1", description: "First room" },
      { key: "2", name: "Room num 2", description: "Second room" },
      { key: "3", name: "Room num 3", description: "Third room" }
    ];

  const Item = ({ item }) => {
    return <ChatRoom
      screenProps={props}
      key={item.key}
      name={item.name}
      description={item.description}
    />;
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