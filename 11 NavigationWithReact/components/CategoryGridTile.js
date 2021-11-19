import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";

const CategoryGridTile = ({ categoryItem }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={{ ...styles.itemStyle, backgroundColor: categoryItem.color }}
      onPress={() =>
        navigation.navigate("categoryMealScreen", {
          categoryId: categoryItem.id,
        })
      }
    >
      <Text>{categoryItem.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  itemStyle: {
    borderRadius: 10,
    shadowColor: "black",
    shadowOpacity: 0.26,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 3,
    padding: 10,
    flex: 1,
    fontFamily: "open-sans",
    margin: 5,
    height: 150,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoryGridTile;
