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
export default function SoreThroat() {
  return (
    <SafeAreaView>
      <Header title={'Sore Throat'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.soreThroat} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Sore Throat</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            A sore throat is a very common symptom which could be an indicator
            of a series of ailments, including many that can often be treated
            via Video Visit. It can be difficult for a patient to know if they
            have a Cold, Allergies, Strep Throat, or Tonsillitis unless they
            visit with a doctor.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            The doctors at Doctor On Demand Professionals are trained to
            evaluate your symptoms and, depending on the clinical circumstances,
            diagnose and treat the various causes of a sore throat specifically
            through a Video Visit. You can make your visit more efficient by
            having your thermometer ready.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            A sore throat can also be an early sign of the flu. A new CDC
            guideline for flu suggests that you need to take antiviral
            medications such as Tamiflu within 48 hours in order for these
            medications to be effective. However, by the time you start
            realizing you're sick, a day has already passed. Based on the
            clinical assessment performed through the Video Visit, your doctor
            is able to determine if you need antiviral medication such as
            Tamiflu, or over-the-counter medication, at home remedies, or other
            treatments to relieve your symptoms.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Many patients wonder how it works.
          </Text>
        </View>
        <View style={[styles.padding]}>
          <Text style={styles.textColor}>
            During a Video Visit, doctors ask many questions - e.g. have you had
            this before? Have you traveled recently? Does anyone around you have
            the same symptoms? How long has this been happening? Your physician
            may also ask to review medication history and other medical
            information that is readily available.
          </Text>
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            During Video Visits, Doctor On Demand physicians also examine
            patients. For example, the physician can use the video and high
            resolution camera on your phone to look deep inside a patient's
            mouth. Depending on the clinical circumstances, doctors are able to
            look for inflammation as well as carefully monitor other symptoms
            you may be experiencing such as congestion, swollen eyes, difficulty
            swallowing or speaking, and more. Your doctor can often use this
            information to make a diagnosis and then treat your condition safely
            and effectively.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
