import React, {useEffect, useState} from 'react';
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
  Switch,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {Checkbox} from 'react-native-paper';
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import {Button} from 'react-native-paper';
import {DatePickerModal} from 'react-native-paper-dates';
import {colors, fontFamily, fontSize, sizes} from '../../services';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import moment from 'moment';
export const SignUp = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [checked, setChecked] = React.useState(false);
  const [date, setDate] = useState('');
  const [open, setOpen] = useState(false);
  const [register, setregister] = useState();

  useEffect(() => {
    //this will fire  at the beginning and on foto changing value
    if (register) {
      navigation.navigate('basicInfoscreens', {register: register});
    }
  }, [register]);

  const onDismissSingle = () => {
    setOpen(false);
  };

  const onConfirmSingle = date => {
    console.log('------>>', date);
    let test = JSON.stringify(date);
    let d1 = JSON.parse(test);
    let res = moment(d1.date).format('DD/MM/YYYY');
    console.log(res);
    setDate(res);
    // setDate(date);
    setOpen(false);
    // res=""
   
  };

  const Sinup =  () => {
    // console.log(email,
    //   password,
    //   checked,
    //   isEnabled,
    //   date,'----------->');

    if (email && password && checked && date) {
      // console.log(email,
      //   password,
      //   checked,
      //   isEnabled,
      //   date,'----------->');
      navigation.navigate('basicInfoscreens', {
        email,
        password,
        checked,
        // isEnabled,
        date,
      });
      // setregister()
    }
  };
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
          <View>
            <TouchableOpacity
              onPress={() => navigation.navigate('signinscreen')}>
              <Text style={styles.fontstyleigin}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Email'} value={email} setValue={setemail} />
          </View>
          <View style={styles.filedcon}>
            {date ? (
              <TouchableOpacity style={styles.datebutton}
              onPress={() => setOpen(!open)}
              >
                <Text style={styles.datebuttontext}>{date && date}</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                style={styles.datebutton}
                onPress={() => setOpen(!open)}
                uppercase={false}>
                <Text style={styles.datebuttontext}>Date of birth</Text>
              </TouchableOpacity>
            )}
            <DatePickerModal
              locale="en"
              mode="single"
              visible={open}
              onDismiss={onDismissSingle}
              date={date}
              onConfirm={onConfirmSingle}

              // validRange={{
              //   startDate: new Date(2021, 1, 2),  // optional
              //   endDate: new Date(), // optional
              //   disabledDates: [new Date()] // optional
              // }}
              // onChange={} // same props as onConfirm but triggered without confirmed by user
              // saveLabel="Save" // optional
              // saveLabelDisabled={true} // optional, default is false
              // uppercase={false} // optional, default is true
              // label="Select date" // optional
              // animationType="slide" // optional, default is 'slide' on ios/android and 'none' on web
              // startYear={2000} // optional, default is 1800
              // endYear={2100} // optional, default is 2200
              // closeIcon="close" // optional, default is "close"
              // editIcon="pencil" // optional, default is "pencil"
              // calendarIcon="calendar" // optional, default is "calendar"
            />
            {/* <CustomTextFiel
              label={'Date of birth'}
              value={email}
              setValue={setemail}
            /> */}
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Password'}
              value={password}
              setValue={setpassword}
              secureTextEntry={true}
            />
          </View>

          <View style={styles.filedcon}>
            <View style={styles.fleix}>
              <AntDesign
                name="checkcircle"
                color={
                  password?.length > 8 ? colors.secondary : colors.disabledBg
                }
                size={20}
              />
              <Text style={styles.fontcheck}>8 characters minimum</Text>
            </View>
          </View>
          <View style={styles.filedcon}>
            <View style={styles.fleix}>
              <AntDesign
                name="checkcircle"
                color={
                  password?.toUpperCase() && password !=password?.match(/\d/)  ? colors.secondary : colors.disabledBg
                }
                size={20}
              />
              <Text style={styles.fontcheck}>
                One uppercase and one lowercase{' '}
              </Text>
            </View>
          </View>
          <View style={styles.filedcon}>
            <View style={styles.fleix}>
              <AntDesign
                name="checkcircle"
                color={
                  password?.match(/\d/) && password != password?.toUpperCase() ? colors.secondary : colors.disabledBg
                }
                size={20}
              />
              <Text style={styles.fontcheck}>One number minimum</Text>
            </View>
          </View>
          <View style={styles.filedcontext}>
            <Text style={styles.text}>Enable Fingerprint for Login</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: 'red'}}
                thumbColor={isEnabled ? '#000' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.filedcontext1}>
            <Checkbox
              status={checked ? 'checked' : 'unchecked'}
              onPress={() => {
                setChecked(!checked);
              }}
              color={'#be1d2d'}
              uncheckColor={colors.secondary}
            />
            <View style={styles.ddemand}>
              <Text style={styles.text}>
                I agree to the Weight Loss On Demands
              </Text>
              <TouchableOpacity
                onPress={() => navigation.navigate('membershiptermscreens')}>
                <Text style={styles.text1}>Membership Terms</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.filedconbutton}>
            <TouchableOpacity
              disabled={
                password?.length > 8 &&
                password?.toUpperCase() &&
                password?.match(/\d/) &&
                email &&
                date
                  ? false
                  : true
              }
              style={
                password?.length > 8 &&
                password?.toUpperCase() &&
                password?.match(/\d/) &&
                email &&
                date
                  ? styles.but
                  : styles.disabledView
              }
              onPress={Sinup}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: fontSize.h6,
                  fontFamily: fontFamily.appTextHeading,
                  fontWeight: '600',
                }}>
                Create Account
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex: 1,
  },
  container: {
    paddingLeft: deviceWidth * 0.02,
    paddingRight: deviceWidth * 0.04,
    paddingTop: deviceHeight * 0.03,
  },
  logoalign: {
    width: deviceWidth * 0.4,
    height: deviceHeight * 0.06,
  },
  hederstyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontstyleigin: {
    fontSize: 20,
    color: '#be1d2d',
    fontWeight: '700',
    fontFamily: fontFamily.appTextRegular,
  },
  filedContainer: {
    paddingTop: deviceHeight * 0.05,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.02,
  },
  fleix: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontcheck: {
    marginLeft: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: colors.primary,
    fontFamily: fontFamily.appTextRegular,
    // fontWeight: '400',
  },
  but: {
    backgroundColor: colors.secondary,
    width: deviceWidth * 0.93,
    height: sizes.screenHeight * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
    left: sizes.TinyMargin,
  },
  filedconbutton: {
    paddingTop: deviceHeight * 0.0,
    marginBottom: deviceHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filedcontext: {
    marginTop: deviceHeight * 0.02,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.03,
  },
  filedcontext1: {
    marginTop: deviceHeight * 0.02,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.03,
  },
  text: {
    fontSize: fontSize.h6,
    color: '#000',
    fontFamily: fontFamily.appTextRegular,
  },
  text1: {
    fontSize: fontSize.medium,
    color: '#be1d2d',
    fontFamily: fontFamily.appTextRegular,
  },
  bt: {
    backgroundColor: 'none',
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  datebutton: {
    // backgroundColor:'red',
    // justifyContent:'flex-start',
    // marginRight:sizes.screenWidth*0.9,
    // width:sizes.screenWidth*0.4,
    // height:sizes.screenHeight*0.4,
    color: 'black',
    borderBottomWidth: 1,
    borderBottomColor: colors.disabledBg,
    paddingBottom: sizes.screenHeight * 0.05,
    // position:'absolute'
  },
  datebuttontext: {
    color: colors.black,
    fontSize: fontSize.large,
    top: sizes.screenHeight * 0.02,
    // alignSelf:'flex-start'

    // position:'absolute'
  },
});
