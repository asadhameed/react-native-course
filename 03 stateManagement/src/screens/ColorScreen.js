import React, { useState } from "react";

import { View, StyleSheet, Button, FlatList } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState([]);
  console.log(color);
  return (
    <View>
      <Button
        title="Add a Color"
        onPress={() => setColor([...color, randomRGb()])}
      />

      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item}
        data={color}
        renderItem={({ item }) => (
          <View style={{ height: 50, width: 50, backgroundColor: item }} />
        )}
      />
    </View>
  );
};

const randomRGb = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  return `rgb(${red} , ${green} , ${blue})`;
};

const Styles = StyleSheet.create({});

export default ColorScreen;
