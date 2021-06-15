import React, { useContext } from "react";
import { View } from "react-native";
import { Button, Input } from "react-native-elements";
import Spacer from "./Spacer";

import { Context as LocationContext } from "../contexts/LocationContext";

const TrackFromComponent = () => {
  const { state, stopRecording, startRecording, changeName } =
    useContext(LocationContext);
  console.log(state.locations.length);
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
    </View>
  );
};

export default TrackFromComponent;
