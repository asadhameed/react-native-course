import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import MapView, { Polyline } from "react-native-maps";
import { Context as TrackContext } from "../contexts/TrackContext";

const TrackDetailScreen = ({ route }) => {
  const { id } = route.params;
  const {
    state: { tracks },
  } = useContext(TrackContext);

  const track = tracks.find((track) => track._id === id);
  const initialCoords = track.locations[0].coords;
  return (
    <View>
      <Text style={{ alignSelf: "center", fontSize: 24 }}>
        {track.name ? track.name : ""}
      </Text>
      <MapView
        style={styles.mapStyle}
        initialRegion={{
          longitudeDelta: 0.01,
          latitudeDelta: 0.01,
          ...initialCoords,
        }}
      >
        <Polyline coordinates={track.locations.map((loc) => loc.coords)} />
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  mapStyle: {
    borderWidth: 1,
    borderColor: "black",
    height: 300,
    margin: 20,
  },
});

export default TrackDetailScreen;
