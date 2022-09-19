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
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';

export default function VideoVisit() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <Header title={'What is a Video Visit'} />
        <View style={styles.padding}>
          <Image source={images.visit} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>What is a Video Visit?</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Video visits allow our medical doctors, psychologists, and
            psychiatrists to provide care – without you having to leave your
            home. With video, they can look, listen, examine, and engage with
            you to diagnose your issues and provide an effective treatment plan.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            How our medical doctors make a diagnosis
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Our medical doctors use two main skills to diagnose medical
            conditions: listening and looking. Before each visit, patients are
            asked a series of questions regarding their symptoms and medical
            history. If more information is needed, the doctor will ask
            additional questions during the visit. Once the visit has begun, the
            doctor will leverage the patient’s device camera to evaluate any
            physical signs, this is the comparable level of quality as an
            in-person visit. Based on the diagnosis, the doctor may order a
            prescription or labs for further evaluation.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Many of the most common ER cases can be treated by a video visit.
            However, to ensure that patients receive the care they need, the
            doctor may recommend the patient see someone in-person such as at
            the ER.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            How visits with our psychologists and psychiatrists work
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            You can meet with a psychologist or psychiatrists from the privacy
            of your home; no going to an unfamiliar office, time lost getting
            there, or running into someone you know. Meeting with one of our
            psychologists or psychiatrists is the same as meeting face-to-face,
            but on your terms, and at the time and place that works for you.
            Before your visit, you’ll be asked to complete an optional
            questionnaire to describe how you’re feeling. This information will
            help the psychologist or psychiatrist better understand what’s going
            on before your visit even starts.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            How our medical doctors treat children
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Our medical doctors are trained to provide care through video visits
            by employing many of the same practices and techniques that are used
            in a traditional doctor’s office. If you would like to have a visit.
            Parents, please be sure to select your child during intake before
            confirming the visit, and ensure your child is present during the
            visit.
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
