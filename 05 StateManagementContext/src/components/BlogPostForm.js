import React, { useState } from "react";
import { Text, Button, View, StyleSheet, TextInput } from "react-native";

const BlogPostForm = ({ label, onSubmit, initialValues }) => {
  const [blogTitle, setBlogTitle] = useState(initialValues.title);
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>{label}</Text>
      <TextInput
        style={styles.inputStyle}
        value={blogTitle}
        onChangeText={setBlogTitle}
      />
      <Button title="Save Post" onPress={() => onSubmit(blogTitle)} />
    </View>
  );
};
BlogPostForm.defaultProps = {
  initialValues: {
    title: "",
  },
};
const styles = StyleSheet.create({
  viewStyle: {
    height: 400,
    justifyContent: "center",

    margin: 40,
  },
  inputStyle: {
    borderWidth: 3,
    height: 40,
    borderColor: "black",
    paddingLeft: 5,
    marginBottom: 30,
  },
  textStyle: {
    fontSize: 20,
  },
});

export default BlogPostForm;
