import React, { useContext, useEffect } from "react";

import SignComponent from "../components/AuthFormComponent";
import { Context as AuthContext } from "../contexts/AuthContext";

const SignIn = ({ navigation }) => {
  const { signIn, state, clearErrorMessage } = useContext(AuthContext);
  useEffect(() => {
    const clearMessage = navigation.addListener("focus", () => {
      clearErrorMessage();
    });
    return clearMessage;
  }, [navigation]);

  const properties = {
    headerText: "Sign In for Tracker",
    submitButtonText: "Sign In",
    firstInfo: "Don't have an account",
    secondInfo: "Go back to sign up",
  };
  const onChangToSignUP = () => {
    navigation.navigate("signUp");
  };

  return (
    <>
      <SignComponent
        properties={properties}
        onChangeToSign={onChangToSignUP}
        onPressHandler={signIn}
        errorMessage={state.errorMessage}
      />
    </>
  );
};

export default SignIn;
