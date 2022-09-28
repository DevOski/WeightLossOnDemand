import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';

export default function GenerateReciept() {
  return (
    <SafeAreaView>
      <View>
        <Header title={'Reciept'} done={true}/>
      </View>
      <ScrollView style={styles.color}>
        <View>

        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
