import React, { useContext, useEffect } from "react";
import { Context as AuthContext } from "../contexts/AuthContext";

const ResolveAuthScreen = ({ navigation }) => {
  const { tryLocalSignin } = useContext(AuthContext);
  useEffect(() => {
    const navigateToSignIn = () => {
      navigation.navigate("signIn");
    };
    tryLocalSignin(navigateToSignIn);
  }, [navigation]);

  return null;
};

export default ResolveAuthScreen;
