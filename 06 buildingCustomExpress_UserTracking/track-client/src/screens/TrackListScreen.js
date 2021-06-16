import React, { useContext, useEffect } from "react";
import { StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { ListItem } from "react-native-elements";
import { Context as TrackContext } from "../contexts/TrackContext";
const TrackListScreen = ({ navigation }) => {
  const { state, fetchTracks } = useContext(TrackContext);
  // useEffect(() => {
  //   fetchTracks();
  // }, []);
  //

  useEffect(() => {
    const subScribe = navigation.addListener("focus", fetchTracks);
    return subScribe;
  }, [navigation]);

  return (
    <FlatList
      data={state.tracks}
      keyExtractor={(track) => track._id}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("trackDetailScreen", { id: item._id })
            }
          >
            <ListItem bottomDivider>
              <ListItem.Content>
                <ListItem.Title>{item.name}</ListItem.Title>
              </ListItem.Content>
              <ListItem.Chevron />
            </ListItem>
          </TouchableOpacity>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default TrackListScreen;
