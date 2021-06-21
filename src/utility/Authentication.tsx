import React from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";

/*
Call this function to check for authentication and redirect the user accordingly.
*/
function Authentication() {
  const user = auth().currentUser;

  if (!user) {
    return 0;
  }
  return 1;
}

export default Authentication;