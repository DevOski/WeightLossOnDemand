import React, {useEffect} from 'react';

import {NavigationContainer} from '@react-navigation/native';

import {createNativeStackNavigator} from '@react-navigation/native-stack';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {Image} from 'react-native';
import images from '../utilities/images';
import {sizes} from '../utilities';
import Home from '../../screens/Home';
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
import {ReasonForDcoctor} from '../../screens/reasonVisit';
import {OtherReason} from '../../screens/otherreasonscreen';
import {Howlong} from '../../screens/howlongscreen';
import {SymtomsScreen} from '../../screens/symptomsscreen';
import {Temperaturescreen} from '../../screens/temperature';
import MessageSupport from '../../screens/MessageSupport';
import HowInfoShare from '../../screens/HowInfoShared';
import EditName from '../../screens/EditName';
import EditPhone from '../../screens/EditPhone';
import EditEmail from '../../screens/EditEmail';
import EditAddress from '../../screens/EditAddress';
import EnterNewPassword from '../../screens/EnterNewPassword';
import AddPaymentMethod from '../../screens/AddPaymentMethod';
import {Healthpro} from '../../screens/createhelthproscreen';
import {Currently} from '../../screens/cureentlytakingmed';
import {Drugallergies} from '../../screens/drugalergiesscreen';
import {MedicalCondition} from '../../screens/Medicalcondionscreen';
import {Surgeries} from '../../screens/surgeriesscreen';
import {FamilyMedicalconditions} from '../../screens/familymedicalcondition';
import {Whichmedication} from '../../screens/whichmedicationscreen';
import {whichdrugallergi} from '../../screens/whichdrugallergi';
import {Whichmedicalconditions} from '../../screens/whichmedicalconditions';
import {Whichsurgeries} from '../../screens/whichsurgeri';
import {ReviewHealthprofile} from '../../screens/healthprofilereview';
import {Doyouneeddoctor} from '../../screens/doyouneeddoctor';
import AddEmployer from '../../screens/AddEmployer';
import { YourHabits } from '../../screens/yourhabits';
import { AddTEmp } from '../../screens/addyourtemperature';
import Meetourproviders from '../../screens/meetOurproviders';
import IntroductionScreen from '../../screens/introductionscreen';
import Physicans from '../../screens/physiciansscreen';
import Featureprovider from '../../screens/Featuresproviderscreen';
import ScreeningTraining from '../../screens/screeningandtrainingscreen';
import QualityOversight from '../../screens/qualityandoversight';
import MentalHealth from '../../screens/mentalhealthscreen';
import HowCanWeHelp from '../../screens/howcanwehepl';
import WhatToExpect from '../../screens/whattoexpect';
import Therapists from '../../screens/therapistscreen';
import { PharmacyMap } from '../../screens/pharmacymaplocation';
import { BeyondScreen } from '../../screens/beyondscreen';
import { ShareViste } from '../../screens/sharevist';
import { VisitDetail } from '../../screens/VisitDetail';


import FAQs from '../../screens/FAQs';
import Medical from '../../screens/Medical';
import WhatDoWeTreat from '../../screens/WhatDoWeTreat';
import Allergies from '../../screens/Allergies';
import ColdAndFlu from '../../screens/ColdAndFlu';
import SoreThroat from '../../screens/SoreThroat';
import UTIs from '../../screens/UTIs';
import Travel from '../../screens/Travel';
import SportsInjuries from '../../screens/SportsInjuries';
import SkinIssues from '../../screens/SkinIssues';
import Diarrhea from '../../screens/Diarrhea';
import EyeConditions from '../../screens/EyeConditions';
import WhatWeDontTreat from '../../screens/WhatWeDontTreat';
import HealthVisits from '../../screens/HealthVisits';
import Documents from '../../screens/Documents';
import LabTests from '../../screens/LabTests';
import Questionnaires from '../../screens/Questionnaires';
import HealthMyProviders from '../../screens/HealthMyProviders';
import Pharmacies from '../../screens/Pharmacies';
import RecoverPassword from '../../screens/RecoverPassword';
import UserVisit from '../../screens/UserVisit';
import FindingProvider from '../../screens/FindingProvider';
import ProviderReview from '../../screens/ProviderReview';
import RateProvider from '../../screens/RateProvider';
import HowLikelyRecommend from '../../screens/HowLikelyRecommend';
import ThankyouVisit from '../../screens/ThankyouVisit';
import GenerateReciept from '../../screens/GenerateReceipt';
import PayPal from '../../screens/PayPal';
import VisitHistory from '../../screens/VisitHistory';
import HowToSchedule from '../../screens/HowToSchedule';
const Stack = createNativeStackNavigator();

