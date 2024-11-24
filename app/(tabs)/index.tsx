import { Stack } from 'expo-router';
import React from 'react';
import { View, Text } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Tab One' }} />
      <View>
        <Text>AA</Text>
      </View>
    </>
  );
}
