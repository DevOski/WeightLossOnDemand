import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {styles} from './style';
export default function GetCare() {
  return (
      <TouchableOpacity>
        <View style={styles.buttonView}>
          <Text style={styles.buttonText}> Get care</Text>
        </View>
      </TouchableOpacity>
  );
}
