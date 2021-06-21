import React, { Props } from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";

/*
Call this function to check for authentication and redirect the user accordingly.
*/
function Authentication(props: any) {
  const user = auth().currentUser;

  if (!user) {
    props.navigation.navigate("Login")
  } else {
    props.navigation.navigate("RoomSelection")
  }
}

export default Authentication;