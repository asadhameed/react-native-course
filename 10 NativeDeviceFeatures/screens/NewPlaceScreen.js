/*************************************************************
 * The comments section is belong for Redux system
 * I use Context system from React
 *************************************************************/

import React, { useState, useContext } from "react";
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Button,
  ScrollView,
} from "react-native";

//import { useDispatch } from "react-redux";

//import * as placeAction from "../store/places-actions";
import { Context as PlaceContext } from "../contexts/PlaceContext";
import Colors from "../constants/Colors";
import ImagePicker from "../components/ImgPicker";

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  //const dispatch = useDispatch();
  const { addPlace } = useContext(PlaceContext);

  const savePlaceHandler = () => {
    //  dispatch(placeAction.addPlace(title));
    addPlace(title, selectedImage);

    props.navigation.goBack();
  };
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
    margin: 30,
    flex: 1,
    alignContent: "center",
  },
  title: {
    fontSize: 18,
    marginBottom: 15,
  },
  textInput: {
    borderBottomColor: "#ccc",
    borderBottomWidth: 1,
    marginBottom: 15,
    paddingVertical: 5,
    paddingHorizontal: 2,
  },
});

export default NewPlaceScreen;
