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

export default function EditPhone() {
  const [phone, setPhone] = useState('(312) 261-1895');
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Update your phone</Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            label={'Phone'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setPhone(text)}
            value={phone}
          />
        </View>
        <View style={[styles.width,styles.top]}>
          <Text style={styles.text}>
            By providing your mobile number, you give us permission to contact
            you via text. <Text style={styles.redText}>View terms</Text>.
          </Text>
        </View>
        <View style={styles.top}>
          <TouchableOpacity >
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
