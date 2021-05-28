// import React, { useContext, useState } from "react";
// import { View, Text, StyleSheet, Button, TextInput } from "react-native";
// import { Context } from "../context/BlogContext";
// const CreateBlogScreen = ({ navigation }) => {
//   const context = useContext(Context);
//   const [blogText, setBlogTest] = useState("");

//   const saveBlog = () => {
//     context.addPost(blogText, () => {
//       navigation.navigate("indexSearch");
//     });
//   };
//   return (
//     <View style={styles.viewStyle}>
//       <Text style={styles.textStyle}>Post Title:</Text>
//       <TextInput
//         style={styles.inputStyle}
//         value={blogText}
//         onChangeText={setBlogTest}
//       />
//       <Button title="Save" onPress={() => saveBlog()} />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     height: 400,
//     justifyContent: "center",

//     margin: 40,
//   },
//   inputStyle: {
//     borderWidth: 3,
//     height: 40,
//     borderColor: "black",
//     paddingLeft: 5,
//     marginBottom: 30,
//   },
//   textStyle: {
//     fontSize: 20,
//   },
// });

// export default CreateBlogScreen;

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";
const CreateBlogScreen = ({ navigation }) => {
  const context = useContext(Context);

  return (
    <BlogPostForm
      label="Enter Post Title:"
      onSubmit={(title) => {
        context.addBlogPost(title, () => {
          navigation.navigate("indexScreen");
        });
      }}
    />
  );
};

const styles = StyleSheet.create({});

export default CreateBlogScreen;
