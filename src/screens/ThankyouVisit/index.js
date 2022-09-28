import React, {useEffect, useRef, useState} from 'react';
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
import {colors, sizes} from '../../services';

export default function ThankyouVisit({navigation}) {
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.skipBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.skipText}>Done</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.providerTitle}>Thank you for your visit!</Text>
        <View style={styles.padding}>
          <Text style={styles.text}>
            You can find notes from your provider and more under My Health
          </Text>
          <View style={styles.headerView}>
            <Text style={styles.health}>
              My Health {' > '}
              <Text style={styles.visitHistory}> Visit History</Text>
            </Text>
          </View>
          <View style={styles.borderView}></View>
          <View style={styles.inviteView}>
            <Text style={styles.inviteText}>
              INVITE YOUR FRIENDS AND FAMILY
            </Text>
          </View>
          <View style={styles.borderView}></View>
          <View>
            <View style={[styles.row]}>
              <Image source={images.msg} style={styles.icon} />
              <Text style={[styles.list, styles.textList]}>Text</Text>
            </View>
            <View style={[styles.row]}>
              <Image source={images.ema} style={styles.icon2} />
              <Text style={styles.list}>Email</Text>
            </View>
            <View style={[styles.row]}>
              <Image source={images.fac} style={styles.icon2} />
              <Text style={styles.list}>Facebook</Text>
            </View>
            <View style={[styles.borderView,styles.bottom]}></View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}
