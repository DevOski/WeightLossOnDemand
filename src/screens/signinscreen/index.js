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
import Logo from '../../assets/assets/logo.png';
import {CustomTextFiel} from '../../component/textFiled';
import { colors, sizes } from '../../services';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const SignIn = ({navigation}) => {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  return (
    <SafeAreaView style={styles.bg}>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
          <View>
            <TouchableOpacity onPress={()=>navigation.navigate("signupscreen")}>
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
            <Text style={styles.forgotpass}>I forgot my Password</Text>
          </View>
         <View style={{justifyContent:'center',alignItems:'center'}}>
         <View style={styles.filedconbutton}>
          <TouchableOpacity style={styles.but} onPress={()=>navigation.navigate("BottomNavs")}>
            <Text style={{color: '#fff',fontSize:20}}>Sign In</Text>
          </TouchableOpacity>
          </View>
         </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  bg: {
    backgroundColor: '#fff',
    flex:1,
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
    fontWeight:"700",
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
    fontSize: 18,
    color: '#000',
  },
  forgotpass:{
    color:"#be1d2d",
    fontSize: 18,
    fontWeight:"700",
    marginLeft:deviceWidth*0.01
  },
  but: {
    backgroundColor: colors.secondary,
    width: deviceWidth * 0.9,
    height: deviceHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  filedconbutton:{
    width:sizes.screenWidth*0.9,
    paddingTop:deviceHeight*0.0,
    marginBottom: deviceHeight * 0.02,
    justifyContent:'center',
    alignItems:'center'
  }
});
