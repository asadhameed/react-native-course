/********************************************************
 *  My code
 **********************************************************/
// import React from "react";
// import {
//   Text,
//   TextInput,
//   View,
//   StyleSheet,
//   Button,
//   TouchableOpacity,
// } from "react-native";

// const SignComponent = ({ properties, onChangeToSign, onPressHandler }) => {
//   return (
//     <View style={styles.container}>
//       <Text style={{ fontSize: 18, fontWeight: "bold", alignSelf: "center" }}>
//         {properties.title}
//       </Text>
//       <View style={styles.subContainer}>
//         <Text style={{ fontSize: 16 }}>Email</Text>
//         <TextInput style={styles.inputStyle} />
//       </View>
//       <View style={styles.subContainer}>
//         <Text style={{ fontSize: 16 }}>Password</Text>
//         <TextInput style={styles.inputStyle} />
//       </View>
//       <Button title={properties.sign} onPress={onPressHandler}></Button>
//       <View style={styles.subContainer}>
//         <TouchableOpacity onPress={onChangeToSign}>
//           <Text style={styles.textStyle}>{properties.firstInfo}</Text>
//           <Text style={styles.textStyle}>{properties.secondInfo}</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     display: "flex",
//     flexDirection: "column",
//     margin: 40,
//   },
//   subContainer: {
//     alignSelf: "flex-start",
//     marginVertical: 30,
//     width: "100%",
//     justifyContent: "center",
//   },
//   inputStyle: {
//     height: 40,
//     borderWidth: 1,
//   },
//   textStyle: {
//     fontSize: 18,
//     color: "blue",
//   },
// });

// export default SignComponent;
/*************************************************************************
 *  Use the react-native-elements library
 ************************************************************************/
import React, { useState } from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Text, Input } from "react-native-elements";
import Spacer from "./Spacer";

const SignComponent = ({
  properties,
  onChangeToSign,
  onPressHandler,
  errorMessage,
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <View style={styles.container}>
      <Spacer>
        <Text h3 style={{ alignSelf: "center" }}>
          {properties.headerText}
        </Text>
      </Spacer>
      <Spacer />
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Spacer />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      {errorMessage ? (
        <Text style={styles.errMessageStyle}>{errorMessage}</Text>
      ) : null}
      <Spacer>
        <Button
          title={properties.submitButtonText}
          onPress={() => onPressHandler({ email, password })}
        ></Button>
      </Spacer>

      <Spacer>
        <TouchableOpacity onPress={onChangeToSign}>
          <Text style={styles.link}>{properties.firstInfo}</Text>
          <Text style={styles.link}>{properties.secondInfo}</Text>
        </TouchableOpacity>
      </Spacer>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    marginBottom: 100,
  },
  errMessageStyle: {
    fontSize: 16,
    color: "red",
    marginLeft: 15,
  },
  link: {
    fontWeight: "bold",
    color: "blue",
  },
});

export default SignComponent;
