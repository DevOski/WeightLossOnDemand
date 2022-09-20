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

export default function ChangePassword({navigation,route}) {
  const [showPassword, setShowPassword] = useState(true);
  const [password, setPassword] = useState('');
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
            In order to update your password, please verify your current
            password.
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
              />
            }
          />
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={()=>navigation.navigate(route?.params?.screenName)} disabled={password !== '' ? false : true}>
              <View
                style={
                  password !== '' ? styles.buttonView : styles.disabledView
                }>
                <Text style={styles.buttonText}> Verify Password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
