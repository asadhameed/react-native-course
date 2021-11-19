import React from "react";
import { FlatList } from "react-native";
import MealItem from "../components/MealItem";

const MealList = ({ mealList }) => {
  const renderMealItem = ({ item }) => {
    return <MealItem item={item} />;
  };
  return (
    <FlatList
      data={mealList}
      keyExtractor={(meal) => meal.id}
      renderItem={renderMealItem}
    />
  );
};

export default MealList;
