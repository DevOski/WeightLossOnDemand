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

export default function EditEmail() {
  const [email, setEmail] = useState('testerjazzy586@gmail.com');
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Update your email</Text>
        </View>
        <View style={[styles.width]}>
          <Text style={styles.text}>
            In the future, you will use your new email address to sign into the
            app.
          </Text>
        </View>
        <View style={styles.width}>
          <TextInput
            mode="contain"
            activeUnderlineColor={colors.secondary}
            style={styles.field}
            onChangeText={text => setEmail(text)}
            value={email}
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
