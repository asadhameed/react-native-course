import React, { useState, useReducer } from "react";
import { Button, Text, View, StyleSheet } from "react-native";

const reducer = (state, action) => {
  // if (action.type === "increment") return { count: state.count + 1 };
  // if (action.type === "decrement") return { count: state.count - 1 };
  // return state;

  // if (action.type === "add") return { count: state.count + action.payload };
  // return state;

  return action.type === "add"
    ? { count: state.count + action.payload }
    : state;
};

const CounterScreen = () => {
  const [counter, setCounter] = useState(0);
  const [state, dispatch] = useReducer(reducer, { count: 0 });
  return (
    <View style={styles.container}>
      <Button
        style={styles.buttonStyle}
        title="Increment "
        onPress={() => setCounter(counter + 1)}
      />

      <Button
        style={styles.buttonStyle}
        title="Decrement"
        onPress={() => setCounter(counter - 1)}
      />
      <Text>{`Current Count: ${counter}`} </Text>

      <Text style={{ marginTop: 50 }}>
        The Counter By useReducer Method just exercise
      </Text>
      <Button
        style={styles.buttonStyle}
        title="Increment "
        // onPress={() => dispatch({ type: "increment" })}
        onPress={() => dispatch({ type: "add", payload: 1 })}
      />

      <Button
        style={styles.buttonStyle}
        title="Decrement"
        // onPress={() => dispatch({ type: "decrement" })}
        onPress={() => dispatch({ type: "add", payload: -1 })}
      />
      <Text>{`Current Count: ${state.count}`} </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  buttonStyle: {
    fontSize: 20,
    marginTop: 20,
  },
});
export default CounterScreen;
