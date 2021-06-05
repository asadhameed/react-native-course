import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Button, Text } from "react-native-elements";

import SafeAreaComponent from "../components/SafeAreaComponent";
import { Context as AuthContext } from "../contexts/AuthContext";

const AccountScreen = () => {
  const { signOut } = useContext(AuthContext);
  return (
    <SafeAreaComponent>
      <Text h3 style={{ marginBottom: 30 }}>
        Account Setting
      </Text>
      <Button title="Sign Out" onPress={signOut} />
    </SafeAreaComponent>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
