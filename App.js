import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Home from './src/screens/Home';
import MainNavigator from './src/services/config/navigation';
import SplashScreen from 'react-native-splash-screen';
import NetInfo from "@react-native-community/netinfo";

export default function App() {
  useEffect(() => {
    SplashScreen.hide();
    NetInfo.fetch().then(state => {
      console.log('Connection type----->>', state.type);
      console.log('Is connected?----->>>', state.isConnected);
    });
  }, []);
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
