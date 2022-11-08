import { StyleSheet } from 'react-native';
import globalColours, {
  backgroundColour,
  accentColour,
  defaultFont,
} from '../globalColours';
// import { useFonts } from 'expo-font';
// const [fontsLoaded] = useFonts({
//   Minecraft: require('./assets/fonts/Minecraft.ttf'),
//   Montserrat: require('./assets/fonts/Montserrat-Medium.ttf'),
// });

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
    width: '100%',
    height: '100%',
    backgroundColor: globalColours.lightGray,
    alignSelf: 'center',
    justifyContent: 'center',
  },
  secondaryContainer: {
    padding: 10,
    borderWidth: 2,
    borderColor: 'black',
    width: '87%',
    height: '72%',
    backgroundColor: globalColours.light,
    alignSelf: 'center',
    justifyContent: 'center',
    maxWidth: '87%',
    maxHeight: '72%',
  },
});
