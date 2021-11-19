import React, { useLayoutEffect } from "react";
import { FlatList, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import CategoryGridTile from "../components/CategoryGridTile";

import { CATEGORIES } from "../data/data";

const renderItem = (itemData) => {
  return <CategoryGridTile categoryItem={itemData.item} />;
};
const CategoriesScreen = ({ navigation }) => {
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
  return (
    <FlatList
      numColumns={2}
      data={CATEGORIES}
      keyExtractor={(item) => item.id}
      renderItem={(item) => renderItem(item)}
    />
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,

    alignItems: "center",
    justifyContent: "center",
  },
});

export default CategoriesScreen;
