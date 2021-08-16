import React from "react";
import { Text, View, StyleSheet, Platform } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  //  let headerStyle =
  //   Platform.OS === "ios" ? styles.headerIOS : styles.headerAndroid;

  return (
    //  <View style={{ ...styles.headerContainer, ...headerStyle }}>
    <View
      style={{
        ...styles.headerContainer,
        ...Platform.select({
          ios: styles.headerIOS,
          android: styles.headerAndroid,
        }),
      }}
    >
      <TitleText style={styles.textHeader}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    padding: 40,
    // backgroundColor: Platform.OS === "ios" ? "white" : Colors.primary,
    // borderBottomWidth: Platform.OS === "ios" ? 1 : 0,
    // borderColor: Platform.OS === "ios" ? "#ccc" : "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  headerIOS: {
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderColor: "#ccc",
  },
  headerAndroid: {
    backgroundColor: Colors.primary,
    // borderBottomWidth: 0,
    //borderColor: "transparent",
  },
  textHeader: {
    fontSize: 24,
    marginTop: 20,
    color: Platform.OS === "ios" ? Colors.primary : "white",
  },
});

export default Header;
