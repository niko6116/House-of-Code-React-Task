import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Authentication from "../utility/Authentication";
import InputBar from "../components/InputBar";

const LoginScreen = props => {
  const username = "";
  const password = "";

  return <View>
    <Text style={styles.mainText}>Login with Google</Text>
    <View style={styles.login}>
      <Text style={styles.secondText}>Username</Text>
      <InputBar>input={username}</InputBar>
      <Text style={styles.secondText}>Password</Text>
      <InputBar>input={password}</InputBar>
    </View>
    <Button
      title="Login"
      onPress={() => loginButtonPressed(props, username, password)}
    />
  </View>;
};

function loginButtonPressed(props: any, username: string, password: string) {

  props.navigation.navigate("RoomSelection")
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30
  },
  secondText: {
    fontSize: 20
  },
  login: {
    marginVertical: 40
  }
});

export default LoginScreen;