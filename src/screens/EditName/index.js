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

export default function EditName() {
  const [firstName, setFirstName] = useState('Tester');
  const [lastName, setLastName] = useState('Jazzy');
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Update your name</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'First Name'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setFirstName(text)}
            value={firstName}
          />
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Last Name'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setLastName(text)}
            value={lastName}
          />
        </View>
        <View style={styles.top}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
