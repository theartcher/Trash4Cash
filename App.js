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

const accentColour = '#00A896';
const backgroundColour = '#2C2F33';

/*
TODO: Separate styling to it's own CSS file
TODO: Make custom buttons
TODO: Better names for styling and more centralized colour palettes
! REMOVE INLINE STYLING
*/

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Details"
        onPress={() => navigation.navigate('Details')}
      />

      <Button
        title="Register"
        onPress={() => navigation.navigate('Register')}
      />
    </View>
  );
}

function DetailsScreen() {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function RegistryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainerBlock}>
        <Text style={styles.titleText}>Trash 4 Cash</Text>
        <Text style={styles.defaultText}>Account aanmaken</Text>
        <TextInput
          style={styles.userTextInput}
          placeholder="Email"
          placeholderTextColor={accentColour}
          color={accentColour}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Name"
          placeholderTextColor={accentColour}
          color={accentColour}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Username"
          placeholderTextColor={accentColour}
          color={accentColour}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Password"
          placeholderTextColor={accentColour}
          color={accentColour}
        />

        <Pressable
          style={styles.pressableButton}
          onPress={() => alert('User account successfully registered.')}
        >
          <Text>Create account</Text>
        </Pressable>
      </View>
    </View>
  );
}

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
    fontFamily: 'Monserrat',
    fontWeight: 'bold',
  },
  defaultText: {
    fontFamily: 'Monserrat',
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
    height: '10%',
    width: '80%',
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
