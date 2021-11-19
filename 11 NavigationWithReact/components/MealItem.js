import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MealItem = ({ item }) => {
  const navigation = useNavigation();
  const onPressHandler = () => {
    navigation.navigate("mealDetailScreen", { mealItemId: item.id });
  };
  return (
    <TouchableOpacity onPress={onPressHandler} style={styles.mealItem}>
      <View>
        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
          <ImageBackground
            style={styles.bgImage}
            source={{ uri: item.imageUrl }}
          >
            <Text style={styles.itemTitle} numberOfLines={1}>
              {item.title}
            </Text>
          </ImageBackground>
        </View>
        <View style={{ ...styles.mealRow, ...styles.mealDetail }}>
          <Text>{item.duration}</Text>
          <Text>{item.complexity.toUpperCase()}</Text>
          <Text>{item.affordability.toUpperCase()}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "100%",
    backgroundColor: "#ccc",
    borderRadius: 10,
    shadowColor: "black",
    elevation: 6,
    padding: 10,
    flex: 1,
    fontFamily: "open-sans",
    margin: 5,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
  },
  itemTitle: {
    alignItems: "center",
    fontFamily: "open-sans",
    fontSize: 20,

    textAlign: "center",
    color: "white",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
  },
  mealRow: {
    flexDirection: "row",
  },
  mealHeader: { height: "90%" },
  mealDetail: {
    justifyContent: "space-between",
  },
  bgImage: {
    height: "100%",
    width: "100%",
    justifyContent: "flex-end",
  },
});

export default MealItem;
