import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Button,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

import BodyText from "../components/BodyText";
import TitleText from "../components/TitleText";
import Colors from "../constants/colors";
import MainButton from "../components/MainButton";

import Card from "../components/Card";
const GameOverScreen = (props) => {
  return (
    <ScrollView>
      <Card style={styles.screen}>
        <TitleText>The game is over</TitleText>
        <View style={styles.imageContainer}>
          <Image
            source={require("../assets/success.png")}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.resultContainer}>
          {/* <Text>
          {Dimensions.get("window").height +
            " " +
            Dimensions.get("window").width}
        </Text> */}
          <BodyText style={styles.resultText}>
            {" "}
            your phone needed{" "}
            <Text style={styles.highlight}>{props.gameRound}</Text> to guess a
            number <Text style={styles.highlight}> {props.userNumber}</Text>
          </BodyText>
        </View>

        <MainButton onPress={props.restartGame}>New Game</MainButton>
      </Card>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    width: "90%",
    height: "80%",
  },
  imageContainer: {
    //borderRadius: 150,
    borderRadius: (Dimensions.get("window").width * 0.7) / 2,
    borderWidth: 2,
    borderColor: "black",
    // width: 300,
    //height: 300,
    width: Dimensions.get("window").width * 0.7,
    height: Dimensions.get("window").width * 0.7,
    overflow: "hidden",
    // marginVertical: 30,
    marginVertical: Dimensions.get("window").height / 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  resultContainer: {
    marginHorizontal: 30,
    //marginVertical: 15,
    marginVertical: Dimensions.get("window").height / 60,
    // marginVertical: Dimensions.get("window").height > 600 ? 15 : 5,
  },
  resultText: {
    textAlign: "center",
    //  fontSize: 10,
    fontSize: Dimensions.get("window").height < 500 ? 12 : 18,
  },
  highlight: {
    color: Colors.primary,
    fontFamily: "open-sans-bold",
  },
});

export default GameOverScreen;
