import React, {useState, useEffect} from 'react';
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
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import Error from '../../components/Error';
import Loader from '../../components/Loader';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {signIn} from '../../services/utilities/api/auth';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const SignIn = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const [sigindata, setsigindata] = useState();
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  // useEffect(()=>{
  //   //this will fire  at the beginning and on foto changing value
  //   if(sigindata){
  //     navigation.navigate('BottomNavs')
  //   }
  //  },[sigindata])

  const Sigin = async () => {
    if (email && password) {
      try {
        setLoader(true);
        setTimeout(async () => {
          let response = await signIn(email, password);
          console.log(response.data);
          if (response.data.message == 'user found') {
            console.log(response.data.data);
            setError(false);
            // navigation.navigate('BottomNavs');
            setLoader(false);
          } else {
            console.log(response.data.message);
            setError(true);
            setErrorMessage(response.data.message);
            setLoader(false);
          }
        }, 200);
      } catch (error) {
        setError(true);
        setErrorMessage(error.message);
        setLoader(false);
      }
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
              onPress={() => navigation.navigate('signupscreen')}>
              <Text style={styles.fontstyleigin}>Sign Up</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Email'} value={email} setValue={setemail} />
          </View>

          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Password'}
              value={password}
              setValue={setpassword}
            />
          </View>
          <View style={styles.filedcontext}>
            <Text style={styles.text}>Enable Fingerprint for Login</Text>
            <View>
              <Switch
                trackColor={{false: '#767577', true: colors.secondary}}
                thumbColor={isEnabled ? '#000' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSwitch}
                value={isEnabled}
              />
            </View>
          </View>
          <View style={styles.filedcon}>
            <TouchableOpacity
              onPress={() => navigation.navigate('RecoverPassword')}>
              <Text style={styles.forgotpass}>I forgot my Password</Text>
            </TouchableOpacity>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <View style={styles.filedconbutton}>
              <TouchableOpacity
                disabled={email != '' && password != '' ? false : true}
                style={email && password ? styles.but : styles.disabledView}
                onPress={Sigin}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: '600',
                  }}>
                  Sign In
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      {loader && <Loader />}
      {error && <Error title={'Oops!'} message={errorMessage} />}
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
    fontSize: fontSize.h5,
    color: '#be1d2d',
    fontWeight: '700',
    fontFamily: fontFamily.appTextRegular,
  },
  filedContainer: {
    paddingTop: deviceHeight * 0.05,
  },
  filedcon: {
    paddingLeft: deviceWidth * 0.01,
    marginBottom: deviceHeight * 0.03,
  },
  filedcontext: {
    marginTop: deviceHeight * 0.03,
    paddingLeft: deviceWidth * 0.01,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: deviceHeight * 0.02,
  },
  text: {
    fontSize: fontSize.h6,
    color: '#000',
    fontFamily: fontFamily.appTextRegular,
  },
  forgotpass: {
    color: '#be1d2d',
    fontSize: fontSize.h6,
    fontWeight: '700',
    marginLeft: deviceWidth * 0.01,
    fontFamily: fontFamily.appTextHeading,
  },
  but: {
    backgroundColor: colors.secondary,
    width: deviceWidth * 0.93,
    height: sizes.screenHeight * 0.06,
    justifyContent: 'center',
    left: sizes.TinyMargin,
    alignItems: 'center',
  },
  filedconbutton: {
    width: sizes.screenWidth * 0.9,
    paddingTop: deviceHeight * 0.0,
    marginBottom: deviceHeight * 0.02,
    justifyContent: 'center',
    alignItems: 'center',
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
