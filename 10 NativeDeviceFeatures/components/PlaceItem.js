import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Colors from "../constants/Colors";

const PlaceItem = (props) => {
  return (
    <View style={styles.placeItem}>
      <TouchableOpacity
        style={{ flexDirection: "row" }}
        onPress={props.onSelect}
      >
        <Image style={styles.image} source={{ uri: props.place.imageUri }} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{props.place.title}</Text>
          <Text style={styles.address}>{props.place.address}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={props.onDelete}
        style={{ alignItems: "flex-end" }}
      >
        <AntDesign name="delete" size={28} color={Colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  placeItem: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "row",
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#ccc",
    borderColor: Colors.primary,
    borderWidth: 1,
  },
  infoContainer: {
    marginLeft: 25,
    width: 250,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  title: {
    color: "black",
    fontSize: 18,
    marginBottom: 5,
  },
  address: {
    color: "#666",
    fontSize: 16,
  },
});
export default PlaceItem;
