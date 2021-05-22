import React, { useReducer } from "react";
import { View, StyleSheet, Text } from "react-native";
import ColorCounter from "../components/ColorCounter";

const validationColorRange = (amount) => {
  return amount > 256 || amount < 0 ? false : true;
};
const reducer = (state, action) => {
  switch (action.type) {
    // case "red":
    //   const red = state.red + action.amount;
    case "change_red":
      const red = state.red + action.payload;
      return validationColorRange(red) ? { ...state, red } : state;

    // case "green":
    //   const green = state.green + action.amount;
    case "change_green":
      const green = state.green + action.payload;
      return validationColorRange(green) ? { ...state, green } : state;

    // case "blue":
    //   const blue = state.blue + action.amount;
    case "change_blue":
      const blue = state.blue + action.payload;
      return validationColorRange(blue) ? { ...state, blue } : state;

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const COLOR_INCREMENT = 10;

  return (
    <View>
      <Text>Welcome to square Scree</Text>
      <ColorCounter
        color="Red"
        onIncrease={
          () => dispatch({ type: "change_red", payload: COLOR_INCREMENT })
          // dispatch({ colorToChange: "red", amount: COLOR_INCREMENT })
        }
        onDecrease={
          () => dispatch({ type: "change_red", payload: -1 * COLOR_INCREMENT })
          // dispatch({ colorToChange: "red", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Green"
        onIncrease={
          () => dispatch({ type: "change_green", payload: COLOR_INCREMENT })
          // dispatch({ colorToChange: "green", amount: COLOR_INCREMENT })
        }
        onDecrease={
          () =>
            dispatch({ type: "change_green", payload: -1 * COLOR_INCREMENT })
          // dispatch({ colorToChange: "green", amount: -1 * COLOR_INCREMENT })
        }
      />
      <ColorCounter
        color="Blue"
        onIncrease={
          () => dispatch({ type: "change_blue", payload: COLOR_INCREMENT })
          // dispatch({ colorToChange: "blue", amount: COLOR_INCREMENT })
        }
        onDecrease={
          () => dispatch({ type: "change_blue", payload: -1 * COLOR_INCREMENT })
          // dispatch({ colorToChange: "blue", amount: -1 * COLOR_INCREMENT })
        }
      />
      <Text>{`Red is: ${state.red}`}</Text>
      <Text>{`Green is: ${state.green}`}</Text>
      <Text>{`Blue is: ${state.blue}`}</Text>
      <View style={{ marginTop: 30, flexDirection: "column" }}>
        <View style={{ flexDirection: "row" }}>
          <Text style={{ marginLeft: 20 }}>Red</Text>
          <Text style={{ marginLeft: 30 }}>Green</Text>
          <Text style={{ marginLeft: 30 }}>Blue</Text>
          <Text style={{ marginLeft: 50 }}> Color RGB</Text>
        </View>
        <View style={{ flexDirection: "row" }}>
          <View
            style={{
              marginLeft: 10,
              height: 100,
              width: 50,
              backgroundColor: `rgb(${state.red}, 0,0)`,
            }}
          />

          <View
            style={{
              marginLeft: 10,
              width: 50,
              height: 100,
              backgroundColor: `rgb(0,${state.green},0)`,
            }}
          />

          <View
            style={{
              marginLeft: 10,
              width: 50,
              height: 100,
              backgroundColor: `rgb(0,0,${state.blue})`,
            }}
          />

          <View
            style={{
              marginLeft: 20,
              height: 100,
              width: 100,
              backgroundColor: `rgb(${state.red}, ${state.green}, ${state.blue})`,
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default SquareScreen;
