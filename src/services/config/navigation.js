import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native';
import images from '../utilities/images';
import {sizes} from '../utilities';
import GetCare from '../../screens/GetCare';
import MyHealth from '../../screens/MyHealth';
import Setting from '../../screens/Setting';
import {SignIn} from '../../screens/signinscreen';
import {SignUp} from '../../screens/signupscreen';
import SharePromo from '../../screens/SharePromo';
import PaymentMethod from '../../screens/PaymentMethod';
import ApplyCoupon from '../../screens/ApplyCoupon';
import Intro from '../../screens/introSliderScreen';
import ContactInfo from '../../screens/ContactInfo';
import ChangePassword from '../../screens/ChangePassword';
import Insurance from '../../screens/Insurance';
import Employer from '../../screens/Employer';
import MedicalRecords from '../../screens/MedicalRecords';
import GoogleFit from '../../screens/GoogleFit';
import TermsAndConditions from '../../screens/TermsAndConditions';
import ContactSupport from '../../screens/ContactSupport';
import {Employerhelp} from '../../screens/employerhelpscreen';
import {SearchScreen} from '../../screens/searchscreen';
import BasicInfoScreen from '../../screens/basicInfoscreens';
import {InsuranceScreen} from '../../screens/insurancescreen';
import Wellcome from '../../screens/wellcomescreen';
import {VisitScreen} from '../../screens/visitforscreen';
import {ForPharmacy} from '../../screens/searchforpharmacyscreen';
import MemberShipTerms from '../../screens/membershiptermscreens';
import TermsOfService from '../../screens/TermsOfService';
import MemberAgreement from '../../screens/MemberAgreement';
import PrivacyPolicy from '../../screens/PrivacyPolicy';
import {Correct} from '../../screens/correctinfoscreen';
import {EditInfo} from '../../screens/edityourinformation';
import {EdiTChildscreen} from '../../screens/editChildscreen';
import {ChildScreen} from '../../screens/addchildscreen';

import NoticeOfPrivacy from '../../screens/NoticeOfPrivacy';
import MemberEducationProgram from '../../screens/MemberEducationProgram';
import HealthInfoAgreement from '../../screens/HealthInfoAgreement';
import VideoPlayer from '../../components/VideoPlayer';
import HowItWorks from '../../screens/HowItWorks';
import HowItWorksVT from '../../screens/HowItWorksVT';
import VideoVisit from '../../screens/VideoVisit';
import TipsVisit from '../../screens/TipsVisit';
import PrescriptionsAndLab from '../../screens/PrescriptionsAndLab';
import MyPricing from '../../screens/MyPricing';
import MessageSupport from '../../screens/MessageSupport';
import HowInfoShare from '../../screens/HowInfoShared';
import EditName from '../../screens/EditName';
import EditPhone from '../../screens/EditPhone';
import EditEmail from '../../screens/EditEmail';
const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Setting" component={Setting} />

        <Stack.Screen name="Introsliderscreen" component={Intro} />
        <Stack.Screen name="signupscreen" component={SignUp} />
        <Stack.Screen name="signinscreen" component={SignIn} />
        <Stack.Screen name="wellcomescreen" component={Wellcome} />
        <Stack.Screen name="basicInfoscreens" component={BasicInfoScreen} />
        <Stack.Screen name="BottomNavs" component={MyTabs} />

        <Stack.Screen
          name="membershiptermscreens"
          component={MemberShipTerms}
        />
        <Stack.Screen name="searchforpharmacyscreen" component={ForPharmacy} />
        <Stack.Screen name="employerhelpscreen" component={Employerhelp} />
        <Stack.Screen name="visitforscreen" component={VisitScreen} />
        <Stack.Screen name="addchildscreen" component={ChildScreen} />
        <Stack.Screen name="editChildscreen" component={EdiTChildscreen} />
        <Stack.Screen name="edityourinformation" component={EditInfo} />
        <Stack.Screen name="correctinfoscreen" component={Correct} />
        <Stack.Screen name="searchscreen" component={SearchScreen} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />

        <Stack.Screen name="SharePromo" component={SharePromo} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="ApplyCoupon" component={ApplyCoupon} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
        <Stack.Screen name="Insurance" component={Insurance} />
        <Stack.Screen name="Employer" component={Employer} />
        <Stack.Screen name="MedicalRecords" component={MedicalRecords} />
        <Stack.Screen name="GoogleFit" component={GoogleFit} />
        <Stack.Screen name="ContactSupport" component={ContactSupport} />
        <Stack.Screen
          name="TermsAndConditions"
          component={TermsAndConditions}
        />
        <Stack.Screen name="TermsOfService" component={TermsOfService} />
        <Stack.Screen name="MemberAgreement" component={MemberAgreement} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="NoticeOfPrivacy" component={NoticeOfPrivacy} />
        <Stack.Screen
          name="MemberEducationProgram"
          component={MemberEducationProgram}
        />
        <Stack.Screen
          name="HealthInfoAgreement"
          component={HealthInfoAgreement}
        />
        <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
        <Stack.Screen name="HowItWorks" component={HowItWorks} />
        <Stack.Screen name="HowItWorksVT" component={HowItWorksVT} />
        <Stack.Screen name="VideoVisit" component={VideoVisit} />
        <Stack.Screen name="TipsVisit" component={TipsVisit} />
        <Stack.Screen
          name="PrescriptionsAndLab"
          component={PrescriptionsAndLab}
        />
        <Stack.Screen name="insurancescreen" component={InsuranceScreen} />

        <Stack.Screen name="MyPricing" component={MyPricing} />
        <Stack.Screen name="MessageSupport" component={MessageSupport} />
        <Stack.Screen name="HowInfoShare" component={HowInfoShare} />
        <Stack.Screen name="EditName" component={EditName} />
        <Stack.Screen name="EditPhone" component={EditPhone} />
        <Stack.Screen name="EditEmail" component={EditEmail} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#be1d2d"
      barStyle={{backgroundColor: '#f5f5f5'}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color}) => (
            <Image
              source={images.icon}
              style={{
                height: sizes.screenHeight * 0.032,
                width: sizes.screenWidth * 0.06,
              }}
            />
          ),
        }}
      />
      <Tab.Screen
        name="GetCare"
        component={GetCare}
        options={{
          tabBarLabel: 'Get Care',
          tabBarIcon: ({color}) => (
            <FontAwesome5 name="briefcase-medical" color={color} size={22} />
          ),
        }}
      />
      <Tab.Screen
        name="MyHealth"
        component={MyHealth}
        options={{
          tabBarLabel: 'My Health',
          tabBarIcon: ({color}) => (
            <FontAwesome name="heartbeat" color={color} size={22} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}
