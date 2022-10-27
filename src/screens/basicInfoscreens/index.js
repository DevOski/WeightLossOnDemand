import React, {useState, useEffect} from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
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
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {CustomTextFiel} from '../../component/textFiled';
import {getTrainer, signUp} from '../../services/utilities/api/auth';
const BasicInfoScreen = ({navigation, route}) => {
  // console.log(route,"-------->basicscreen");

  // const {email, password, checked, date, isEnabled} = route?.params;
  // const {password} = route.params;
  // const {checked} = route.params;
  // const {isEnabled} = route.params;

  console.log(route.params, '-------->basicscreenparams');
  const [CheckedMale, setCheckedMale] = React.useState();
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [CheckedOther, setCheckedOther] = React.useState();
  const [name, setname] = useState('');
  const [lastname, setlastname] = useState('');
  const [phonenumber, setphonenumber] = useState('');
  const [slectnumber, setslectnumber] = useState('');
  const [middle, setMiddle] = useState('');
  const [show, setshow] = useState(false);
  const [Fieldsshowhide, setFieldsshowhide] = useState(false);
  // const [allinformation, setallinformation] = useState()
  const [Prefix, setPrefix] = useState('');
  const [gender, setgender] = useState('');
  const [Suffix, setsetSuffix] = useState('');

  // useEffect(()=>{
  //   //this will fire  at the beginning and on foto changing value
  //   if(allinformation){
  //     // navigation.navigate('basicInfoscreens')
  //     console.log(allinformation,'useeffectallinformation');
  //   }
  //  },[allinformation])

  const toogle = () => {
    setshow(!show);
  };
  const ShowFiled = () => {
    setFieldsshowhide(!Fieldsshowhide);
  };

  const Continue = async () => {
    // )  name,
    //     middle,
    //     lastname,
    //     email,
    //     password,
    //     gender,
    //     Prefix,
    //     Suffix,
    //     phonenumber,
    //     isEnabled,
    // navigation.navigate('wellcomescreen')

    try {
      let response = await signUp(
        name,
        middle,
        lastname,
        route?.params?.email,
        route?.params?.password,
        gender,
        Prefix,
        Suffix,
        phonenumber,
        slectnumber,
        route?.params?.date,
        isEnabled ? 1 : 0,
        // route?.params?.isEnabled,
      );
      console.log(response.data);
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.inercontainer}>
          <View style={styles.basicinfocontainer}>
            <Text style={styles.basicinfo}> Basic Info</Text>
          </View>
          <View style={styles.spayrainfo}>
            <Text style={styles.basicinfophyra}>
              Please tell us some basic info to complete{' '}
            </Text>
            <Text style={styles.basicinfophyra}> your profile</Text>
          </View>
          <View>
            {Fieldsshowhide ? (
              <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'Prefix'}
                  value={Prefix}
                  setValue={setPrefix}
                />
              </View>
            ) : null}

            <View style={styles.filedcon}>
              <CustomTextFiel
                label={'First Name'}
                value={name}
                setValue={setname}
              />
            </View>
            {Fieldsshowhide ? (
              <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'Middle Name'}
                  value={middle}
                  setValue={setMiddle}
                />
              </View>
            ) : null}
            <View style={styles.filedcon}>
              <CustomTextFiel
                label={'Last Name'}
                value={lastname}
                setValue={setlastname}
              />
            </View>
            {Fieldsshowhide ? (
              <View style={styles.filedcon}>
                <CustomTextFiel
                  label={'Suffix'}
                  value={Suffix}
                  setValue={setsetSuffix}
                />
              </View>
            ) : null}

            <View style={styles.inonecon}>
              <View style={styles.twoitem}>
                <CustomTextFiel
                  label={'Phone number'}
                  value={phonenumber}
                  setValue={setphonenumber}
                />
              </View>
              <View style={styles.twoitem}>
                <TouchableOpacity onPress={toogle}>
                  <View
                    style={{
                      width: sizes.screenWidth * 0.4,
                      left: sizes.screenWidth * 0.05,
                    }}>
                    <CustomTextFiel
                      label={'Mobile'}
                      value={slectnumber}
                      setValue={setslectnumber}
                      editable={false}
                    />
                  </View>
                  <MaterialIcons
                    name="expand-more"
                    color={colors.secondary}
                    style={styles.icon}
                    size={20}
                    onPress={toogle}
                  />
                </TouchableOpacity>
                {show ? (
                  <View style={[styles.pap, styles.right]}>
                    <Text
                      style={styles.lstyle}
                      onPress={() => {
                        setslectnumber('Mobile');
                        setshow(!show);
                      }}>
                      Mobile
                    </Text>
                    <Text
                      style={styles.lstyle}
                      onPress={() => {
                        setslectnumber('Work');
                        setshow(!show);
                      }}>
                      Work
                    </Text>
                    <Text
                      style={styles.lstyle}
                      onPress={() => {
                        setslectnumber('Home');
                        setshow(!show);
                      }}>
                      Home
                    </Text>
                  </View>
                ) : null}
              </View>
            </View>
            <View style={styles.expndbuttoncontainer}>
              <TouchableOpacity onPress={ShowFiled}>
                {!Fieldsshowhide ? (
                  <>
                    <Text style={styles.lstyle}>COLLAPSE</Text>
                    <MaterialIcons
                      name="expand-more"
                      color={colors.secondary}
                      style={!Fieldsshowhide ? styles.iconexp : styles.iconexp2}
                      size={20}
                    />
                  </>
                ) : (
                  <>
                    <Text style={styles.lstyle}> Expand</Text>
                    <MaterialIcons
                      name="expand-less"
                      color={colors.secondary}
                      style={!Fieldsshowhide ? styles.iconexp : styles.iconexp2}
                      size={20}
                    />
                  </>
                )}
                {/* {!Fieldsshowhide ? (
                  <MaterialIcons
                    name="expand-less"
                    color={colors.secondary}
                    style={!Fieldsshowhide ? styles.iconexp : styles.iconexp2}
                    size={20}
                  />
                ) : (
                  <MaterialIcons
                    name="expand-more"
                    color={colors.secondary}
                    style={!Fieldsshowhide ? styles.iconexp : styles.iconexp2}
                    size={20}
                  />
                )} */}
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.genContainer}>
            <Text style={styles.lstyle}>GENDER</Text>
          </View>
          <View style={styles.gcon}>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Male</Text>
              <RadioButton
                status={CheckedMale ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedMale(!CheckedMale);
                  setgender('Male');
                  setCheckedFemale(false);
                  setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Female</Text>
              <RadioButton
                status={CheckedFemale ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedFemale(!CheckedFemale);
                  setgender('Female');
                  setCheckedMale(false);
                  setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Other</Text>
              <RadioButton
                status={CheckedOther ? 'checked' : 'unchecked'}
                onPress={() => {
                  setCheckedOther(!CheckedOther);
                  setgender('Other');
                  setCheckedMale(false);
                  setCheckedFemale(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
          </View>
          <View style={styles.termspayra}>
            <View style={styles.r}>
              <Text style={styles.tremtext}>
                By providing your Mobile number,you give us permission to
                contact you via text.
              </Text>
              <TouchableOpacity>
                <Text style={styles.tremtextbutt}>View terms.</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.buttocon}>
            <TouchableOpacity onPress={Continue}>
              <View style={styles.buttoconSTYLE}>
                <Text style={styles.continue}>Continue</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicInfoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inercontainer: {
    padding: sizes.screenWidth * 0.04,
  },
  basicinfo: {
    right: sizes.screenWidth * 0.02,
    fontSize: fontSize.h4,
    fontWeight: '700',
    color: colors.black,
  },
  basicinfophyra: {
    fontSize: fontSize.h6,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'auto',
  },
  basicinfocontainer: {
    paddingBottom: sizes.screenHeight * 0.03,
  },
  spayrainfo: {
    // paddingBottom: sizes.screenHeight * 0.05,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.03,
  },
  twoitem: {
    paddingRight: sizes.screenWidth * 0.03,
    paddingLeft: sizes.screenWidth * 0.03,
    marginBottom: deviceHeight * 0.03,
    width: sizes.screenWidth * 0.5,
  },
  inonecon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon: {
    position: 'absolute',
    left: sizes.screenWidth * 0.36,
    top: sizes.screenHeight * 0.03,
    fontSize: fontSize.h2,
    // flexDirection:'row'
  },
  iconexp: {
    position: 'absolute',
    left: sizes.screenWidth * 0.22,
    top: sizes.screenHeight * 0.01,
    fontSize: fontSize.h2,
  },
  iconexp2: {
    position: 'absolute',
    left: sizes.screenWidth * 0.22,
    top: sizes.screenHeight * 0.01,
    fontSize: fontSize.h2,
  },
  pap: {
    width: sizes.screenWidth * 0.3,
    heigh: sizes.screenHeight * 0.9,
    backgroundColor: colors.white,
  },
  lstyle: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
    fontFamily: fontFamily.appTextMedium,
  },
  right: {
    left: sizes.screenWidth * 0.1,
  },
  expndbuttoncontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  genContainer: {
    width: sizes.screenWidth * 0.9,
    marginTop: sizes.screenHeight * 0.05,
    paddingLeft: sizes.screenWidth * 0.04,
    height: sizes.screenHeight * 0.08,
    backgroundColor: colors.lightGray,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  gcon: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  termspayra: {
    paddingTop: sizes.screenHeight * 0.06,
  },
  tremtext: {
    fontSize: fontSize.large,
    fontFamily: fontFamily.appTextRegular,
  },
  tremtextbutt: {
    position: 'relative',
    top: sizes.screenHeight * 0.03,
    right: sizes.screenWidth * 0.19,
    fontSize: fontSize.medium,
    color: colors.secondary,
    fontFamily: fontFamily.appTextLight,
    fontWeight: '700',
  },
  buttocon: {
    paddingTop: sizes.screenHeight * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttoconSTYLE: {
    width: sizes.screenWidth * 0.93,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.secondary,
    justifyContent: 'center',
    alignItems: 'center',
  },
  continue: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '600',
  },
  ro: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: sizes.screenWidth * 0.01,
  },
  r: {
    flexDirection: 'row',
  },
});
