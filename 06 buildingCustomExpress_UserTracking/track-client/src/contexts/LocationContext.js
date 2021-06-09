import createDataContext from "./createDataContext";

const locationReducer = (state, action) => {
  switch (action.type) {
    case "start_stop_recording":
      return { ...state, isRecording: action.payload };
    case "add_location":
      return { ...state, currentLocation: action.payload };
    case "saveTrack":
      return { ...state, locations: [...state.locations, action.payload] };
    default:
      return state;
  }
};

const startRecording = (dispatch) => () => {
  dispatch({ type: "start_stop_recording", payload: true });
};
const stopRecording = (dispatch) => () => {
  dispatch({ type: "start_stop_recording", payload: false });
};
const addLocation = (dispatch) => (location) => {
  dispatch({ type: "add_location", payload: location });
};
const saveTrack = (dispatch) => (coordinate) => {
  dispatch({ type: "saveTrack", payload: coordinate });
};
export const { Context, Provider } = createDataContext(
  locationReducer,
  { startRecording, stopRecording, addLocation, saveTrack },
  { isRecording: false, locations: [], currentLocation: null }
);
