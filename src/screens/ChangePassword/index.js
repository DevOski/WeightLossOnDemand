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
import {useSelector} from 'react-redux';
import Loader from '../../components/Loader';
import {signIn} from '../../services/utilities/api/auth';
import Error from '../../components/Error';

export default function ChangePassword({navigation, route}) {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);

  const email = useSelector(state => state.user.email);
  const verifyPassword = () => {
    try {
      setLoader(true);
      setTimeout(async () => {
        let response = await signIn(email, password);
        setLoader(false);
        if (response.data.message == 'user found') {
          navigation.navigate(route?.params?.screenName);
          setError(false);
          setLoader(false);
        } else {
          setError(true);
          setErrorMessage('Invalid password');
          setLoader(false);
        }
      }, 100);
    } catch (error) {
      console.log('err', error);
      setError(true);
      setErrorMessage(error.message);
      setLoader(false);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Please login first</Text>
        </View>
        <View style={[styles.paddingLeft]}>
          <Text style={styles.text}>
            In order to update your {route?.params?.title}, please verify your
            current password.
          </Text>
        </View>
        <View style={styles.padding}>
          <TextInput
            mode="contain"
            label={'Enter password'}
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
            <TouchableOpacity
              onPress={verifyPassword}
              disabled={password !== '' ? false : true}>
              <View
                style={
                  password !== '' ? styles.buttonView : styles.disabledView
                }>
                <Text style={styles.buttonText}> Verify Password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        {loader && <Loader />}
        {error && <Error title={'Oops!'} message={errorMessage} />}
      </ScrollView>
    </SafeAreaView>
  );
}