const Tab = createMaterialBottomTabNavigator();
export default function MainNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
      
      <Stack.Screen name="VisitDetail" component={VisitDetail} />
        <Stack.Screen name="Introsliderscreen" component={Intro} />
        <Stack.Screen name="Setting" component={Setting} />

        <Stack.Screen name="whichsurgeri" component={Whichsurgeries} />
        <Stack.Screen
          name="whichmedicalconditions"
          component={Whichmedicalconditions}
        />
        <Stack.Screen name="whichdrugallergi" component={whichdrugallergi} />
        <Stack.Screen
          name="whichmedicationscreen"
          component={Whichmedication}
        />
        {/* <Stack.Screen name="familymedicalcondition" component={FamilyMedicalconditions} /> */}
        <Stack.Screen name="surgeriesscreen" component={Surgeries} />
        {/* <Stack.Screen name="Medicalcondionscreen" component={MedicalCondition} /> */}
        <Stack.Screen name="drugalergiesscreen" component={Drugallergies} />
        {/* <Stack.Screen name="cureentlytakingmed" component={Currently} /> */}
        <Stack.Screen name="createhelthproscreen" component={Healthpro} />
        <Stack.Screen
          name="familymedicalcondition"
          component={FamilyMedicalconditions}
        />
        {/* <Stack.Screen name="surgeriesscreen" component={Surgeries} /> */}
        <Stack.Screen
          name="Medicalcondionscreen"
          component={MedicalCondition}
        />
        {/* <Stack.Screen name="drugalergiesscreen" component={Drugallergies} /> */}
        {/* <Stack.Screen name="cureentlytakingmed" component={Currently} /> */}
        {/* <Stack.Screen name="createhelthproscreen" component={Healthpro} /> */}
        <Stack.Screen name="signupscreen" component={SignUp} />
        <Stack.Screen name="signinscreen" component={SignIn} />
        <Stack.Screen name="wellcomescreen" component={Wellcome} />
        <Stack.Screen name="basicInfoscreens" component={BasicInfoScreen} />
        <Stack.Screen name="temperature" component={Temperaturescreen} />
        <Stack.Screen name="symptomsscreen" component={SymtomsScreen} />
        <Stack.Screen name="howlongscreen" component={Howlong} />
        <Stack.Screen name="otherreasonscreen" component={OtherReason} />
        <Stack.Screen name="reasonVisit" component={ReasonForDcoctor} />
        <Stack.Screen name="BottomNavs" component={MyTabs} />
        {/* <Stack.Screen name="Setting" component={Setting} /> */}
        <Stack.Screen name="beyondscreen" component={BeyondScreen} />
        <Stack.Screen
          name="meetOurproviders"
          component={Meetourproviders}
        />
         <Stack.Screen name="sharevist" component={ShareViste} />
          <Stack.Screen
          name="introductionscreen"
          component={IntroductionScreen}
        />
        

        <Stack.Screen
          name="physiciansscreen"
          component={Physicans}
        />
         <Stack.Screen
          name="Featuresproviderscreen"
          component={Featureprovider}
        />
         <Stack.Screen
          name="screeningandtrainingscreen"
          component={ScreeningTraining}
        />
        <Stack.Screen
          name="qualityandoversight"
          component={QualityOversight}
        />
         <Stack.Screen
          name="mentalhealthscreen"
          component={MentalHealth}
        />
         <Stack.Screen
          name="howcanwehepl"
          component={HowCanWeHelp}
        />
          <Stack.Screen
          name="whattoexpect"
          component={WhatToExpect}
        />
         <Stack.Screen
          name="therapistscreen"
          component={Therapists}
        />
         <Stack.Screen name="addyourtemperature" component={AddTEmp} />
      <Stack.Screen name="yourhabits" component={YourHabits} />
        <Stack.Screen name="doyouneeddoctor" component={Doyouneeddoctor} />
        <Stack.Screen
          name="healthprofilereview"
          component={ReviewHealthprofile}
        />
        {/* <Stack.Screen name="whichsurgeri" component={Whichsurgeries} /> */}
        {/* <Stack.Screen
          name="whichmedicalconditions"
          component={Whichmedicalconditions}
        /> */}
       <Stack.Screen name="pharmacymaplocation" component={PharmacyMap} />
        {/* <Stack.Screen name="surgeriesscreen" component={Surgeries} /> */}
  
        {/* <Stack.Screen name="createhelthproscreen" component={Healthpro} /> */}

        {/* <Stack.Screen
          name="familymedicalcondition"
          component={FamilyMedicalconditions}
        /> */}
       
        <Stack.Screen name="cureentlytakingmed" component={Currently} />
      

     
        {/* <Stack.Screen name="whichdrugallergi" component={whichdrugallergi} /> */}
        {/* <Stack.Screen
          name="whichmedicationscreen"
          component={Whichmedication}
        /> */}
     
        {/* <Stack.Screen name="drugalergiesscreen" component={Drugallergies} /> */}
       
        {/* <Stack.Screen
          name="Medicalcondionscreen"
          component={MedicalCondition}
        /> */}
        
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
        <Stack.Screen name="EditAddress" component={EditAddress} />
        <Stack.Screen name="EnterNewPassword" component={EnterNewPassword} />
        <Stack.Screen name="AddPaymentMethod" component={AddPaymentMethod} />
        <Stack.Screen name="AddEmployer" component={AddEmployer} />
        <Stack.Screen name="FAQs" component={FAQs} />
        <Stack.Screen name="Medical" component={Medical} />
        <Stack.Screen name="WhatDoWeTreat" component={WhatDoWeTreat} />
        <Stack.Screen name="Allergies" component={Allergies} />
        <Stack.Screen name="ColdAndFlu" component={ColdAndFlu} />
        <Stack.Screen name="SoreThroat" component={SoreThroat} />
        <Stack.Screen name="UTIs" component={UTIs} />
        <Stack.Screen name="Travel" component={Travel} />
        <Stack.Screen name="SportsInjuries" component={SportsInjuries} />
        <Stack.Screen name="SkinIssues" component={SkinIssues} />
        <Stack.Screen name="Diarrhea" component={Diarrhea} />
        <Stack.Screen name="EyeConditions" component={EyeConditions} />
        <Stack.Screen name="WhatWeDontTreat" component={WhatWeDontTreat} />
        <Stack.Screen name="HealthVisits" component={HealthVisits} />
        <Stack.Screen name="Documents" component={Documents} />
        <Stack.Screen name="LabTests" component={LabTests} />
        <Stack.Screen name="Questionnaires" component={Questionnaires} />
        <Stack.Screen name="HealthMyProviders" component={HealthMyProviders} />
        <Stack.Screen name="Pharmacies" component={Pharmacies} />
        <Stack.Screen name="RecoverPassword" component={RecoverPassword} />
        <Stack.Screen name="UserVisit" component={UserVisit} />
        <Stack.Screen name="FindingProvider" component={FindingProvider} />
        <Stack.Screen name="ProviderReview" component={ProviderReview} />
        <Stack.Screen name="RateProvider" component={RateProvider} />
        <Stack.Screen
          name="HowLikelyRecommend"
          component={HowLikelyRecommend}
        />
        <Stack.Screen name="ThankyouVisit" component={ThankyouVisit} />
        <Stack.Screen name="GenerateReciept" component={GenerateReciept} />
        <Stack.Screen name="PayPal" component={PayPal} />
        <Stack.Screen name="VisitHistory" component={VisitHistory} />
        <Stack.Screen name="HowToSchedule" component={HowToSchedule} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#be1d2d"
      barStyle={{
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.0,

        elevation: 24,
        borderTopLeftRadius: 21,
        borderTopRightRadius: 21,
        position: 'absolute',
        bottom: 0,
        zIndex: 0,
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabel: 'Home',

          tabBarIcon: ({color}) => (
            <Image
              source={images.icon2}
              style={{
                height: sizes.screenHeight * 0.033,
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
