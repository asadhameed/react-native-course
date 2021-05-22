import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, SafeAreaView } from "react-native";

const TextScreen = () => {
  const [name, setName] = useState("");
  // const [passwordError, setPasswordError] = useState(
  //   "Password Must be Longer than 5 characters"
  // );  // Bad way of the way the following is good way
  // const onEnterPassword = (value) => {
  //   setPassword(value);
  //   console.log(value);
  //   if (password.length > 4) setPasswordError("");
  // }; // Bad way of the way the following is good way

  const [password, setPassword] = useState("");
  const onchangeText = (event) => {
    const { text } = event.nativeEvent;

    setName(text);
  };

  return (
    <View>
      <Text>Enter Name: </Text>
      <TextInput
        style={styles.input}
        placeholder="Enter Name"
        autoCapitalize="none"
        autoCorrect={false}
        value={name}
        // onChange={onchangeText}  // Write function up
        //   onChangeText={(newValue) => setName(newValue)} // this line of code is same of the following
        onChangeText={setName}
      />
      <Text style={styles.textStyle}>{`Your Name is ${name}`}</Text>

      <Text style={{ margin: 10 }}>Enter Password: </Text>
      <TextInput
        style={styles.input}
        placeholder="******"
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        // onChangeText={(value) => onEnterPassword(value)}
        onChangeText={setPassword}
      />
      {/* <Text style={styles.textStyle}>{passwordError}</Text> */}
      {password.length < 5 ? <Text>Password Must be 5 characters</Text> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    borderWidth: 4,
    margin: 30,
  },
  textStyle: {
    fontSize: 20,
    margin: 20,
  },
});
export default TextScreen;
