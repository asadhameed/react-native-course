import React, { useLayoutEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity, Switch } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import Colors from "../constants/Colors";
import { useDispatch } from "react-redux";
import { filter } from "../store/actions/meals";

const FilterScreen = ({ navigation }) => {
  const [isGlutenFree, setGlutenFree] = useState(false);
  const [isVegan, setVegan] = useState(false);
  const [isVegetarian, setVegetarian] = useState(false);
  const [isLactoseFree, setLactose] = useState(false);

  const dispatch = useDispatch();
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
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            dispatch(filter(isGlutenFree, isVegan, isVegetarian, isLactoseFree))
          }
        >
          <Ionicons name="save" size={25} color={Colors.accentColor} />
        </TouchableOpacity>
      ),
    });
  }, [navigation, isGlutenFree, isVegan, isVegetarian, isLactoseFree]);

  const FilterContent = ({ title, onChangeHandler, value }) => {
    return (
      <View style={styles.filterContainer}>
        <Text>{title}</Text>
        <Switch
          onValueChange={onChangeHandler}
          value={value}
          trackColor={{ true: Colors.primaryColor }}
          thumbColor={Colors.primaryColor}
        />
      </View>
    );
  };
  console.log(isGlutenFree);
  return (
    <View style={styles.screen}>
      <Text style={styles.title}>Available Filters / Restrictions</Text>
      <FilterContent
        value={isGlutenFree}
        onChangeHandler={setGlutenFree}
        title="Gluten Free"
      />
      <FilterContent title="Vegan" onChangeHandler={setVegan} value={isVegan} />
      <FilterContent
        title="Vegetarian"
        onChangeHandler={setVegetarian}
        value={isVegetarian}
      />
      <FilterContent
        title="Lactose Free"
        onChangeHandler={setLactose}
        value={isLactoseFree}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignContent: "center",
  },
  title: {
    textAlign: "center",
    margin: 20,
    fontWeight: "bold",
    fontSize: 20,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    width: "80%",
  },
});

export default FilterScreen;
