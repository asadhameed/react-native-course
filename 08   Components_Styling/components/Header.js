import React from "react";
import { Text, View, StyleSheet } from "react-native";

import Colors from "../constants/colors";
import TitleText from "./TitleText";

const Header = (props) => {
  return (
    <View style={styles.headerContainer}>
      <TitleText style={styles.textHeader}>{props.title}</TitleText>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    width: "100%",
    height: 90,
    padding: 40,
    backgroundColor: Colors.primary,
    alignItems: "center",
    justifyContent: "center",
  },
  textHeader: {
    fontSize: 24,
    marginTop: 20,
  },
});

export default Header;
