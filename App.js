import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './screens/HomeScreen';
import { DetailsScreen } from './screens/DetailsScreen';
import { RegistryScreen } from './screens/RegistryScreen';
import { LoginScreen } from './screens/LoginScreen';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Details"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegistryScreen}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

/*
TODO: Separate styling to it's own CSS file -> DONE
TODO: Separate screens into assets/screens/*  -> DONE CHOSE FOR ../styling.js
TODO: Make custom buttons -> DONE
TODO: Better names for styling and more centralized colour palettes
TODO: Icons in the textInput bars -> Scrapped
TODO: Data sensitivity policy
TODO: Themes
! REMOVE INLINE STYLING
*/
