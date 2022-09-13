import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import MainNavigator from './src/services/config/navigation';

export default function App() {
  return (
    <View style={styles.container}>
      <MainNavigator />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
