import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function EnterNewPassword({navigation, route}) {
  const [showPassword, setShowPassword] = useState(true);
  const [showPassword2, setShowPassword2] = useState(true);
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Enter New Password</Text>
        </View>
        <View style={[styles.paddingLeft]}>
          <Text style={styles.text}>
            In order to update your password, please verify your current
            password.
          </Text>
        </View>
        <View style={styles.padding}>
          <TextInput
            mode="contain"
            label={'New password'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setPassword(text)}
            value={password}
            secureTextEntry={!showPassword}
            right={
              <TextInput.Icon
                icon={showPassword ? 'eye' : 'eye-off'}
                onPress={() => setShowPassword(!showPassword)}
                color={colors.disabledBg2}
              />
            }
          />
          <View style={styles.paddingTop}>
            <TextInput
              mode="contain"
              label={'Confirm new password'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setConfirmPassword(text)}
              value={confirmPassword}
              secureTextEntry={!showPassword2}
              right={
                <TextInput.Icon
                  icon={showPassword2 ? 'eye' : 'eye-off'}
                  onPress={() => setShowPassword2(!showPassword2)}
                  color={colors.disabledBg2}
                />
              }
            />
          </View>
          <View style={styles.paddingTop}>
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
                    password?.toUpperCase() ? colors.secondary : colors.disabledBg
                  }
                  size={20}
                />
                <Text style={styles.fontcheck}>
                  One uppercase and one lowercase{' '}
                </Text>
              </View>
            </View>
            <View style={[styles.filedcon,styles.paddingBottom]}>
              <View style={styles.fleix}>
                <AntDesign
                  name="checkcircle"
                  color={
                    password?.match(/\d/) ? colors.secondary : colors.disabledBg
                  }
                  size={20}
                />
                <Text style={styles.fontcheck}>One number minimum</Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate(route?.params?.screenName)}
              disabled={password !== ''  && confirmPassword !== '' &&  password == confirmPassword  ?  false : true}>
              <View
                style={
                  password !== '' && confirmPassword !== '' &&  password == confirmPassword  
                    ? styles.buttonView
                    : styles.disabledView
                }>
                <Text style={styles.buttonText}> Save Changes</Text>
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.buttnView}>
            <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
              <View style={styles.buttonView1}>
                <Text style={styles.buttnText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
