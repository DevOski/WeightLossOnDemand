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
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {colors} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export default function FAQs() {
  const [faqs, setFAQs] = useState('');
  return (
    <SafeAreaView>
      <View>
        <Header title={'FAQs'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={[styles.header]}>
          <View style={styles.textView}>
            <Text style={styles.heading}>How can we help?</Text>
          </View>
          <View style={[styles.paddingTop, styles.row]}>
            <TextInput
              placeholder="Search FAQs"
              style={styles.field}
              onChangeText={text => setFAQs(text)}
              value={faqs}
            />
            <TouchableOpacity>
              <View style={styles.searchView}>
                <View style={{alignSelf: 'center'}}>
                  <FontAwesome name="search" color={colors.white} size={15} />
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={[styles.bold, styles.textHead]}>All Topics</Text>
          <View style={styles.padding}>
            <Text style={[styles.bold, styles.underline]}>General</Text>
            <View style={styles.marginTop}>
              <Text style={[styles.light, styles.underline]}>
                How much does your service cost?
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <Text style={[styles.light, styles.underline]}>
                Do you accept insurance?
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <Text style={[styles.light, styles.underline]}>
                Can I share my visit notes with my PCP?
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <TouchableOpacity>
                <Text style={[styles.redText]}>View All (13)</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={[styles.bold, styles.underline]}>Doctor Visit</Text>
            <View style={styles.marginTop}>
              <Text style={[styles.light]}>
                <Text style={[styles.underline]}>
                  Can your Board Certified Clinicians precribe me?
                </Text>
                ...
              </Text>
            </View>

            <View style={styles.marginTop2}>
              <Text style={[styles.light]}>
                <Text style={[styles.underline]}>
                  Can medical forms, such as work/school excuses
                </Text>
                ...
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <Text style={[styles.light]}>
                <Text style={[styles.underline]}>
                  What happens if my medical visit goes over 15 mi
                </Text>
                ...
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <TouchableOpacity>
                <Text style={[styles.redText]}>View All (7)</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.padding}>
            <Text style={[styles.bold, styles.underline]}>My Account</Text>
            <View style={styles.marginTop}>
              <Text style={[styles.light, styles.underline]}>
                How do I set up an account for my child?
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <Text style={[styles.light, styles.underline]}>
                How do I update/edit my personal information?
              </Text>
            </View>
            <View style={styles.marginTop2}>
              <Text style={[styles.light, styles.underline]}>
                Can I have multiple accounts on the same devices?
              </Text>
            </View>
            <View style={[styles.paddingTop, {alignItems: 'center'}]}>
              <TouchableOpacity>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}> Show more</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.marginTop2, styles.paddingLeft]}>
            <Text style={[styles.light, styles.footerText]}>
              The telemedicine services made available through Weight Loss On Demand
              are provided by licensed physicians practicing within a group of
              independently owned professional practices collectively known as
              Weight Loss On Demand Professionals”. These professional practices
              provide services via the Weight Loss On Demand telehealth platform.
              Weight Loss On Demand, Inc. does not itself provide any physician,
              mental health or other healthcare provider services.
            </Text>
          </View>
          <View style={[styles.top, styles.paddingLeft]}>
            <Text style={[styles.condensed, styles.footerText, styles.bold]}>
              Ⓒ 2022 Weight Loss On Demand,Inc. All Rights Reserved
            </Text>
          </View>
          
          {/* <View style={styles.paddingBottom}></View> */}
        </View>
        <View style={[styles.top, styles.paddingLeft,styles.paddingBottom]}>
            <Text style={[styles.light, styles.footerText,styles.condensed]}>
              powered by  <Text style={[styles.bold]}>salesforce</Text>
            </Text>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}
