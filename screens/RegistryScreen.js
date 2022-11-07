import * as React from 'react';
import { View, Text, TextInput, Pressable } from 'react-native';

export function RegistryScreen() {
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
