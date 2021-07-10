import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import * as Fonts from "expo-font";
import AppLoading from "expo-app-loading";

import Header from "./components/Header";
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";

const fetchFont = async () => {
  await Fonts.loadAsync({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
};

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameRound, setGameRound] = useState(0);
  const [dataLoading, setDataLoading] = useState(false);
  if (!dataLoading) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onFinish={() => setDataLoading(true)}
        onError={() => console.log("Something is wrong")}
      />
    );
  }
  const startGameHandler = (number) => {
    setUserNumber(number);
  };
  const gameOverHandler = (count) => {
    setGameRound(count);
  };

  const onRestartGameHandler = () => {
    setGameRound(0);
    setUserNumber(null);
  };

  let content = <StartGameScreen onStartGame={startGameHandler} />;
  if (userNumber && gameRound <= 0)
    content = (
      <GameScreen
        userChoice={userNumber}
        onGameOver={gameOverHandler}
        onRestGame={onRestartGameHandler}
      />
    );
  else if (gameRound > 0)
    content = (
      <GameOverScreen
        gameRound={gameRound}
        userNumber={userNumber}
        restartGame={onRestartGameHandler}
      />
    );
  console.log("🚀 ~ file: App.js ~ line 28 ~ App ~ gameRound", gameRound);

  return (
    <View style={styles.container}>
      <Header title="Guess A Number" />
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
