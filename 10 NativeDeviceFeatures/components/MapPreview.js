import React, { useEffect } from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";
import MapView, { Circle, Marker } from "react-native-maps";

import Colors from "../constants/Colors";

const MapPreview = (props) => {
  const initialRegion = {
    latitude: props.location.latitude,
    longitude: props.location.longitude,
    latitudeDelta: 0.001,
    longitudeDelta: 0.001,
  };

  return (
    // <TouchableOpacity style={styles.map} onPress={props.onPress}>
    <MapView
      style={styles.map}
      initialRegion={initialRegion}
      region={initialRegion}
    >
      {/* <Circle
        center={{
          latitude: props.location.lat,
          longitude: props.location.lng,
        }}
        radius={10}
        strokeColor={Colors.primaryRGB}
        fillColor={Colors.primaryRGBA}
      /> */}

      {/*************************************************************
       *  If MapView has region props then the following comments
       *  code is not working.
       *   To solve the problem:- In A Marker component the coordinate props
       *   will have same  coordinate like MapView component have the regions
       *
       *    solution :- coordinate={{ ...initialRegion }}
       **********************************************************/}

      {/* <Marker
        coordinate={{
          latitude: props.location.longitude,
          longitude: props.location.longitude,
        }}
        pinColor={Colors.primary}
      ></Marker> */}
      <Marker coordinate={{ ...initialRegion }} pinColor={Colors.primary}>
        {/* <View style={{ backgroundColor: "red", padding: 10 }}>
          <Text>SF</Text>
        </View> */}
      </Marker>
    </MapView>
    // </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapPreview;
