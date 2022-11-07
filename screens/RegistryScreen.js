import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';
const styles = require('../styling');

export function RegistryScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.mainContainerBlock}>
        <Text style={styles.titleText}>Trash 4 Cash</Text>
        <Text style={styles.defaultText}>Account aanmaken</Text>
        <TextInput
          style={styles.userTextInput}
          placeholder="Email"
          placeholderTextColor={globalColours.accentColour}
          color={globalColours.accentColour}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Name"
          placeholderTextColor={globalColours.accentColour}
          color={globalColours.accentColour}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Username"
          placeholderTextColor={globalColours.accentColour}
          color={globalColours.accentColour}
        />

        <TextInput
          style={styles.userTextInput}
          placeholder="Password"
          placeholderTextColor={globalColours.accentColour}
          color={globalColours.accentColour}
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
