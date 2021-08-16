import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button,
  Dimensions,
  ScrollView,
  KeyboardAvoidingView,
} from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

import Card from "../components/Card";
import Color from "../constants/colors";
import Input from "../components/Input";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  // ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.DEFAULT);

  const [enterValue, setEnterValue] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();
  const [buttonWidth, setButtonWidth] = useState(
    Dimensions.get("window").width / 4
  );

  // const updateLayout = () => {
  //   setButtonWidth(Dimensions.get("window").width / 4);
  // };

  // Dimensions.addEventListener("change", updateLayout);

  /*************************************************
   *   Better Approach
   *
   */

  useEffect(() => {
    const updateLayout = () => {
      setButtonWidth(Dimensions.get("window").width / 4);
    };

    Dimensions.addEventListener("change", updateLayout);
    return () => {
      Dimensions.removeEventListener("change", updateLayout);
    };
  }, []);

  const numberHandler = (inputText) => {
    setEnterValue(inputText.replace(/[^0-9]/g, ""));
    setConfirmed(false);
  };

  const confirmedHandler = () => {
    const numberValue = parseInt(enterValue);
    console.log(
      "🚀 ~ file: StartGameScreen.js ~ line 28 ~ confirmedHandler ~ numberValue",
      numberValue
    );

    if (
      numberValue === NaN ||
      numberValue < 0 ||
      numberValue > 99 ||
      !numberValue
    ) {
      Alert.alert("Invalid Number", "The number must between 0 to 99", [
        { text: "Ok", onPress: restHandler, style: "destructive" },
      ]);
      return;
    }
    setSelectedNumber(numberValue);
    setEnterValue("");
    setConfirmed(true);
  };
  let confirmText;
  if (confirmed) {
    confirmText = (
      <Card style={{ marginTop: 10 }}>
        <BodyText>You Selected</BodyText>
        <NumberContainer style={{ alignSelf: "center" }}>
          {selectedNumber}
        </NumberContainer>
        <MainButton onPress={() => props.onStartGame(selectedNumber)}>
          Start Game
        </MainButton>
      </Card>
    );
  }

  const restHandler = () => {
    setEnterValue();
    setConfirmed(false);
  };

  return (
    <ScrollView>
      <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={30}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={Styles.screen}>
            <TitleText style={Styles.title}>The Game Screen</TitleText>
            <Card style={Styles.inputContainer}>
              <BodyText>Select A Number</BodyText>

              <Input
                keyboardType="number-pad"
                maxLength={2}
                style={{ width: "30%", textAlign: "center", fontSize: 20 }}
                value={enterValue}
                onChangeText={numberHandler}
              />
              <View style={Styles.buttonContainer}>
                {/* <View style={Styles.button}> */}
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Reset"
                    color={Color.primary}
                    onPress={restHandler}
                  />
                </View>
                {/* <View style={Styles.button}> */}
                <View style={{ width: buttonWidth }}>
                  <Button
                    title="Confirm"
                    color={Color.secondary}
                    onPress={confirmedHandler}
                  />
                </View>
              </View>
            </Card>
            <View>{confirmText}</View>
          </View>
        </TouchableWithoutFeedback>
      </KeyboardAvoidingView>
    </ScrollView>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 5,
  },
  title: {
    fontSize: 16,
    marginVertical: 10,
  },

  inputContainer: {
    width: "80%",
    maxWidth: "95%",
    minWidth: 300,
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
    width: "100%",
  },
  // button: {
  //   // width: 100,
  //   width: Dimensions.get("window").width / 4,
  // },
});

export default StartGameScreen;
