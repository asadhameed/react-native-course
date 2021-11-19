export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";
export const FILTER = "FILTER";

export const toggleFavorite = (id) => {
  return { type: TOGGLE_FAVORITE, mealId: id };
};

export const filter = (isGlutenFree, isVegan, isVegetarian, isLactoseFree) => {
  return {
    type: FILTER,
    filter: {
      gluten: isGlutenFree,
      vegan: isVegan,
      vegetarian: isVegetarian,
      lactoseFree: isLactoseFree,
    },
  };
};
