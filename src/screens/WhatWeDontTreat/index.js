import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';
import Entypo from 'react-native-vector-icons/Entypo';

export default function WhatWeDontTreat() {
  return (
    <SafeAreaView>
      <Header title={"What we don't Treat"} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.coldAndFlu} style={styles.image} />
        </View>

        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Getting sick is never convenient. Fortunately, this cold and flu
            season, Weight Loss On Demand makes it easy to get the care you need
            to feel better fast.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>The Flu Doctors are in</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.textColor}>
              When you aren’t feeling well, you should be able to access expert,
              quality care from the comfort of home. That’s why we’re committed
              to connecting you with a board-certified doctor anywhere, anytime.
              With an average wait time of under five minutes, it’s always easy,
              convenient, and affordable to get the care you deserve this flu
              season.
            </Text>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.heading}>Diagnosing Your Issue</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                Conditions like the flu, common cold, strep throat, and
                bronchitis have similar symptoms, but each requires a different
                course of action. Our doctors are able to accurately diagnose
                each, provide treatment and lower the risk of complications or a
                secondary infection. You can confidentially visit with one of
                our doctors
              </Text>
              <Text style={styles.textColor}>
                If you think you have one of the following:
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.paddingTop]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Cold</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Flu</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Bronchitis</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Sinus infections</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Strep throat</Text>
          </View>
          <View style={[styles.row]}>
            <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
            <Text style={styles.text}>Pneumonia</Text>
          </View>
          <View style={[styles.paddingTop]}>
            <Text style={styles.heading}>Providing Treatment</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                The doctor will recommend treatment and provide detailed
                instructions to get you better, this may include:
              </Text>
            </View>
            <View style={[styles.row, styles.paddingTop]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Prescribing medication that can reduce flu severity. The
                prescription will be sent directly to the pharmacy of your
                choice
              </Text>
            </View>
            <View style={[styles.row, styles.paddingTop2]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Advising on the right over-the-counter medication to manage
                symptoms
              </Text>
            </View>
            <View style={[styles.row, styles.paddingTop2]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Recommendations on home remedies that actually work
              </Text>
            </View>
            <View
              style={[styles.row, styles.paddingTop2, , styles.paddingBottom2]}>
              <Entypo name="dot-single" color={colors.disabledBg2} size={25} />
              <Text style={styles.text}>
                Sending documentation that you can share with your employer (eg,
                a doctor's note) or your primary care physician
              </Text>
            </View>
          </View>
          <View style={[styles.paddingTop, styles.paddingBottom]}>
            <Text style={styles.heading}>Schedule a Visit Today</Text>
            <View style={styles.paddingTop}>
              <Text style={styles.textColor}>
                Weight Loss On Demand lets you skip the waiting room, and get
                the treatment you need in minutes. This cold and flu season,
                meeting with one of our doctors is the smartest way to get back
                on your feet.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
