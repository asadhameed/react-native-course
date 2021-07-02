import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";

const GoalItem = (props) => {
  return (
    <View>
      {/**************************
       * if your directly call function like the following you will get en error
       * Warning: Cannot update a component from inside the function body of a different component.
       *  <TouchableOpacity onPress={props.onPress( props.item.id)}>
       */}

      {/**************************
       * you can call the function through an anonymous  function
       *  <TouchableOpacity onPress={()=>props.onPress( props.item.id)}>
       */}

      <TouchableOpacity
        activeOpacity
        onPress={props.onPress.bind(this, props.item.id)}
      >
        <Text style={styles.testContainer}>{props.item.value}</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  testContainer: {
    borderWidth: 2,
    borderColor: "black",
    backgroundColor: "#ccc",
    marginVertical: 10,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default GoalItem;
