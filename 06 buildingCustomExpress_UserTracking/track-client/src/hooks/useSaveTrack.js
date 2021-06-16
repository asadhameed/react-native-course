import { useContext } from "react";
import { Context as TrackContext } from "../contexts/TrackContext";
import { Context as LocationContext } from "../contexts/LocationContext";

export default () => {
  const { createTrack } = useContext(TrackContext);
  const {
    state: { name, locations },
    reset,
  } = useContext(LocationContext);

  const saveTrack = async (callback) => {
    await createTrack(name, locations);
    reset();
    callback();
  };

  return [saveTrack];
};
