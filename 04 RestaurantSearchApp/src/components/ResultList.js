import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import ResultDetails from "./ResultDetails";

const ResultList = ({ title, data }) => {
  const navigation = useNavigation();

  if (!data.length) return null;
  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}> {title}</Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(result) => result.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("ResultShowScreen", { id: item.id })
            }
          >
            <ResultDetails result={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },

  titleStyle: {
    marginLeft: 15,
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
  },
});
export default ResultList;
