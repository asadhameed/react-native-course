import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  ImageBackground,
} from "react-native";

const MealDetail = ({ item }) => {
  return (
    <ScrollView>
      <View style={styles.Container}>
        <View style={styles.header}></View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
});
export default MealDetail;
