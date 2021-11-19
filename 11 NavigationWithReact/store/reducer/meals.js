import { MEALS } from "../../data/data";
import { TOGGLE_FAVORITE, FILTER } from "../actions/meals";
const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: [],
};
const mealsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_FAVORITE:
      const existingMealIndex = state.favoriteMeals.findIndex(
        (meal) => meal.id === action.mealId
      );

      if (existingMealIndex >= 0) {
        const updateMeal = state.favoriteMeals.filter(
          (fm) => fm.id !== action.mealId
        );
        return { ...state, favoriteMeals: updateMeal };
      } else {
        const meal = state.meals.find((me) => me.id === action.mealId);
        return {
          ...state,
          favoriteMeals: state.favoriteMeals.concat(meal),
        };
      }
    case FILTER:
      const filterValue = action.filter;
  
      const updateFilter = state.meals.filter((meal) => {
        if (filterValue.gluten && !meal.isGlutenFree) return false;
        if (filterValue.vegan && !meal.isVegan) return false;
        if (filterValue.vegetarian && !meal.isVegetarian) return false;
        if (filterValue.lactoseFree && !meal.isLactoseFree) return false;
        return true;
      });
      console.log(updateFilter.length);

      return { ...state, filteredMeals: updateFilter };
    default:
      return state;
  }
};

export default mealsReducer;
