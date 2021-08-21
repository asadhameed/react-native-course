/*************************************************************
 * The comments section is belong for Redux system
 * I use Context system from React
 *************************************************************/

import React, { useState, useContext, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
  Alert,
} from "react-native";

//import { useDispatch } from "react-redux";

//import * as placeAction from "../store/places-actions";
import { Context as PlaceContext } from "../contexts/PlaceContext";
import Colors from "../constants/Colors";
import ImagePicker from "../components/ImgPicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedUserLocation, setSelectedUserLocation] = useState();
  //const dispatch = useDispatch();
  const { addPlace } = useContext(PlaceContext);

  const savePlaceHandler = () => {
    //  dispatch(placeAction.addPlace(title));

    addPlace(title, selectedImage)
      .then(() => props.navigation.goBack())
      .catch((err) => {
        //Alert.alert("Place isn't save ", err.toString());
        Alert.alert("Place isn't save ", "Please try again later");
      });
  };

  useEffect(() => {
    const { location } = props.route.params ? props.route.params : "undefined";
    setSelectedUserLocation(location);
  }, [props.route.params]);

  return (
    <ScrollView>
      <View style={styles.form}>
        <Text style={styles.title}>Title</Text>
        <TextInput
          style={styles.textInput}
          value={title}
          onChangeText={setTitle}
        />
        <ImagePicker
          onImageTaken={(imagePath) => setSelectedImage(imagePath)}
        />
        <LocationPicker
          navigation={props.navigation}
          location={selectedUserLocation}
        />
        <Button
          title="save"
          color={Colors.primary}
          onPress={savePlaceHandler}
        />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  form: {
    marginVertical: 10,
    marginHorizontal: 30,
    flex: 1,
    alignContent: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 10,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
