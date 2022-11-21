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
      <Header title={'What is a Video Visit'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Image source={images.visit} style={styles.image} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.heading}>What is a Video Visit?</Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Our certified personal trainers can now provide in-home treatment
            through video call. The ability to see, hear, touch, and talk to you
            is a huge help when trying to figure out what's wrong and how to
            treat it.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            The method used by our fitness experts to determine the problem
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            As trainers with a lot of experience, we use two main skills to
            understand the problems our clients are facing. Looking and
            listening
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            Each client is treated as a unique person with specific needs and
            desires that will be taken into account when developing a training
            plan. Our trainers win the trust of their clients by promising to
            meet each person's individual needs through one-on-one consultations
            and custom-made workout plans.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.subHeading}>
            A video visit can help with many of the most common health and
            fitness issues.
          </Text>
        </View>
        <View style={styles.padding}>
          <Text style={styles.textColor}>
            How our trainers follow the procedure to help clients There is no
            need to travel to an unknown location, waste time getting there, or
            risk meeting a friend or family member when you can meet with one of
            our experienced trainers in the comfort of your own home. A session
            with one of our qualified trainers is equivalent to meeting in but
            may take place whenever and wherever it is most convenient for you.
            During this survey, you will be asked to share details about your
            lifestyle and health habits. Having this background will enable our
            trainers to provide you with more tailored support.
          </Text>
        </View>
        <View style={styles.padding}>
          {/* <Text style={styles.subHeading}>
            How our medical doctors treat children
          </Text> */}
        </View>
        <View style={[styles.padding, styles.paddingBottom]}>
          {/* <Text style={styles.textColor}>
            Our medical doctors are trained to provide care through video visits
            by employing many of the same practices and techniques that are used
            in a traditional doctor’s office. If you would like to have a visit.
            Parents, please be sure to select your child during intake before
            confirming the visit, and ensure your child is present during the
            visit.
          </Text> */}
        </View>
        {Platform.OS == 'ios' && <View style={styles.bottomIOS}></View>}

      </ScrollView>
    </SafeAreaView>
  );
}
