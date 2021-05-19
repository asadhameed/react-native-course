import React from "react";
import { Text, View, FlatList } from "react-native";

export default () => {
  const friends = [
    { name: "Friends 1" },
    { name: "Friends 2" },
    { name: "Friends 3" },
    { name: "Friends 4" },
    { name: "Friends 5" },
    { name: "Friends 6" },
    { name: "Friends 7" },
    { name: "Friends 8" },
    { name: "Friends 9" },
    { name: "Friends 10" },
    { name: "Friends 11" },
    { name: "Friends 12" },
  ];
  return (
    <FlatList
      data={friends}
      keyExtractor={(friend) => friend.name}
      renderItem={({ item }) => <Text>{item.name}</Text>}
    ></FlatList>
  );
};
