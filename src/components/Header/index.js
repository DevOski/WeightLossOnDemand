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

export default function Header({title, skip, dark, done,onPress,filter}) {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={[styles.headerView, !dark && styles.headerBg, styles.row]}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons
            name="arrow-back-outline"
            color={dark ? colors.primary : colors.white}
            size={25}
          />
        </TouchableOpacity>
        <Text style={[dark ? styles.darkTitle : styles.title, styles.bold]}>
          {title}
        </Text>
        {done && onPress && (
          <TouchableOpacity onPress={onPress}>
           <View style={[styles.row, styles.left]}>
             <Text style={styles.title}> </Text>
             </View>
             </TouchableOpacity>
             )
        }
        {done && (
          <View style={styles.skipView}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={[styles.row, styles.leftDone]}>
                <Text style={styles.title2}>{'   '} Done</Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
         {filter && (
          <View style={styles.filterView}>
            <TouchableOpacity onPress={() => navigation.navigate("Filter")}>
              <View style={[styles.row, styles.leftDone]}>
                <Text style={styles.filter}>{'   '}Filter </Text>
              </View>
            </TouchableOpacity>
          </View>
        )}
        {skip && (
          <View style={[styles.skipView,styles.leftDone]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View style={[styles.row]}>
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
    </View>
  );
}
