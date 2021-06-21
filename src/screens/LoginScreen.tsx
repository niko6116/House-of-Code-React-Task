import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Authentication from "../utility/Authentication";

const LoginScreen = props => {
  return <View>
    <Text style={styles.text}>Login Screen</Text>
    <Button
      title="Go to chat rooms"
      onPress={() => props.navigation.navigate("RoomSelection")}
    />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default LoginScreen;