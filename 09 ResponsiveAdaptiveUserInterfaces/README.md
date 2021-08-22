# Diving into the Basics

This is the same project of "08 Components_Styling". This exercise helps to understand the caoncept of Responsive & Adaptive User Interfaces and how the Apps will look on small device as well. \
You can use the "orientation": "portrait" in app.json file \
Expo Screen orientation is also nice api.

## A New concept or new code style

1. The orientation properties have three value "portrait", "landscape" and "default" (app.json)
2. KeyboardAvoidingView is the important component (startGameScreen.js)
   1. KeyboardAvoidView has a property behavior (height, position, padding)
   2. Apple device gives the better result on position value
   3. Android device gives the better result on padding value
3. If you are using the ScreenOrientation.lockAsync so the screen will not change the orientation and the screen will locked (GameScreen.js)
   1. If you use the ScreenOrientation.lockAsync so this will lock other screen as well. If you want that the other screen should have default orientation then you should use ScreenOrientation.unlockAsync(ScreenOrientation.OrientationLock.DEFAULT) (StartGameScreen.js)
4. Listening to Orientation Changes: The component style is assign when the component render but after change the Orientation the component is not render, so the component have the same value. To change the style we need useState and updateLayout function (StartGameScreen.js)
   1. Dimensions.addEventListener("change", updateLayout) when the Orientation change the new addEventListener add it. Better approach to use useEffect .
5. you can use Dimensions properties from react-native (StartGameScreen.js)
6. Change the margin value some decision base e.x marginTop: Dimensions.get("window").height > 600 ? 20 : 5 (GameScreen.js)
7. Use the different styles e.x <Component style ={{ Dimensions.get("window").height > 600 : style1 : style2}}> (GameScreen.js)
8. Use to return different view e.x if(Dimensions.get("window").height > 600) {return <View>1<View>} else {return <View>2<View>}
9. You can use Platform API from ReactNative (Header.js)
10. TouchableOpacity and TouchableNativeFeedback (MainButton.js)
11. Using Platform-specific Code Files:-> you can make such files MainButton.ios.js MainButton.android.js and react native will automatically load on base of the user platform
12. Using the SafeAreaView API react native

## Main Scripts

### 1 `expo install expo-app-loading`

expo-app-loading tells expo-splash-screen to keep the splash screen visible while the AppLoading component is mounted.
This is useful to download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience.

More help [Expo App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)

### 2 `expo install expo-screen-orientation`

Screen Orientation is defined as the orientation in which graphics are painted on the device. For example, the figure below has a device in a vertical and horizontal physical orientation, but a portrait screen orientation. For physical device orientation, see the orientation section of Device Motion.

More help [ Expo Screen Orientation](https://docs.expo.dev/versions/latest/sdk/screen-orientation/)

### `npm start`

Runs the app in the development mode.<br />
