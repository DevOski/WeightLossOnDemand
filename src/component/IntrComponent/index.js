import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import intro1 from '../../assets/assets/intro1.jpg';
import icon from '../../assets/icon.png';
import ladyy from '../../assets/assets/ladyy.jpg';
import ss from '../../assets/assets/ss.png';
import locationimg from '../../assets/assets/locationimg.png';
import lasslid from '../../assets/assets/lasslid.jpg';
import kiid from '../../assets/assets/kiid.jpg';
import dit from '../../assets/assets/dit.jpg';
import bac from '../../assets/assets/bac.jpg';
import lef from '../../assets/assets/lef.jpg';
import fatty from '../../assets/assets/fatty.jpg';




import {colors, fontFamily, fontSize, sizes} from '../../services';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

const Component = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.img}>
        <Image style={{width: '100%', height: '100%'}} source={intro1} />
      </View>
      <View style={styles.icon}>
        <Image style={{width: '100%', height: '100%'}} source={icon} />
      </View>
      <View style={styles.payragraphcon}>
        <Text style={styles.payragraphcontext}>
          Weight Loss on Demand It is simple to schedule on-demand appointments
          with top-rated gym specialists with Weight Loss on Demand.
        </Text>
      </View>
      {/* <View style={styles.footer}>
                 <TouchableOpacity onPress={()=>navigation.navigate("signinscreen")}>
                   <Text style={styles.fontsiginandsignup}>Sign In</Text>
                 </TouchableOpacity>
                
 
                 <TouchableOpacity  onPress={()=>navigation.navigate("signupscreen")}>
                   <Text style={styles.fontsiginandsignup}>Sign Up</Text>
                 </TouchableOpacity>
               </View> */}
    </View>
  );
};

const Componentsecond = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: deviceHeight * 0.05,
        }}>
        <View style={styles.three1}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 100}}
            source={lef}
          />
        </View>
        <View style={styles.three}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 200}}
            source={bac}
          />
        </View>
        <View style={styles.three3}>
          <Image
            style={{width: '100%', height: '100%', borderRadius: 100}}
            source={fatty}
          />
        </View>
      </View>

      <View style={styles.margintop}>
        <View style={styles.screnintro2img}>
          <Image style={{width: '100%', height: '100%'}} source={dit} />
        </View>
      </View>
      <View style={styles.payragraphcon}>
        <Text style={styles.payragraphcontext}>
          Complete Health Improvement in a Digital Environment Your personal
          trainer will provide you with different sets of exercises from which
          to choose.
        </Text>
      </View>
      {/* <View style={{paddingTop:sizes.screenHeight*0.05 }}>
      <View style={styles.footer}>
                 <TouchableOpacity onPress={()=>navigation.navigate("signinscreen")}>
                   <Text style={styles.fontsiginandsignup}>Sign In</Text>
                 </TouchableOpacity>
                
 
                 <TouchableOpacity  onPress={()=>navigation.navigate("signupscreen")}>
                   <Text style={styles.fontsiginandsignup}>Sign Up</Text>
                 </TouchableOpacity>
               </View>
               </View> */}
    </View>
  );
};

const Componentthrd = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={{marginTop: deviceHeight * 0.09}}>
        <View style={styles.loc}>
          <Image style={{width: '100%', height: '100%'}} source={locationimg} />
        </View>
      </View>
      <View style={styles.payragraphcon}>
        <Text style={styles.payragraphcontext}>
          Your provider will send prescriptions to the pharmacy of your choice.
        </Text>
      </View>
      {/* <View style={{paddingTop:sizes.screenHeight*0.09 }}>
      <View style={styles.footer}>
                 <TouchableOpacity onPress={()=>navigation.navigate("signinscreen")} >
                   <Text style={styles.fontsiginandsignup}>Sign In</Text>
                 </TouchableOpacity>
                
 
                 <TouchableOpacity  onPress={()=>navigation.navigate("signupscreen")}>
                   <Text style={styles.fontsiginandsignup}>Sign Up</Text>
                 </TouchableOpacity>
               </View>
               </View> */}
    </View>
  );
};
const ComponentFour = () => {
  const navigation = useNavigation();
  return (
    <>
      <View style={styles.forslid}>
        <View style={styles.forslidtext}>
          <Text style={[styles.payragraphcontext, styles.bold]}>
            TOTAL VIRTUAL CARE
          </Text>
        </View>
        <View style={styles.forslidtext}>
          <Text style={styles.payragraphcontext}>
            Your provider will send prescriptions to the pharmacy of your
            choice.
          </Text>
        </View>

        <View style={{top: sizes.screenHeight * 0.1}}>
          <View style={styles.kidd}>
            <Image style={{width: '100%', height: '100%'}} source={lasslid} />
          </View>
          <View
            style={{
              position: 'absolute',
              top: deviceHeight * 0.48,
              // zIndex:999999,
              left: deviceWidth * 0.03,
            }}>
            <TouchableOpacity
              style={styles.but}
              onPress={() => navigation.navigate('signupscreen')}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: fontSize.h6,
                  fontFamily: fontFamily.appTextHeading,
                  fontWeight: '600',
                }}>
                Sign Up
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

export {Component, Componentsecond, Componentthrd, ComponentFour};
const styles = StyleSheet.create({
  img: {
    width: deviceWidth,
    height: deviceHeight * 0.5,
  },
  icon: {
    width: deviceWidth * 0.12,
    height: deviceHeight * 0.06,
    marginTop: deviceHeight * -0.03,
  },
  container: {
    width: deviceWidth,
    // height:sizes.screenHeight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  payragraphcon: {
    paddingLeft: deviceWidth * 0.09,
    paddingRight: deviceHeight * 0.05,
    marginTop: deviceHeight * 0.1,
    paddingBottom: deviceHeight * 0.1,
  },
  payragraphcontext: {
    fontSize: fontSize.h5,
    textAlign: 'center',
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
  },
  bold: {
    fontWeight: 'bold',
  },
  three: {
    width: deviceWidth * 0.33,
    height: deviceHeight * 0.18,
  },
  three1: {
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.08,
    marginRight: deviceWidth * 0.05,
  },
  three3: {
    marginLeft: deviceWidth * 0.05,
    width: deviceWidth * 0.15,
    height: deviceHeight * 0.08,
  },
  screnintro2img: {
    width: deviceWidth * 0.5,
    height: deviceHeight * 0.2,
  },
  margintop: {
    marginTop: deviceHeight * 0.1,
  },
  loc: {
    width: deviceWidth * 0.6,
    height: deviceHeight * 0.4,
  },
  kidd: {
    position: 'absolute',
    top: deviceHeight * 0.1,
    width: deviceWidth,
    height: deviceHeight * 0.8,
  },
  but: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.94,
    justifyContent: 'center',
    alignItems: 'center',
    // position: 'absolute',
  },
  footer: {
    width: sizes.screenWidth,
    marginTop: deviceHeight * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: deviceWidth * 0.05,
    paddingRight: deviceWidth * 0.05,
    borderTopWidth: deviceWidth * 0.001,
    paddingTop: deviceHeight * 0.02,
  },
  fontsiginandsignup: {
    fontSize: fontSize.h5,
    color: colors.secondary,
  },
  forslid: {
    width: deviceWidth,
    height: deviceHeight,
  },
  forslidtext: {
    marginTop: deviceHeight * 0.08,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: deviceWidth * 0.09,
    paddingRight: deviceHeight * 0.05,
  },
});
