import React from "react";
import { View, Button, Text, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Counter demo"
        onPress={() => navigation.navigate("counter")}
      />

      <Button
        title="Add Color demo"
        onPress={() => navigation.navigate("color")}
      />
      <Text />
      <Button
        title="Square Color demo"
        onPress={() => navigation.navigate("squareColor")}
      />
      <Text />
      <Button
        title="Square COlor Reducer demo"
        onPress={() => navigation.navigate("squareReducerColor")}
      />
      <Text />
      <Button
        title="State for text demo"
        onPress={() => navigation.navigate("textScreen")}
      />
    </View>
  );
};
const styles = StyleSheet.create({});

export default HomeScreen;
