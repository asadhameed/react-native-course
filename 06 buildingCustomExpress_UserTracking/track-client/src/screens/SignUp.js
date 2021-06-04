import React, { useContext, useEffect } from "react";
import SignComponent from "../components/AuthFormComponent";
import { Context as AuthContext } from "../contexts/AuthContext";
const SignUp = ({ navigation }) => {
  const { state, signUp, clearErrorMessage } = useContext(AuthContext);
  useEffect(() => {
    const clearMessage = navigation.addListener("focus", () => {
      clearErrorMessage();
    });
    return clearMessage;
  }, [navigation]);

  const properties = {
    headerText: "Sign Up for Tracker",
    submitButtonText: "Sign Up",
    firstInfo: "Already have an account?",
    secondInfo: "Sign in instead",
  };
  const onChangeToSignIn = () => {
    navigation.navigate("signIn");
  };

  return (
    <SignComponent
      properties={properties}
      onChangeToSign={onChangeToSignIn}
      onPressHandler={signUp}
      errorMessage={state.errorMessage}
    />
  );
};

export default SignUp;
