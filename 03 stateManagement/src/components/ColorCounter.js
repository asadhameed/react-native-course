import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const ColorCounter = ({ color, onDecrease, onIncrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button title={`More ${color}`} onPress={() => onIncrease()} />
      <Button title={`Less ${color}`} onPress={() => onDecrease()} />
    </View>
  );
};

const styles = StyleSheet.create({});

export default ColorCounter;
