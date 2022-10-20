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
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TextInput} from 'react-native-paper';

export const AppointmentReqest = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header skip={true} title={'Appointment Window'} />
      <View style={styles.bg}>
        <View style={styles.intext}>
          <Text style={styles.tx}>Your Appointment is </Text>
          <Text style={styles.tx}> scheduled for </Text>
        </View>
        <View style={styles.intext}>
          <Text style={styles.tx}>11:30 PM </Text>
          <Text style={styles.tx}>on Wed,Nov 9 </Text>
        </View>
      </View>

      <View>
        <Text style={styles.tx1}>We will hold your appointment request for 20 minutes while you answer a few question 

        </Text>
      </View>
      <View style={styles.top}>
          <TouchableOpacity onPress={()=>navigation.navigate('reasonVisit')}>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Continue</Text>
            </View>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  bg: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.secondary,
  },
  intext: {
    marginTop: sizes.screenHeight * 0.02,
    alignItems: 'center',
    paddingBottom: sizes.screenHeight * 0.02,
  },
  tx: {
    fontSize: fontSize.extraLarge,
    color: colors.white,
    fontFamily:fontFamily.appTextHeading,
  },
  tx1: {
    fontFamily:fontFamily.appTextHeading,
    fontSize: fontSize.extraLarge,
    color: colors.black,
    padding:sizes.screenWidth*0.07
  },
  top: {
    marginTop: sizes.screenHeight * 0.03,
  },
  buttonView: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
});
