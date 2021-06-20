import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import ChatRoom from "../components/ChatRoom";

const RoomSelectionScreen = props => {
    return <View>
      <Text style={styles.text}>Room Selection Screen</Text>
      
    </View>;
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default RoomSelectionScreen;