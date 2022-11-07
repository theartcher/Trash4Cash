import * as React from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { RegistryScreen } from './screens/RegistryScreen';

const accentColour = '#00A896';
const backgroundColour = '#2C2F33';
const defaultFont = 'Monserrat';

/*
TODO: Separate styling to it's own CSS file
TODO: Separate screens into assets/screens/*
TODO: Make custom buttons
TODO: Better names for styling and more centralized colour palettes
TODO: Icons in the textInput bars
TODO: Data sensitivity policy
TODO: Themes
! REMOVE INLINE STYLING
*/

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Minecraft: require('./assets/fonts/Minecraft.ttf'),
    Montserrat: require('./assets/fonts/Montserrat-Medium.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Register" component={RegistryScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //VIEW
  mainContainerBlock: {
    padding: 10,
    borderRadius: 5,
    width: '90%',
    height: '98%',
    backgroundColor: backgroundColour,
    alignItems: 'center',
    justifyContent: 'center',
  },
  //VIEW
  container: {
    flex: 1,
    padding: 5,
    backgroundColor: accentColour,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  //TEXT
  titleText: {
    color: 'white',
    padding: 10,
    fontSize: 40,
    fontFamily: defaultFont,
    fontWeight: 'bold',
  },
  defaultText: {
    fontFamily: defaultFont,
    color: 'white',
    fontSize: 20,
    textAlign: 'left',
  },
  //TextInput
  userTextInput: {
    padding: 5,
    margin: 10,
    borderColor: 'white',
    borderWidth: 0.75,
    borderRadius: 5,
    height: '7%',
    width: '65%',
    fontStyle: 'italic',
    textColor: 'white',
  },
  pressableButton: {
    backgroundColor: accentColour,
    borderWidth: 0,
    borderRadius: 5,
    margin: 10,
    padding: 10,
  },
});

export default App;
