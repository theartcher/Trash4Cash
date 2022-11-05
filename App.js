import * as React from 'react';
import { Button, View, Text, StyleSheet, TextInput } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';

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

function RegisterScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.registerScreenMainBlock}>
        <Text style={styles.title}>Trash 4 Cash</Text>
        <Text>Account aanmaken</Text>
        <TextInput placeholder="Voornaam" keyboardType="default" />
      </View>
    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  const [fontsLoaded] = useFonts({
    Minecraft: require('./assets/fonts/Minecraft.ttf'),
  });

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  //VIEW
  registerScreenMainBlock: {
    margin: 12,
    padding: 10,
    borderRadius: 5,
    width: '98%',
    height: '98%',
    backgroundColor: '#2C2F33',
  },
  //VIEW
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: '#7289DA',
    padding: 20,
    margin: 10,
    alignItems: 'center',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  //TEXT
  title: {
    color: 'white',
    padding: 10,
    fontSize: 40,
    textShadowColor: 'black',
    fontFamily: 'Minecraft',
  },
  defaultTextFormatting: {
    fontFamily: 'Minecraft',
    color: 'white',
    fontSize: 20,
  },
});

export default App;
