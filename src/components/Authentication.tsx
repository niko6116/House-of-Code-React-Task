import React from "react";
import { Text } from "react-native";
import auth from "@react-native-firebase/auth";

function Authentication() {
  const user = auth().currentUser;

  if (!user) {
    return <Text>Please login</Text>;
  }

  return <Text>Welcome {user.email}</Text>;
}

export default Authentication;
