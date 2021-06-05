import React from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet } from "react-native";

const SafeAreaComponent = (props) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView>{props.children}</SafeAreaView>
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default SafeAreaComponent;
