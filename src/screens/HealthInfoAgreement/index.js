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
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import Entypo from 'react-native-vector-icons/Entypo';
import Octicons from 'react-native-vector-icons/Octicons';

import {colors} from '../../services';

export default function HealthInfoAgreement({navigation}) {
  return (
    <SafeAreaView>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.paddingLeft, styles.paddingRight]}>
          <Text style={[styles.bold, styles.textColor]}>
            Weight Loss On Demand can automatically send records of your visits
            to your doctor.
          </Text>
        </View>

        <View style={[styles.padding, styles.height]}>
          <ScrollView>
            <Text style={[styles.textColor, styles.paddingTop, styles.heading]}>
              Use of Health Information
            </Text>
            <Text style={styles.textColor}>
              Your personal health information will not be shared with anyone
              except with your permission or as permitted by applicable law. By
              selecting "I Accept", you permit Weight Loss On Demand and the health
              care professionals you interact with through the Site to disclose
              your health information to other health professionals for purposes
              relating to your treatment, including information relating to
              genetic tests, substance abuse, mental health (excluding
              psychotherapy notes), communicable or infectious diseases and
              other health conditions.
            </Text>

            <Text style={[styles.textColor, styles.paddingTop]}>
              You have the right to revoke or receive a copy this consent at any
              time by providing written notice to{' '}
              <Text style={styles.bold}>support@weightlossondemand.com</Text>.
              This consent shall be in force and effect for one year from the
              date it is signed.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.buttonTop}>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={[styles.buttonView]}>
              <Text style={styles.buttonText}> I Accept</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={[styles.diasbledView]}>
              <Text style={styles.buttonText}> I Decline</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
