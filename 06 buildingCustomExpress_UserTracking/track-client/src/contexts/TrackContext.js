import createDataContext from "./createDataContext";
import TrackAPI from "../api/TrackAPI";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "create_track":
      return { ...state };
    case "show_track":
      return { ...state, tracks: action.payload, errorMessage: "" };
    case "error_message":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => async () => {
  try {
    const response = await TrackAPI.get("tracks");
    dispatch({ type: "show_track", payload: response.data });
  } catch (error) {
    dispatch({
      type: "error_message",
      payload: "Something wrong to Fetch Tracks",
    });
  }
};
const createTrack = (dispatch) => async (name, locations) => {
  await TrackAPI.post("/tracks", { name, locations });
  dispatch({ type: "create_track", payload: { name, locations } });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  { tracks: [], errorMessage: "" }
);
