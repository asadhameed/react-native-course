import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

import NumberContainer from "../components/NumberContainer";
import Card from "../components/Card";
import DefaultStyles from "../constants/default-styles";
import MainButton from "../components/MainButton";
import Colors from "../constants/colors";
import BodyText from "../components/BodyText";

const generateRandomBetween = (min, max, exclude) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) return generateRandomBetween(min, max, exclude);
  else return rndNum;
};

const GameScreen = (props) => {
  const initGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  // const [gameRound, setGameRound] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initGuess.toString()]);
  const { onGameOver, userChoice } = props;

  useEffect(() => {
    if (currentGuess === userChoice) onGameOver(pastGuesses.length);
  }, [currentGuess, onGameOver, userChoice]);

  const currentLow = useRef(1);
  const currentHigh = useRef(100);
  const nextGuessHandler = (direction) => {
    if (
      (direction === "lower" && currentGuess < props.userChoice) ||
      (direction === "greater" && currentGuess > props.userChoice)
    ) {
      console.log(
        "🚀 ~ file: GameScreen.js ~ line 36 ~ nextGuessHandler ~ props.userChoice",
        props.userChoice
      );
      Alert.alert("Don't lie! ", "You know that this is wrong", [
        { text: "sorry", style: "cancel" },
      ]);
      return;
    }

    if (direction === "lower") currentHigh.current = currentGuess;
    else currentLow.current = currentGuess + 1;

    const nextNumber = generateRandomBetween(
      currentLow.current,
      currentHigh.current,
      currentGuess
    );

    setCurrentGuess(nextNumber);
    // setGameRound(gameRound + 1);
    setPastGuesses((prevPastGausses) => [
      nextNumber.toString(),
      ...prevPastGausses,
    ]);
  };

  const renderListItem = (value, numberOfRound) => {
    console.log(value);
    return (
      <View key={value} style={styles.listItem}>
        <BodyText>#{numberOfRound}</BodyText>
        <BodyText>{value}</BodyText>
      </View>
    );
  };

  const renderListItemForFlatList = (listLength, itemData) => {
    return (
      <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
      </View>
    );
  };
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Opponent's Guess Number</Text>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card style={styles.buttonContainer}>
        <MainButton
          style={{ backgroundColor: Colors.secondary }}
          onPress={nextGuessHandler.bind(this, "lower")}
          disabled={currentGuess === props.userChoice}
        >
          <Ionicons name="md-remove" size={30} color="white" />
        </MainButton>
        <MainButton
          disabled={currentGuess === props.userChoice}
          onPress={nextGuessHandler.bind(this, "greater")}
        >
          <Ionicons name="md-add" size={30} color="white" />
        </MainButton>
      </Card>
      <Card style={{ marginTop: 40 }}>
        <MainButton onPress={props.onRestGame}>New Game</MainButton>
      </Card>
      {/* <View style={styles.listContainer}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.list}
        >
          {pastGuesses.map((guess, index) =>
            renderListItem(guess, pastGuesses.length - index)
          )}
        </ScrollView>
      </View> */}
      <View style={styles.listContainer}>
        <FlatList
          data={pastGuesses}
          keyExtractor={(guess) => guess}
          showsVerticalScrollIndicator={false}
          // renderItem={(props) =>
          //   renderListItem(props.item, pastGuesses.length - props.index)
          // }

          //// This is the first way to renderItem
          // renderItem={(props) =>
          //   renderListItemForFlatList(pastGuesses.length, props)
          // }

          //// This is the Second way to renderItem
          renderItem={renderListItemForFlatList.bind(this, pastGuesses.length)}
          contentContainerStyle={styles.list}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 10,
    alignItems: "center",
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 20,
    marginHorizontal: 30,
    width: 400,
    maxWidth: "90%",
  },
  list: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  listContainer: {
    width: "80%",
    flex: 1,
  },
  listItem: {
    color: "#ccc",
    borderWidth: 1,
    padding: 15,
    marginVertical: 10,
    backgroundColor: "white",
    flexDirection: "row",
    // alignSelf: "center",
    width: "60%",
    justifyContent: "space-around",
  },
});

export default GameScreen;
