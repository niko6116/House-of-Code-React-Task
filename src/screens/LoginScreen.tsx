import React from "react";
import { Text, StyleSheet, View, Button } from "react-native";
import { GoogleSigninButton, } from '@react-native-google-signin/google-signin';
import GoogleSigninUtility from "../utility/GoogleSigninUtility";

const LoginScreen = props => {
  return <View>
    <Text style={styles.mainText}>Login with Google</Text>
    <View style={styles.login}>
      <Button
        title="Go to chat rooms"
        onPress={() => openChatRooms(props)}
      />
    </View>
    <View style={styles.loginButton}>
      <GoogleSigninButton
        onPress={() => googleLoginButtonPressed()}
      />
    </View>
  </View>;
};

function googleLoginButtonPressed() {
  GoogleSigninUtility.signIn();
}

function openChatRooms(props: any) {
  props.navigation.navigate("RoomSelection")
}

const styles = StyleSheet.create({
  mainText: {
    fontSize: 30,
    marginStart: 20
  },
  secondText: {
    fontSize: 20,
    marginStart: 20
  },
  login: {
    marginVertical: 40,
  },
  loginButton: {
    marginStart: 20
  }
});

export default LoginScreen;