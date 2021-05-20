import React from "react";
import { View, Button, TouchableOpacity, StyleSheet } from "react-native";

const HomeScree = ({ navigation }) => {
  return (
    <View>
      <Button
        style={styles.buttonStyle}
        title="GO to component Screen"
        onPress={() => navigation.navigate("component")}
      />
      <Button
        style={styles.buttonStyle}
        title="Go to Image Screen"
        onPress={() => navigation.navigate("image")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  buttonStyle: {
    marginTop: "100px",
  },
});

export default HomeScree;
