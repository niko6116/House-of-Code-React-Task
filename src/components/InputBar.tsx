import React from "react";
import { Text, StyleSheet, View, TextInput } from "react-native";

const InputBar = (input) => {
  return <View style={styles.input}>
    <TextInput
      style={styles.inputStyle} placeholder="Input"
      value={input}
    />
  </View>;
};

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#C0C0C0",
    height: 50,
    marginHorizontal: 20,
    borderRadius: 5
  },
  inputStyle: {
    fontSize: 15
  }
});

export default InputBar