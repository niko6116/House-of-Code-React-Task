import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Authentication from "../utility/Authentication";
import DatabaseUtility from "../utility/DatabaseUtility";
import RoomStorage from "../utility/RoomStorage";

const HomeScreen = props => {
  RoomStorage.rooms = DatabaseUtility.readRooms();

  Authentication(props);

  return <View>
    <Text style={styles.text}>Home Screen</Text>
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;