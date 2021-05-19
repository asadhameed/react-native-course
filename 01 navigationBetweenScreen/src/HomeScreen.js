import React from "react";
import { Text, View, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Button
        title="Component Screen"
        onPress={() => navigation.navigate("component")}
      />
      <Button
        style={styles.topMargin}
        title="List Screen"
        onPress={() => navigation.navigate("list")}
      />
      <TouchableOpacity
        title="List Screen"
        onPress={() => navigation.navigate("list")}
      >
        <Text>List Screen</Text>
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  topMargin: {
    marginTop: "20px",
  },
});
export default HomeScreen;
