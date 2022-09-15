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

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function Header({title, skip, dark}) {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerView, !dark && styles.headerBg, styles.row]}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Ionicons
          name="arrow-back-outline"
          color={dark ? colors.primary : colors.white}
          size={25}
        />
      </TouchableOpacity>
      <Text style={[styles.title, styles.bold]}>{title}</Text>
      {skip && (
        <View style={styles.skipView}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <View style={[styles.row, styles.left]}>
              <Text style={styles.title}>{'   '}Skip </Text>
              <MaterialIcons
                name="keyboard-arrow-right"
                color={colors.white}
                size={20}
                style={styles.skipIcon}
              />
            </View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
