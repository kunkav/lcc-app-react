import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
  LoginPage 
 } from './ui-components';

export default function App() {
  return (
    <ThemeProvider theme={studioTheme}>
    <View style={styles.container}>
      <Text>This is kunal</Text>
      <StatusBar style="auto" />
    </View>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
