import createDataContext from "./createDataContext";
import TrackAPI from "../api/TrackAPI";
import AsyncStorage from "@react-native-async-storage/async-storage";
const authReducer = (state, action) => {
  switch (action.type) {
    case "signin":
      return { errorMessage: "", token: action.payload };
    case "error_message":
      return { ...state, errorMessage: action.payload };
    case "signout":
      return { errorMessage: "", token: null };
    default:
      return state;
  }
};
const tryLocalSignin = (dispatch) => async (callBack) => {
  const token = await AsyncStorage.getItem("token");
  callBack();
  if (token) {
    dispatch({ type: "signin", payload: token });
  }
};
const clearErrorMessage = (dispatch) => () =>
  dispatch({ type: "error_message", payload: "" });

const signUp =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await TrackAPI.post("/signup", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (error) {
      dispatch({
        type: "error_message",
        payload: "Something wrong with Sign Up",
      });
    }
  };

const signIn =
  (dispatch) =>
  async ({ email, password }) => {
    try {
      const response = await TrackAPI.post("/signin", { email, password });
      await AsyncStorage.setItem("token", response.data.token);
      dispatch({ type: "signin", payload: response.data.token });
    } catch (error) {
      dispatch({
        type: "error_message",
        payload: "Something wrong with Sign In",
      });
    }
  };

const signOut = (dispatch) => async () => {
  try {
    await AsyncStorage.removeItem("token");

    dispatch({ type: "signout" });
  } catch (error) {
    dispatch({
      type: "error_message",
      payload: "Something wrong with Sign Out",
    });
  }
};

export const { Provider, Context } = createDataContext(
  authReducer,
  { signIn, signUp, signOut, clearErrorMessage, tryLocalSignin },
  { token: null, errorMessage: "" }
);
