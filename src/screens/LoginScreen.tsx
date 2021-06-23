import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import Authentication from "../utility/Authentication";
import InputBar from "../components/InputBar";

const LoginScreen = props => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return <View>
    <Text style={styles.mainText}>Login (not implemented)</Text>
    <View style={styles.login}>
      <Text style={styles.secondText}>Username</Text>
      <InputBar
        input={username}
        onInputChange={newUsername => setUsername(newUsername)}
      />
      <Text style={styles.secondText}>Password</Text>
      <InputBar
        input={password}
        onInputChange={newPassword => setPassword(newPassword)}
      />
    </View>
    <Button
      title="Go to chat rooms"
      onPress={() => loginButtonPressed(props, username, password)}
    />
  </View>;
};

function loginButtonPressed(props: any, username: string, password: string) {
  // Login functionality not implemented.
  props.navigation.navigate("RoomSelection") // Go to chat rooms.
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