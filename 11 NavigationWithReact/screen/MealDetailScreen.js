import React, { useLayoutEffect } from "react";
import {
  View,
  ScrollView,
  ImageBackground,
  Text,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { toggleFavorite } from "../store/actions/meals";

const MealDetailScreen = ({ route, navigation }) => {
  const MEALS = useSelector((state) => state.meals.meals);
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  const meal = MEALS.find((ml) => ml.id == route.params.mealItemId);
  const fa = favMeals.find((fm) => fm.id == route.params.mealItemId);
  const dispatch = useDispatch();
  useLayoutEffect(() => {
    navigation.setOptions({
      title: meal.title,
      headerRight: (props) => {
        return (
          <TouchableOpacity
            onPress={() => {
              dispatch(toggleFavorite(meal.id));
            }}
          >
            <FontAwesome
              name={fa ? "star" : "star-o"}
              size={24}
              color="white"
            />
          </TouchableOpacity>
        );
      },
    });
  }, [navigation, fa]);
  return (
    <ScrollView>
      <View style={styles.Screen}>
        <ImageBackground
          style={styles.imageStyle}
          source={{ uri: meal.imageUrl }}
        />
        <View style={styles.infoStyle}>
          <Text>{meal.duration}</Text>
          <Text>{meal.complexity.toUpperCase()}</Text>
          <Text>{meal.affordability.toUpperCase()}</Text>
        </View>
        <Text style={styles.ingredients}>Ingredients</Text>
        {meal.ingredients.map((ing) => (
          <Text style={styles.insideText}> {ing} </Text>
        ))}
        <Text style={styles.ingredients}>Steps</Text>
        {meal.steps.map((step) => (
          <Text style={styles.insideText}> {step} </Text>
        ))}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
  },
  imageStyle: {
    width: "100%",
    height: 200,
    alignItems: "center",
  },
  infoStyle: {
    flexDirection: "row",
    justifyContent: "space-around",
    fontFamily: "open-sans",
    padding: 10,
  },
  ingredients: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
    fontFamily: "open-sans",
  },
  insideText: {
    justifyContent: "center",
    fontSize: 15,
    fontFamily: "open-sans",
    borderWidth: 2,
    padding: 5,
    margin: 10,
    borderColor: "#ccc",
  },
});

export default MealDetailScreen;
