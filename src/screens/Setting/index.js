import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../services';

export default function Setting() {
  const [userName, setUserName] = useState('Tester Jazzy');
  const [email, setEmail] = useState('tester586@gmail.com');
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'My Account'} />
        </View>
        <View style={styles.userView}>
          <View style={styles.signOutBtn}>
            <TouchableOpacity>
              <Text style={styles.signOutText}>Sign out</Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.userName}>{userName}</Text>
          <Text style={[styles.signOutText, styles.left]}>{email}</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="gift"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Share Weight Loss On Demand</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>PAYMENT</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Ionicons
                name="card-sharp"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Payment Method</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Ionicons
                name="pricetag"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Apply Coupon</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>UPDATE PROFILE</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <FontAwesome
                name="vcard-o"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Contact Information</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="lock"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Change Password</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="clipboard-text"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Insurance</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Ionicons
                name="briefcase-sharp"
                color={colors.secondary}
                size={25}
              />
              <View>
                <Text style={styles.btnText}>Employer</Text>
                <Text style={[styles.redText, styles.left]}>
                  {' '}
                  AMN Healthcare
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Ionicons
                name="finger-print"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Enable Fingerprint for login</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>CARE COORDINATION</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <FontAwesome5
                name="boxes"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Medical Records</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="gift"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Google Fit</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>GET IN TOUCH</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <MaterialCommunityIcons
                name="gift"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Customer Support</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
