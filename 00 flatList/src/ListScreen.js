import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "Friend 1", age: 32 },
    { name: "Friend 2", age: 31 },
    { name: "Friend 3", age: 30 },
    { name: "Friend 4", age: 39 },
    { name: "Friend 5", age: 38 },
    { name: "Friend 6", age: 37 },
    { name: "Friend 7", age: 36 },
    { name: "Friend 8", age: 35 },
    { name: "Friend 9", age: 34 },
    { name: "Friend 10", age: 33 },
    { name: "Friend 11", age: 32 },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <View>
          <Text style={styles.textStyle}>
            Name:{item.name} - age : {item.age}
          </Text>
        </View>
      )}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 30,
  },
});

export default ListScreen;
