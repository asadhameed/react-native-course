import React from "react";
import { View, StyleSheet } from "react-native";

const Card = (props) => {
  return (
    <View style={{ ...styles.cardContainer, ...props.style }}>
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    shadowOffset: { width: 2, height: 9 },
    shadowRadius: 20,
    shadowColor: "black",
    shadowOpacity: 0.5,
    elevation: 10,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 20,
  },
});

export default Card;
