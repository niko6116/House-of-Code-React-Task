import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const LoginScreen = props => {
    return <View>
      <Text style={styles.text}>Login Screen</Text>
      
    </View>;
  };
  
  const styles = StyleSheet.create({
    text: {
      fontSize: 30
    }
  });

export default LoginScreen;