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
export default function UTIs() {
  return (
    <SafeAreaView>
      <Header title={'UTIs'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.utis} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>Urinary Tract Infection</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Urinary tract infections (UTIs) are a very common condition. In
            fact, more often than not, when patients call Doctor On Demand they
            have already experienced the symptoms and have been diagnosed with
            this condition before.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            If you are experiencing painful urination or bladder pain, your
            physician will often begin the Video Visit by asking the following
            types of questions: Have you had these symptoms before? Have you
            ever been diagnosed with a urinary tract infection? Is there
            discomfort and burning with urination? Was there an inciting event?
            Physicians listen carefully to determine whether the patient is
            suffering from a UTI or a more complicated condition that might
            present with similar symptoms. Collection of the patient's history
            is critical in determining whether a patient has an uncomplicated
            UTI or something else that may require follow-up testing or a
            physician office visit. The physician will also examine the patient,
            which may include among other things determining whether the patient
            has a fever or is experiencing tenderness or back pain.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            In cases of an uncomplicated UTI, the Infectious Disease Society of
            America (IDSA) does not recommend a urinalysis.
          </Text>
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          <Text style={styles.textColor}>
            Most urinary tract infections are treated with prescription
            antibiotics. Ask your physician for suggestions on ways to prevent
            future urinary tract infections.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
