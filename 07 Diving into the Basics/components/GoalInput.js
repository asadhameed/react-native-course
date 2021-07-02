import React, { useState } from "react";
import { View, TextInput, StyleSheet, Button, Modal } from "react-native";

const GoalInput = ({ onPressSubmit, onShowMode, onCancel }) => {
  const [goalName, setGoalName] = useState();
  return (
    <Modal visible={onShowMode} animationType="slide">
      <View style={styles.inputsContainer}>
        <TextInput
          style={styles.input}
          value={goalName}
          onChangeText={setGoalName}
          placeholder="Add a goal"
        />

        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <Button title="Add" onPress={onPressSubmit.bind(this, goalName)} />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" color="red" onPress={onCancel} />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputsContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    borderColor: "black",
    width: "80%",
    borderWidth: 2,
    padding: 10,
    margin: 15,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "50%",
  },
  button: {
    width: "40%",
  },
});

export default GoalInput;
