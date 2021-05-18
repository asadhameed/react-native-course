import React from "react";
import { Text, View, StyleSheet } from "react-native";

const HomeComponent = () => {
  const name = "Asad";
  return (
    <View>
      <Text style={style.textStyle}> Getting Start with React Native!</Text>
      <Text style={style.nameTextStyle}>{`My name is ${name}`}</Text>
    </View>
  );
};
const style = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  nameTextStyle: {
    fontSize: 20,
  },
});
export default HomeComponent;
