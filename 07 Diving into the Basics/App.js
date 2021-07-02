import React, { useState } from "react";
import { StyleSheet, View, FlatList, Button } from "react-native";
import GoalInput from "./components/GoalInput";
import GoalItem from "./components/GoalItem";

export default function App() {
  const [goals, setGaol] = useState([]);
  const [isAddMode, setAddMode] = useState(false);
  const onPressHandler = (goal) => {
    if (goal) {
      setGaol((preGoal) => [
        ...preGoal,
        { id: Math.random().toString(), value: goal },
      ]);
      setAddMode(false);
    }
  };
  const onDeleteHandler = (id) => {
    console.log(id);
    const filter = goals.filter((goal) => goal.id !== id);
    console.log(filter);
    setGaol(filter);
  };
  return (
    <View style={styles.screen}>
      <Button title="Add goal" onPress={() => setAddMode(true)} />
      <GoalInput
        onShowMode={isAddMode}
        onPressSubmit={onPressHandler}
        onCancel={() => setAddMode(false)}
      />
      <FlatList
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        data={goals}
        renderItem={({ item }) => (
          <GoalItem item={item} onPress={onDeleteHandler} />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: { padding: 100 },
});
