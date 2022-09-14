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
import Ionicons from 'react-native-vector-icons/Ionicons';
import {colors} from '../../services';
import {useNavigation} from '@react-navigation/native';

export default function Header({title}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerView, styles.row]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" color={colors.white} size={25} />
      </TouchableOpacity>

      <Text style={styles.title}>{title}</Text>
    </View>
  );
}
