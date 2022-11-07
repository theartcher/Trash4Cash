import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { RegistryScreen } from './screens/RegistryScreen';

/*
TODO: Separate styling to it's own CSS file -> DONE
TODO: Separate screens into assets/screens/*  -> DONE CHOSE FOR ../styling.js
TODO: Make custom buttons -> DONE
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

export default App;
