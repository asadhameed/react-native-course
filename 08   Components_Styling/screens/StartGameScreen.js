import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
  Alert,
  Button,
} from "react-native";

import Card from "../components/Card";
import Color from "../constants/colors";
import Input from "../components/Input";
import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import NumberContainer from "../components/NumberContainer";
import MainButton from "../components/MainButton";

const StartGameScreen = (props) => {
  const [enterValue, setEnterValue] = useState();
  const [confirmed, setConfirmed] = useState(false);
  const [selectedNumber, setSelectedNumber] = useState();

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
      <Card style={{ marginTop: 20 }}>
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
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={Styles.screen}>
        <TitleText style={Styles.title}>The Game Screen</TitleText>
        <Card style={Styles.inputContainer}>
          <BodyText>Select A Number</BodyText>
          {/* <TextInput style={Styles.input} keyboardType="numeric" /> */}
          <Input
            keyboardType="number-pad"
            maxLength={2}
            style={{ width: "30%", textAlign: "center", fontSize: 24 }}
            value={enterValue}
            onChangeText={numberHandler}
          />
          <View style={Styles.buttonContainer}>
            <View style={Styles.button}>
              <Button
                title="Reset"
                color={Color.primary}
                onPress={restHandler}
              />
            </View>
            <View style={Styles.button}>
              <Button
                title="Confirm"
                color={Color.secondary}
                onPress={confirmedHandler}
              />
            </View>
          </View>
        </Card>
        {confirmText}
      </View>
    </TouchableWithoutFeedback>
  );
};

const Styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    padding: 10,
  },
  title: {
    fontSize: 20,

    marginVertical: 20,
  },

  inputContainer: {
    width: 300,
    maxWidth: "80%",
    alignItems: "center",
  },

  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    width: "100%",
  },
  button: {
    width: 100,
  },
});

export default StartGameScreen;
