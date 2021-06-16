import React, { useContext } from "react";
import { View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

import { Context as LocationContext } from "../contexts/LocationContext";
import useSaveTrack from "../hooks/useSaveTrack";
const TrackFromComponent = () => {
  const { state, stopRecording, startRecording, changeName } =
    useContext(LocationContext);
  const [saveTrack] = useSaveTrack();
  const navigation = useNavigation();
  const navigationChange = () => {
    navigation.navigate("Tracks");
  };
  const onPressHandler = () => {
    return state.isRecording ? stopRecording() : startRecording();
  };
  return (
    <View>
      <Spacer>
        <Input
          style={{ borderWidth: 1 }}
          placeholder="Enter a track name"
          value={state.name}
          onChangeText={changeName}
        />
        <Button
          title={state.isRecording ? "Stop" : "Start Recording"}
          onPress={onPressHandler}
        ></Button>
      </Spacer>
      <Spacer>
        {!state.isRecording && state.locations.length ? (
          <Button
            title="Save A track"
            onPress={() => saveTrack(navigationChange)}
          />
        ) : null}
      </Spacer>
    </View>
  );
};

export default TrackFromComponent;
