import * as Location from "expo-location";

const tenMetersWithDegrees = 0.0001;

const getLocation = (increment) => {
  return {
    timesStamp: 100000,
    coords: {
      accuracy: 5,
      altitudeAccuracy: 5,
      altitude: 5,
      heading: 0,
      latitude: 34.0280614 + increment * tenMetersWithDegrees,
      longitude: 71.6304797 + increment * tenMetersWithDegrees,
      speed: 0,
    },
  };
};

let counter = 0;
// you can't find this in the expo documentation
setInterval(() => {
  Location.EventEmitter.emit("Expo.locationChanged", {
    watchId: Location._getCurrentWatchId(),
    location: getLocation(counter),
  });
  counter++;
}, 1000);
