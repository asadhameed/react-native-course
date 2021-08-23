/***************************************************************************
 * The following code is without  MapContext
 * Now I changed to context system that all components can access location
 * without sending params to other screen or components
 ***************************************************************************/

// /*************************************************************
//  * The comments section is belong for Redux system
//  * I use Context system from React
//  *************************************************************/

// import React, { useState, useContext, useEffect } from "react";
// import {
//   View,
//   Text,
//   StyleSheet,
//   TextInput,
//   Button,
//   ScrollView,
//   Alert,
// } from "react-native";

// //import { useDispatch } from "react-redux";

// //import * as placeAction from "../store/places-actions";
// import { Context as PlaceContext } from "../contexts/PlaceContext";
// import Colors from "../constants/Colors";
// import ImagePicker from "../components/ImgPicker";
// import LocationPicker from "../components/LocationPicker";

// const NewPlaceScreen = (props) => {
//   const [title, setTitle] = useState();
//   const [selectedImage, setSelectedImage] = useState(null);
//   const [selectedUserLocation, setSelectedUserLocation] = useState();
//   //const dispatch = useDispatch();
//   const { addPlace } = useContext(PlaceContext);

//   const savePlaceHandler = () => {
//     //  dispatch(placeAction.addPlace(title));

//     addPlace(title, selectedImage, selectedUserLocation)
//       .then(() => props.navigation.goBack())
//       .catch((err) => {
//         //Alert.alert("Place isn't save ", err.toString());
//         console.log("------->NewPlaceScreen ----->err", err);
//         Alert.alert("Place isn't save ", "Please try again later");
//       });
//   };

//   useEffect(() => {
//     const { location } = props.route.params ? props.route.params : "undefined";
//     setSelectedUserLocation(location);
//   }, [props.route.params]);

//   return (
//     <ScrollView>
//       <View style={styles.form}>
//         <Text style={styles.title}>Title</Text>
//         <TextInput
//           style={styles.textInput}
//           value={title}
//           onChangeText={setTitle}
//         />
//         <ImagePicker
//           onImageTaken={(imagePath) => setSelectedImage(imagePath)}
//         />
//         <LocationPicker
//           navigation={props.navigation}
//           onSelectedLocation={(location) => setSelectedUserLocation(location)}
//           location={selectedUserLocation}
//         />
//         <Button
//           title="save"
//           color={Colors.primary}
//           onPress={savePlaceHandler}
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   form: {
//     marginVertical: 10,
//     marginHorizontal: 30,
//     flex: 1,
//     alignContent: "center",
//   },
//   title: {
//     fontSize: 18,
//     marginBottom: 10,
//   },
//   textInput: {
//     borderBottomColor: "#ccc",
//     borderBottomWidth: 1,
//     marginBottom: 10,
//     paddingVertical: 5,
//     paddingHorizontal: 2,
//   },
// });

// export default NewPlaceScreen;

/************************************************************************************
 *  After MapContext didn't need the following function, variable or code
 *  1.  [selectedUserLocation, setSelectedUserLocation] = useState();
 *      Now location will extract form MapContext system
 *  2. LocationPicker Component don't this props onSelectedLocation={(location) => setSelectedUserLocation(location)}
 *      Because NewPlaceScreen will take location directly from MapContext
 *  3. useEffect function extract location from props.route.param don't need
 *      Because use of MapContext System all the components will context system
 ********************************************************************************/

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

import { Context as PlaceContext } from "../contexts/PlaceContext";
import { MapContext } from "../contexts/MapContext";
import Colors from "../constants/Colors";
import ImagePicker from "../components/ImgPicker";
import LocationPicker from "../components/LocationPicker";

const NewPlaceScreen = (props) => {
  const [title, setTitle] = useState();
  const [selectedImage, setSelectedImage] = useState(null);
  //const [selectedUserLocation, setSelectedUserLocation] = useState();

  const { addPlace } = useContext(PlaceContext);
  const {
    state: { location },
  } = useContext(MapContext);

  const isValidateData = () => {
    if (!title) {
      Alert.alert("Please, Enter title of the place");
      return false;
    }
    if (!selectedImage) {
      Alert.alert("Please, Select a image of the place");
      return false;
    }
    if (!location) {
      Alert.alert("Please, Select Location of the place");
      return false;
    }

    return true;
  };
  const savePlaceHandler = () => {
    if (isValidateData())
      addPlace(title, selectedImage, location)
        .then(() => props.navigation.goBack())
        .catch((err) => {
          console.log("------->NewPlaceScreen ----->err", err);
          Alert.alert("Place isn't save ", "Please try again later");
        });
  };

  // useEffect(() => {
  //   const { location } = props.route.params ? props.route.params : "undefined";
  //   setSelectedUserLocation(location);
  // }, [props.route.params]);

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
        {/* <LocationPicker navigation={props.navigation} location={location} onSelectedLocation={(location) => setSelectedUserLocation(location)} /> */}
        <LocationPicker navigation={props.navigation} location={location} />
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
