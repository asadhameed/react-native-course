import React, { useLayoutEffect, useState } from "react";
import { StyleSheet } from "react-native";
import { useSelector } from "react-redux";

import { CATEGORIES } from "../data/data";
import MealList from "../components/MealList";

const CategoryMealScreen = ({ route, navigation }) => {
  const MEALS = useSelector((state) => state.meals.filteredMeals);

  const [categoryMeals, setCategoryMeals] = useState();

  useLayoutEffect(() => {
    const selectedCategory = CATEGORIES.find(
      (item) => item.id === route.params.categoryId
    );
    const categoryMeal = MEALS.filter(
      (meal) => meal.categoryIds.indexOf(selectedCategory.id) >= 0
    );
    setCategoryMeals(categoryMeal);

    navigation.setOptions({
      title: selectedCategory.title,
      headerTitleAlign: "center",
    });
  }, [navigation]);

  return <MealList mealList={categoryMeals} />;
};

const styles = StyleSheet.create({});

export default CategoryMealScreen;
