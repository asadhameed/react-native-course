import React, { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";
import { Context as AuthContext } from "../contexts/AuthContext";
const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <View style={styles.container}>
      <Text h3 style={{ marginBottom: 30 }}>
        Account Setting
      </Text>
      <Button title="Sign Out" onPress={signOut} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    marginHorizontal: 30,
  },
});

export default AccountScreen;
