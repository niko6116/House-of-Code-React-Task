import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const HomeScreen = props => {
  return <View>
    <Text style={styles.text}>Home Screen</Text>
    <Button
      title="Go to chat rooms"
      onPress={ () => props.navigation.navigate('Chat') }
    />
  </View>;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30
  }
});

export default HomeScreen;