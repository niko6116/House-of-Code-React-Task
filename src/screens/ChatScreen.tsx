import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const ChatScreen = props => {
    return <View>
      <Text style={styles.text}>Chat Screen</Text>
      
    </View>;
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default ChatScreen;