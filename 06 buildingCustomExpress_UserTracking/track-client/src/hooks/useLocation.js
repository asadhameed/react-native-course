import { useState, useEffect } from "react";

import {
  watchPositionAsync,
  requestForegroundPermissionsAsync,
  Accuracy,
} from "expo-location";

export default (shouldTrack, callBack) => {
  const [permissionInfo, setPermissionInfo] = useState(null);

  useEffect(() => {
    let subscription;
    const startWatchingLocation = async () => {
      const request = await requestForegroundPermissionsAsync();
      const { status, canAskAgain } = request;
      if (status === "denied") {
        return !canAskAgain
          ? setPermissionInfo("Please Enable Location Service")
          : setPermissionInfo("User Denied Location Permission");
      }
      setPermissionInfo(null);

      try {
        // console.log(subscription);
        subscription = await watchPositionAsync(
          {
            accuracy: Accuracy.BestForNavigation,
            timeInterval: 1000,
            distanceInterval: 10,
          },
          callBack
        );
      } catch (error) {
        console.log(error);
      }
    };

    if (shouldTrack) {
      startWatchingLocation();
      // console.log("----------------------------Start----->>.>>");
    } else {
      //console.log("----------------------------Stop----->>.>>");
      if (subscription) subscription.remove();
      subscription = null;
    }
    return () => {
      if (subscription) subscription.remove();
    };
  }, [shouldTrack, callBack]);

  return [permissionInfo];
};
