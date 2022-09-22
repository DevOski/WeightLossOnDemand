import React, {useState} from 'react';
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
import { Checkbox } from 'react-native-paper';
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import { colors,fontSize, sizes } from '../../services';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const SignUp = ({navigation}) => {
    const [isEnabled, setIsEnabled] = useState(false);
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const [checked, setChecked] = React.useState(false);
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate("signinscreen")}>
              <Text style={styles.fontstyleigin}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filedContainer}>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Email'} value={email} setValue={setemail} />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Date of birth'} value={email} setValue={setemail} />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel label={'Password'} value={password} setValue={setpassword} />
          </View>

          <View style={styles.filedcon}>
            <View style={styles.fleix}>

          <AntDesign name="checkcircle" color={colors.secondary} size={20} />
          <Text style={styles.fontcheck}>8 characters minimum</Text>
            </View>
          </View>
          <View style={styles.filedcon}>
            <View style={styles.fleix}>

          <AntDesign name="checkcircle" color={colors.secondary} size={20} />
          <Text style={styles.fontcheck}>One uppercase and one lowercase </Text>
            </View>
          </View>
          <View style={styles.filedcon}>
            <View style={styles.fleix}>

          <AntDesign name="checkcircle" color={colors.secondary} size={20} />
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
            <Text style={styles.text}>I agree to the Doctor On Demands</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('membershiptermscreens')}>
            <Text style={styles.text1}>Membership Terms</Text>
            </TouchableOpacity>
         </View>
          </View>
          <View style={styles.filedconbutton}>
          <TouchableOpacity style={styles.but} onPress={()=>navigation.navigate("basicInfoscreens")}>
            <Text style={{color: '#fff',fontSize:20}}>Create Account</Text>
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
  },
  filedContainer: {
    paddingTop: deviceHeight * 0.05,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.02,
  },
  fleix:{
    flexDirection:'row',
    alignItems:'center'
  },
  fontcheck:{
    marginLeft:sizes.screenHeight*0.02,
    fontSize:fontSize.h6,
    color: '#000',
    // fontWeight: '400',
  },
  but: {
    backgroundColor: colors.secondary,
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filedconbutton:{
    paddingTop:deviceHeight*0.0,
    marginBottom: deviceHeight * 0.02,
    justifyContent:'center',
    alignItems:'center'
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
  },
  text1:{
    fontSize: fontSize.h7,
    color: '#be1d2d',
  },
  ddemand:{
    
  }
});
