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

export default function MemberEducationProgram({navigation}) {
  return (
    <SafeAreaView>
       <View>
          <Header dark={true} />
        </View>
      <ScrollView style={styles.color}>
        <View style={[styles.padding, styles.height]}>
          <ScrollView>
        <View >
          <Text style={[styles.bold, styles.textColor]}>
            Participation in Member Education Program
          </Text>
        </View>
            <Text style={styles.textColor}>
              By participating in the Member Education Program, you authorize
              Doctor On Demand to share with you information about products and
              services provided by organizations other than Doctor On Demand
              that may be of interest to you, such as health education materials
              prepared by third parties and applications that can integrate with
              Doctor On Demand applications, and other health related products
              and services. You understand that these communications may be
              influenced by the information you provide to us during the
              registration process.
            </Text>
            <Text style={[styles.textColor, styles.paddingTop]}>
              You further understand that:
            </Text>
            <Text style={[styles.textColor, styles.paddingTop]}>
              We will not share any information with third parties pursuant to
              this authorization. You have the right to revoke or receive a copy
              of this authorization at any time by providing written notice to
              <Text style={styles.link}> support@weightlossondemand.com</Text>. However, a revocation of this
              authorization will not affect any action taken by us in reliance
              on this authorization. This authorization shall be in force and
              effect for one year from the date this form is signed. Your
              treatment, payment, enrollment or eligibility for benefits will
              not be conditioned on whether you choose to Participate in the
              Member Education Program. Weight Loss on Demand may receive
              compensation relating to the Member Education Program activities
              described above. You can learn more about Weight Loss On Demand's
              privacy policies by viewing our Notice of Privacy Practices.
              Selecting “I Accept” below constitutes your signature.
            </Text>
          </ScrollView>
        </View>
        <View style={styles.buttonTop}>
          <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={[styles.buttonView]}>
              <Text style={styles.buttonText}> I Accept</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => navigation.navigate('TermsAndConditions')}>
            <View style={[styles.diasbledView]}>
              <Text style={styles.buttonText}> I Decline</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
