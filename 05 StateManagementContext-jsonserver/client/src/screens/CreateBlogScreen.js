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
