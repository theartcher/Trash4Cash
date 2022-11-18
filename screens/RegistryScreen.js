import * as React from 'react';
import { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  Pressable,
  Image,
  Linking,
  Alert,
} from 'react-native';
import globalColours from '../globalColours';
const globalStyles = require('../styling/globalStyling');
const pageStyles = require('../styling/registryStyling');
import axios from 'axios';

function checkBoxed() {}

export function RegistryScreen({ navigation }) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  return (
    <View style={pageStyles.container}>
      <View style={pageStyles.secondaryContainer}>
        <Text style={pageStyles.titleText}>Sign Up</Text>
        <Text style={pageStyles.defaultSpacedText}>
           Already an user?
          <Text
            style={{ color: globalColours.lightSeaGreen }}
            onPress={() => navigation.navigate('Login')}
          >
             Sign In
          </Text>
        </Text>
        <TextInput
          style={pageStyles.userTextInput}
          placeholder="First name"
          placeholderTextColor={globalColours.dark}
          onChangeText={(value) => setFirstName(value)}
        />
        <TextInput
          style={pageStyles.userTextInput}
          placeholder="Last name"
          placeholderTextColor={globalColours.dark}
          onChangeText={(value) => setLastName(value)}
        />
        <TextInput
          style={pageStyles.userTextInput}
          placeholder="Username"
          placeholderTextColor={globalColours.dark}
          onChangeText={(value) => setUsername(value)}
        />
        <TextInput
          style={pageStyles.userTextInput}
          placeholder="Email"
          placeholderTextColor={globalColours.dark}
          keyboardType="email-address"
          onChangeText={(value) => setEmail(value)}
        />
        <TextInput
          style={pageStyles.userTextInput}
          placeholder="Password"
          placeholderTextColor={globalColours.dark}
          secureTextEntry={true}
          onChangeText={(value) => setPassword(value)}
        />
        <Pressable
          style={pageStyles.pressableButton}
          onPress={async () => {
            const url = 'http://alpha.cubes.host:25577/api/user';
            const apiInputData = {
              firstName: `${firstName}`,
              lastName: `${lastName}`,
              email: `${email}`,
              password: `${password}`,
              username: `${username}`,
              registeredCity: 'Eindhoven',
            };
            axios
              .post(url, apiInputData, {
                headers: {
                  Accept: '*/*',
                  'Content-Type': 'application/json;charset=UTF-8',
                },
              })
              .then(({ data }) => {
                console.log(data);
              })
              .catch((error) => console.log('error: ', error));
          }}
        >
          <Text style={pageStyles.pressableButton.textButton}>Sign Up</Text>
        </Pressable>
      </View>
    </View>
  );
}

//  onPress={async () => {
//             const url = 'http://alpha.cubes.host:25577/api/user';
//             const apiInputData = {
//               id: 999,
//               firstName: 'Bart',
//               lastName: 'Jaap',
//               email: 'jorisplayz@gmail.com',
//               password: 'aap123',
//               username: 'aap123',
//               registeredCity: 'Amsterdam',
//             };
//             axios
//               .post(url, apiInputData, {
//                 headers: {
//                   Accept: '*/*',
//                   'Content-Type': 'application/json;charset=UTF-8',
//                 },
//               })
//               .then(({ data }) => {
//                 console.log(data);
//               })
//               .catch((error) => console.log('error: ', error));
//           }}
