import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";
import ChatRoom from "../components/ChatRoom";
import DatabaseUtility from "../utility/DatabaseUtility";
import RoomStorage from "../utility/RoomStorage";

const RoomSelectionScreen = props => {
  var rooms = RoomStorage.rooms
  console.log("Rooms: ", rooms);

  const Item = ({ item }) => {
    return <ChatRoom
      screenProps={props}
      key={item.key}
      id={item.id}
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