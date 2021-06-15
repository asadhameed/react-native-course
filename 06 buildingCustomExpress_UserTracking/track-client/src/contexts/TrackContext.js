import createDataContext from "./createDataContext";
import TrackAPI from "../api/TrackAPI";

const trackReducer = (state, action) => {
  switch (action.type) {
    case "create_track":
      console.log(action.payload.name);
      return { ...state };
    default:
      return state;
  }
};

const fetchTracks = (dispatch) => () => {};
const createTrack = (dispatch) => async (name, locations) => {
  await TrackAPI.post("/tracks", { name, locations });

  dispatch({ type: "create_track", payload: { name, locations } });
};

export const { Context, Provider } = createDataContext(
  trackReducer,
  { fetchTracks, createTrack },
  []
);
