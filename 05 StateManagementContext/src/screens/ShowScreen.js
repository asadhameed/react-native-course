import React, { useContext, useEffect } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const ShowScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const { state } = useContext(Context);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("edit", { id });
          }}
        >
          <Feather name="edit" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);
  const blog = state.find((item) => item.id === id);
  return (
    <View style={Styles.viewStyle}>
      <Text
        style={{
          textDecorationLine: "underline",
          marginVertical: 30,
          fontSize: 20,
        }}
      >
        Blog Title {blog.id}
      </Text>
      <Text>{blog.title}</Text>
    </View>
  );
};

const Styles = StyleSheet.create({
  viewStyle: {
    margin: 50,
    borderWidth: 3,
    borderColor: "gray",
  },
});

export default ShowScreen;
