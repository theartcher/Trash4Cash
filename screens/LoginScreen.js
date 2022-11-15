import * as React from 'react';
import { View, Text, TextInput, Pressable, Image, Linking } from 'react-native';
import { CheckBox } from '@rneui/themed';
import globalColours from '../globalColours';
const pageStyles = require('../styling/loginStyling');

export function LoginScreen({ navigation }) {
  return (
    <View style={pageStyles.container}>
      <View style={pageStyles.secondaryContainer}>
        <Text style={pageStyles.titleText}>Sign In</Text>
        <Text style={pageStyles.defaultSpacedText}>
          New User?
          <Text
            style={{ color: globalColours.lightSeaGreen }}
            onPress={() => navigation.navigate('Register')}
          >
             Create an account
          </Text>
        </Text>

        <TextInput
          style={pageStyles.userTextInput}
          placeholder="Username or email"
          placeholderTextColor={globalColours.dark}
          color={globalColours.dark}
        />

        <TextInput
          style={pageStyles.userTextInput}
          placeholder="Password"
          placeholderTextColor={globalColours.dark}
          color={globalColours.dark}
        />
        <CheckBox style={pageStyles.checkBox} title="Keep me signed in" />
        <Pressable
          style={pageStyles.pressableButton}
          onPress={() => alert('User account successfully registered.')}
        >
          <Text style={pageStyles.pressableButton.textButton}>Sign In</Text>
        </Pressable>

        <View style={pageStyles.signInWith}>
          <View style={pageStyles.smallDivider} />
          <Text style={pageStyles.defaultSpacedText}>Or Sign In With</Text>
          <View style={pageStyles.smallDivider} />
        </View>

        <View style={pageStyles.socialMediaButton}>
          <Pressable
            style={pageStyles.socialMediaButton}
            onPress={() => Linking.openURL('https://www.linkedin.com/login/nl')}
          >
            <Image
              source={require('../assets/icons/white_linkedin_logo.png')}
              style={pageStyles.socialMediaIcon}
            />
          </Pressable>

          <Pressable
            style={pageStyles.socialMediaButton}
            onPress={() => Linking.openURL('https://nl-nl.facebook.com/')}
          >
            <Image
              source={require('../assets/icons/white_facebook_logo.png')}
              style={pageStyles.socialMediaIcon}
            />
          </Pressable>

          <View style={pageStyles.socialMediaButton}>
            <Pressable
              style={pageStyles.socialMediaButton}
              onPress={() =>
                Linking.openURL('https://twitter.com/i/flow/login')
              }
            >
              <Image
                source={require('../assets/icons/white_twitter_logo.png')}
                style={pageStyles.socialMediaIcon}
              />
            </Pressable>
          </View>

          <Pressable
            onPress={() =>
              Linking.openURL('https://www.instagram.com/accounts/login/')
            }
          >
            <Image
              source={require('../assets/icons/white_instagram_logo.png')}
              style={pageStyles.socialMediaIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
