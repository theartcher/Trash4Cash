import * as React from 'react';
import { Button, View, Text } from 'react-native';

export function HomeScreen({ navigation }) {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <Text style={{ fontWeight: 'bold' }}>Home Screen</Text>
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
