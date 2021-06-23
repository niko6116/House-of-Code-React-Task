import React from "react";
import { Text, StyleSheet, View, FlatList, Button } from "react-native";
import ChatRoom from "../components/ChatRoom";
import DatabaseUtility from "../utility/DatabaseUtility";
import RoomState from "../utility/RoomState";

const RoomSelectionScreen = props => {
  var rooms = RoomState.rooms
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
    <Button
      title="Logout"
      onPress={() => logoutButtonPressed(props)}
    />
    <FlatList
      data={rooms}
      renderItem={Item}
    ></FlatList>
  </View>;
};

function logoutButtonPressed(props: any) {
  props.navigation.goBack(null);
}

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default RoomSelectionScreen;