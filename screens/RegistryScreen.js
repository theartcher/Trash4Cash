import * as React from 'react';
import { View, Text, TextInput, Pressable, Image, Linking } from 'react-native';
import { CheckBox } from '@rneui/themed';
import globalColours from '../globalColours';
const styles = require('../styling');

export function RegistryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.secondaryContainer}>
        <Text style={styles.titleText}>Sign In</Text>
        <Text
          style={styles.defaultSpacedText}
          paddingBottom="6%"
          paddingTop="6%"
        >
          New User?
          <Text style={{ color: globalColours.lightSeaGreen }}>
            Create an account
          </Text>
        </Text>
        <TextInput
          style={styles.userTextInput}
          placeholder="Username or email"
          placeholderTextColor={globalColours.dark}
          color={globalColours.dark}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Password"
          placeholderTextColor={globalColours.dark}
          color={globalColours.dark}
        />
        <CheckBox style={styles.checkBox} title="Keep me signed in" />
        <Pressable
          style={styles.pressableButton}
          onPress={() => alert('User account successfully registered.')}
        >
          <Text style={styles.pressableButton.textButton}>Sign In</Text>
        </Pressable>

        <View style={styles.signInWith}>
          <View style={styles.smallDivider} />
          <Text style={styles.defaultSpacedText}>Or Sign In With</Text>
          <View style={styles.smallDivider} />
        </View>

        <View style={styles.socialMediaButton}>
          <Pressable
            style={styles.socialMediaButton}
            onPress={() => Linking.openURL('https://www.linkedin.com/login/nl')}
          >
            <Image
              source={require('../assets/icons/white_linkedin_logo.png')}
              style={styles.socialMediaIcon}
            />
          </Pressable>

          <Pressable
            style={styles.socialMediaButton}
            onPress={() => Linking.openURL('https://nl-nl.facebook.com/')}
          >
            <Image
              source={require('../assets/icons/white_facebook_logo.png')}
              style={styles.socialMediaIcon}
            />
          </Pressable>

          <View style={styles.socialMediaButton}>
            <Pressable
              style={styles.socialMediaButton}
              onPress={() =>
                Linking.openURL('https://twitter.com/i/flow/login')
              }
            >
              <Image
                source={require('../assets/icons/white_twitter_logo.png')}
                style={styles.socialMediaIcon}
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
              style={styles.socialMediaIcon}
            />
          </Pressable>
        </View>
      </View>
    </View>
  );
}
