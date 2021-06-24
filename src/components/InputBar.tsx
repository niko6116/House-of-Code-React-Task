import React from "react";
import { StyleSheet, View, TextInput } from "react-native";

/**
 * A styled text input.
 * @param param0 
 * @returns 
 */
const InputBar = ({ input, onInputChange }) => {
  return <View style={styles.input}>
    <TextInput
      style={styles.inputStyle}
      placeholder="Input"
      value={input}
      onChangeText={newInput => onInputChange(newInput)}
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