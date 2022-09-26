import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';

export default function RecoverPassword() {
  const [email, setEmail] = useState('');
  return (
    <SafeAreaView>
      <Header title={'Recover Password'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Please enter your email address and we will send you a link to reset
            your password:
          </Text>
          <View style={styles.width}>
            <TextInput
              mode="contain"
              label={'Email address'}
              activeUnderlineColor={colors.secondary}
              style={styles.field}
              onChangeText={text => setEmail(text)}
              value={email}
            />
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity
            // onPress={() => navigation.navigate('GetCare')}
            >
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Recover my password</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
