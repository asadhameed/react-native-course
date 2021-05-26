import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

const SearchBar = ({ term, onTermChange, onTermSubmit }) => {
  return (
    <View style={Styles.backgroundStyle}>
      <FontAwesome style={Styles.iconStyle} name="search" />
      <TextInput
        autoCapitalize="none"
        style={Styles.inputStyle}
        placeholder="Search"
        value={term}
        onChangeText={onTermChange}
        onEndEditing={onTermSubmit}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  backgroundStyle: {
    marginHorizontal: 15,
    marginTop: 10,
    flexDirection: "row",
    // backgroundColor: "#F0EEEE",
    backgroundColor: "#eae1e1",
    height: 50,
    borderRadius: 20,
    marginBottom: 10,
  },
  inputStyle: {
    flex: 1,
    fontSize: 25,
  },
  iconStyle: {
    fontSize: 32,
    marginHorizontal: 15,
    alignSelf: "center",
  },
});

export default SearchBar;
