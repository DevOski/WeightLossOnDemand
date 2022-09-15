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
        <Stack.Screen name="BottomNavs" component={MyTabs} />
        <Stack.Screen name="SharePromo" component={SharePromo} />
        <Stack.Screen name="PaymentMethod" component={PaymentMethod} />
        <Stack.Screen name="ApplyCoupon" component={ApplyCoupon} />
        <Stack.Screen name="ContactInfo" component={ContactInfo} />
        <Stack.Screen name="ChangePassword" component={ChangePassword} />
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
