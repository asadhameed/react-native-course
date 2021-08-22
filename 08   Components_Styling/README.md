# Diving into the Basics

## A New concept or new code style

1. when You combines two style for components.
   1. style={{ ...styles.input, ...props.style }} e.g (Input.Js)
   2. style={[styles.input, {width:50}]}
2. When focus lose from input then hide keyboard, Can use TouchableWithoutFeedback and keyboard from React-native (StartGameScreen.js)
3. when string convert to Int if provide a empty string then NaN is give false in the following condition
   1. const number = parseInt('');
   2. if(number === NaN) console.log("Not a number') // number===NaN always false
   3. better use isNaN(number) give true (StartScreen.js)
4. Adding Custom Fonts (app.js)
   1. First add font in project directory (assets/fonts)
   2. Import \* as Fonts from 'expo-font'
   3. use Fonts.loadAsync this is return promise, if directly call this function may be take some time and if component use that font will give error so to avoid this problem we can use a library
   4. expo-app-loading [Expo App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)
   5. Use fonts fontFamily:'open-sans-bold'(StartGameScreen.js title)
   6. How can make apply the fontFamily on text field make it component (BodyText.js and TitleText.js) and second way make default-styles and call it(default-styles.js, GameScreen.js)
5. The Use of Icon (GameScreen.js) [Read more about exp icons](https://docs.expo.io/guides/icons/)
6. [User Interface Component Libraries](https://docs.expo.io/guides/userinterface/)
7. If ScrollView is inside in View then it don't work so solve the issue it need flex value (GameScreen.js)
8. In the FlatList renderItem can be render on two Methods (GameScreen.js)

## Main Scripts

### 1 `expo install expo-app-loading`

expo-app-loading tells expo-splash-screen to keep the splash screen visible while the AppLoading component is mounted.
This is useful to download and cache fonts, logos, icon images and other assets that you want to be sure the user has on their device for an optimal experience.

More help [Expo App Loading](https://docs.expo.io/versions/latest/sdk/app-loading/)

### `npm start`

Runs the app in the development mode.<br />
