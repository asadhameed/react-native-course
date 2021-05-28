// import React, { useState, useContext } from "react";
// import { Text, Button, View, StyleSheet, TextInput } from "react-native";
// import { Context } from "../context/BlogContext";

// const EditBlogScreen = ({ navigation, route }) => {
//   const [newTitle, setNewTitle] = useState("");
//   const context = useContext(Context);
//   const { id } = route.params;
//   return (
//     <View style={styles.viewStyle}>
//       <Text>Enter New Title {id}</Text>
//       <TextInput
//         value={newTitle}
//         onChangeText={setNewTitle}
//         style={{
//           borderWidth: 3,
//           borderColor: "black",
//           margin: 40,
//           paddingLeft: 5,
//         }}
//       />
//       <Button
//         title="Save"
//         onPress={() => {
//           context.editPost(id, newTitle);
//           navigation.navigate("indexSearch");
//         }}
//       />
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   viewStyle: {
//     height: 400,
//     justifyContent: "center",
//     alignContent: "space-between",
//   },
// });

// export default EditBlogScreen;

import React, { useContext } from "react";
import { StyleSheet } from "react-native";
import { Context } from "../context/BlogContext";
import BlogPostForm from "../components/BlogPostForm";

const EditBlogScreen = ({ navigation, route }) => {
  const { state, editBlogPost } = useContext(Context);
  const { id } = route.params;
  const blogPost = state.find((blog) => blog.id === id);
  const onSubmitEditBlog = (title) => {
    editBlogPost(id, title, () => {
      navigation.pop();
    });
  };

  return (
    <BlogPostForm
      label="Enter New Title:"
      initialValues={{ title: blogPost.title, id: blogPost.id }}
      onSubmit={onSubmitEditBlog}
    />
  );
};

const styles = StyleSheet.create({});

export default EditBlogScreen;
