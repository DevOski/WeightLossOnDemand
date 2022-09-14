import React,{useState} from 'react';
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
import Logo from '../../assets/assets/logo.png';
import { CustomTextFiel } from '../../component/textFiled';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;

export const SignUp = () => {
    const [email, setemail] = useState()
    const [password, setpassword] = useState()
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <View style={styles.hederstyling}>
          <View style={styles.logoalign}>
            <Image source={Logo} style={{width: '100%', height: '100%'}} />
          </View>
          <View>
            <TouchableOpacity>
              <Text style={styles.fontstyleigin}>Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.filedContainer}>
          <CustomTextFiel
            placeholder={'email'}
            value={email}
            setValue={setemail}
          />
          <CustomTextFiel
            placeholder={'Password'}
            value={password}
            setValue={setpassword}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingLeft: deviceWidth * 0.02,
    paddingRight: deviceWidth * 0.04,
    paddingTop: deviceHeight * 0.02,
  },
  logoalign: {
    width: deviceWidth * 0.4,
    height: deviceHeight * 0.05,
  },
  hederstyling: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  fontstyleigin: {
    fontSize: 20,
    color: '#be1d2d',
  },
});
