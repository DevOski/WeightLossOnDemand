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
import images from '../../services/utilities/images';
import {styles} from './style';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

import {colors} from '../../services';

export default function Setting({navigation}) {
  const [userName, setUserName] = useState('Tester Jazzy');
  const [email, setEmail] = useState('tester586@gmail.com');
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = () => setIsEnabled(previousState => !previousState);

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
          <TouchableOpacity onPress={() => navigation.navigate('SharePromo')}>
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
          <TouchableOpacity
            onPress={() => navigation.navigate('PaymentMethod')}>
            <View style={styles.row}>
              <Ionicons name="card-sharp" color={colors.secondary} size={25} />
              <Text style={styles.btnText}>Payment Method</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('ApplyCoupon')}>
            <View style={styles.row}>
              <Ionicons name="pricetag" color={colors.secondary} size={25} />
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
              <FontAwesome name="vcard-o" color={colors.secondary} size={25} />
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
          <View style={[styles.row, styles.justifyCenter]}>
            <Ionicons name="finger-print" color={colors.secondary} size={25} />
            <Text style={styles.fingerprintText}>
              Enable Fingerprint for login
            </Text>
            <View style={{alignSelf: 'flex-end'}}>
              <Switch
                trackColor={{false: '#767577', true: colors.secondary}}
                thumbColor={isEnabled ? colors.primary : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>CARE COORDINATION</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image
                source={images.medicalRecords}
                style={styles.medicalIcon}
              />
              <Text style={styles.btnText}>Medical Records</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <FontAwesome name="heart" color={colors.secondary} size={25} />
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
                name="chat-question"
                color={colors.secondary}
                size={25}
              />
              <Text style={styles.btnText}>Customer Support</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image source={images.feedback} style={styles.medicalIcon} />

              <Text style={styles.btnText}>Send Feedback</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.left, styles.top]}>
          <Text style={styles.head}>LEGAL</Text>
        </View>
        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={styles.row}>
              <Image source={images.terms} style={styles.medicalIcon} />
              <Text style={styles.btnText}>Terms and Conditions</Text>
            </View>
          </TouchableOpacity>
        </View>
        <View style={[styles.right, styles.top]}>
          <Text style={styles.version}>VERSION 3.66.0</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
