import React, { useState, useEffect } from "react";
import { View, Text, Image, StyleSheet, Button, Alert } from "react-native";
import * as ImagePicker from "expo-image-picker";

import Colors from "../constants/Colors";

const ImgPicker = (props) => {
  const [image, setImage] = useState(null);

  const verifyPermission = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();

    if (status !== "granted") {
      Alert.alert(
        "Insufficient Permission! ",
        "You need to grant camera Permission to access this app"
      );
      return false;
    } else return true;
  };

  const packImage = async () => {
    let result = await ImagePicker.launchCameraAsync({
      // mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result.uri);
      props.onImageTaken(result.uri);
    }
  };
  const imagePickerHandler = async () => {
    if (await verifyPermission()) packImage();
    else console.log("Sorry");
  };
  return (
    <View style={styles.imagePicker}>
      <View style={styles.imagePreview}>
        {!image ? (
          <Text>No image picket yet!</Text>
        ) : (
          <Image style={styles.image} source={{ uri: image }} />
        )}
      </View>
      <Button
        title="Take Image"
        onPress={imagePickerHandler}
        color={Colors.primary}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  imagePicker: {
    alignItems: "center",
    marginTop: 20,
    marginBottom: 10,
  },
  imagePreview: {
    width: "100%",
    height: 200,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ccc",
    borderWidth: 1,
  },
  image: {
    width: "100%",
    height: "100%",
    flex: 1,
    resizeMode: "cover",
  },
});

export default ImgPicker;
