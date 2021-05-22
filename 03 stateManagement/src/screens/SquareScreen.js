import React, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const SquareScreen = () => {
  const COLOR_INCREMENT = 10;
  const INITIAL_VALUE = 0;
  const [red, setRed] = useState(INITIAL_VALUE);
  const [green, setGreen] = useState(INITIAL_VALUE);
  const [blue, setBlue] = useState(INITIAL_VALUE);

  const helpSetColor = (color, change) => {
    switch (color) {
      case "red":
        change + red > 256 || change + red < 0 ? null : setRed(red + change);
        return;
      case "green":
        change + green > 256 || change + green < 0
          ? null
          : setGreen(green + change);
        return;
      case "blue":
        change + blue > 256 || change + blue < 0
          ? null
          : setBlue(blue + change);
        return;
      default:
        return;
    }
    // if (color === "red") {
    //   if (change + red > 256 || change + red < 0) return;
    //   else setRed(red + change);
    // }
    // if (color === "green") {
    //   if (change + green > 256 || change + green < 0) return;
    //   else setGreen(green + change);
    // }
    // if (color === "blue") {
    //   if (change + blue > 256 || change + blue < 0) return;
    //   else setBlue(blue + change);
    // }
  };

  return (
    <View>
      <Text>Welcome to square Scree</Text>
      <ColorCounter
        color="Red"
        onIncrease={() => helpSetColor("red", COLOR_INCREMENT)}
        onDecrease={() => helpSetColor("red", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Green"
        onIncrease={() => helpSetColor("green", COLOR_INCREMENT)}
        onDecrease={() => helpSetColor("green", -1 * COLOR_INCREMENT)}
      />
      <ColorCounter
        color="Blue"
        onIncrease={() => helpSetColor("blue", COLOR_INCREMENT)}
        onDecrease={() => helpSetColor("blue", -1 * COLOR_INCREMENT)}
      />
      <Text>{`Red is: ${red}`}</Text>
      <Text>{`Green is: ${green}`}</Text>
      <Text>{`Blue is: ${blue}`}</Text>
      <View
        style={{
          height: 50,
          width: 100,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
