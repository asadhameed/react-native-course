import React, { useContext, useEffect } from "react";
import {
  Text,
  View,
  Button,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { Context } from "../context/BlogContext";
import { Feather } from "@expo/vector-icons";

const IndexSearch = ({ navigation }) => {
  const context = useContext(Context);
  useEffect(() => {
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() => navigation.navigate("createBlogScreen")}
        >
          <Feather name="plus" size={30} />
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View>
      <FlatList
        data={context.state}
        keyExtractor={(blog) => `${blog.id}`}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("showScreen", { id: item.id })}
          >
            <View style={Styles.row}>
              <Text style={Styles.textStyle}>
                {item.title} {item.id}
              </Text>

              <TouchableOpacity
                onPress={() => {
                  context.deleteBlogPost(item.id);
                }}
              >
                <Feather name="trash" size={24} />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  row: {
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    borderTopWidth: 2,
    borderColor: "gray",
  },
  textStyle: {
    fontSize: 20,
  },
});

export default IndexSearch;
