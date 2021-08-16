import React, { useState, useRef, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  ScrollView,
  Dimensions,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as ScreenOrientation from "expo-screen-orientation";

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
  console.log(Dimensions.get("window").height);
  // ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);

  const initGuess = generateRandomBetween(1, 100, props.userChoice);
  const [currentGuess, setCurrentGuess] = useState(initGuess);
  // const [gameRound, setGameRound] = useState(0);
  const [pastGuesses, setPastGuesses] = useState([initGuess.toString()]);
  const [availableDeviceWidth, setAvailableDeviceWidth] = useState(
    Dimensions.get("window").width
  );
  const [isLandscape, setLandScape] = useState(
    Dimensions.get("window").height < 420 ? true : false
  );
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

  const renderListItemForFlatList = (listLength, itemData) => {
    return (
      <View style={styles.listItem}>
        <BodyText>#{listLength - itemData.index}</BodyText>
        <BodyText>{itemData.item}</BodyText>
      </View>
    );
  };

  /***********************************************
   *
   * You can define a variable for style
   * And Assign style on base on mobile Screen
   *
   ******************************************/

  let listContainerStyle = styles.listContainer;
  // if (Dimensions.get("window").width < 350)
  if (availableDeviceWidth < 350) listContainerStyle = styles.listContainerBig;

  // const renderLandScapeScreen = () => {
  //   return (
  //     <View style={styles.screen}>
  //       <Text style={DefaultStyles.bodyText}>Opponent's Guess Number</Text>
  //       <View style={{ flexDirection: "row" }}>
  //         <Card style={styles.buttonContainer}>
  //           <MainButton
  //             style={{ backgroundColor: Colors.secondary }}
  //             onPress={nextGuessHandler.bind(this, "lower")}
  //             disabled={currentGuess === props.userChoice}
  //           >
  //             <Ionicons name="md-remove" size={24} color="white" />
  //           </MainButton>
  //           <NumberContainer>{currentGuess}</NumberContainer>
  //           <MainButton
  //             disabled={currentGuess === props.userChoice}
  //             onPress={nextGuessHandler.bind(this, "greater")}
  //           >
  //             <Ionicons name="md-add" size={24} color="white" />
  //           </MainButton>
  //         </Card>
  //         <Card
  //           style={{
  //             marginHorizontal: Dimensions.get("window").width > 600 ? 30 : 5,
  //           }}
  //         >
  //           <MainButton onPress={props.onRestGame}>New Game</MainButton>
  //         </Card>
  //       </View>

  //       {/* <View style={styles.listContainer}> */}
  //       <View style={listContainerStyle}>
  //         <FlatList
  //           data={pastGuesses}
  //           keyExtractor={(guess) => guess}
  //           showsVerticalScrollIndicator={false}
  //           renderItem={renderListItemForFlatList.bind(
  //             this,
  //             pastGuesses.length
  //           )}
  //           contentContainerStyle={styles.list}
  //         />
  //       </View>
  //     </View>
  //   );
  // };

  // if (Dimensions.get("window").height < 500) {
  //   return renderLandScapeScreen();
  // } else

  useEffect(() => {
    const updateLandscape = () => {
      setAvailableDeviceWidth(Dimensions.get("window").width);
      if (Dimensions.get("window").height < 420) {
        setLandScape(true);
      } else {
        setLandScape(false);
      }
    };

    Dimensions.addEventListener("change", updateLandscape);
    return () => {
      Dimensions.removeEventListener("change", updateLandscape);
    };
  }, []);
  return (
    <View style={styles.screen}>
      <Text style={DefaultStyles.bodyText}>Opponent's Guess Number</Text>
      <View
        style={{
          alignItems: "center",
          flexDirection: isLandscape ? "row" : "column",
        }}
      >
        {!isLandscape && <NumberContainer>{currentGuess}</NumberContainer>}
        <Card style={styles.buttonContainer}>
          <MainButton
            style={{ backgroundColor: Colors.secondary }}
            onPress={nextGuessHandler.bind(this, "lower")}
            disabled={currentGuess === props.userChoice}
          >
            <Ionicons name="md-remove" size={24} color="white" />
          </MainButton>
          {isLandscape && <NumberContainer>{currentGuess}</NumberContainer>}
          <MainButton
            disabled={currentGuess === props.userChoice}
            onPress={nextGuessHandler.bind(this, "greater")}
          >
            <Ionicons name="md-add" size={24} color="white" />
          </MainButton>
        </Card>
        <Card
          style={{ marginTop: Dimensions.get("window").height > 600 ? 30 : 5 }}
        >
          <MainButton onPress={props.onRestGame}>New Game</MainButton>
        </Card>
      </View>

      {/* <View style={styles.listContainer}> */}
      <View style={listContainerStyle}>
        <FlatList
          data={pastGuesses}
          keyExtractor={(guess) => guess}
          showsVerticalScrollIndicator={false}
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
    padding: 5,
    alignItems: "center",
  },
  // buttonContainerLandScape: {
  //   flexDirection: "row",
  //   justifyContent: "space-around",
  //   alignItems: "center",
  // },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: Dimensions.get("window").height > 600 ? 30 : 2,
    marginHorizontal: 30,
    width: 400,
    alignItems: "center",
    maxWidth: "90%",
  },
  list: {
    alignItems: "center",
    justifyContent: "flex-end",
    flexGrow: 1,
  },
  // listContainer: {
  //   //   width: "80%",
  //   width: Dimensions.get("window").width > 500 ? "80%" : "85%",
  //   flex: 1,
  // },
  listContainer: {
    width: "60%",

    flex: 1,
  },

  listContainerBig: {
    width: "90%",

    flex: 1,
  },
  listItem: {
    color: "#ccc",
    borderWidth: 1,
    // padding: 15,
    padding: Dimensions.get("window").height > 600 ? 15 : 5,
    marginVertical: Dimensions.get("window").height > 600 ? 10 : 5,
    backgroundColor: "white",
    flexDirection: "row",
    // alignSelf: "center",
    width: "60%",
    justifyContent: "space-around",
  },
});

export default GameScreen;
