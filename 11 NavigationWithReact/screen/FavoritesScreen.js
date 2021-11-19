import React, { useLayoutEffect } from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import MealList from "../components/MealList";
// import { MEALS } from "../data/data";

const FavoriteScreen = ({ navigation }) => {
  // const MEALS = useSelector((state) => state.meals.meals);
  useLayoutEffect(() => {
    navigation.setOptions({
      headerLeft: ({ tintColor }) => (
        <TouchableOpacity>
          <Ionicons
            name="menu"
            size={25}
            color={tintColor}
            onPress={navigation.openDrawer}
          />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const favoriteMeals = useSelector((state) => state.meals.favoriteMeals);

  return <MealList mealList={favoriteMeals} />;
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
  },
});

export default FavoriteScreen;
