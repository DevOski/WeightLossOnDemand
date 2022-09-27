import React, {useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
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
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openComposer, openInbox} from 'react-native-email-link';

export default function RecoverPassword() {
  const [email, setEmail] = useState('tester@gmail.com');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleEmail = () => {
    openInbox();
  };
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
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Recover my password</Text>
              </View>
            </TouchableOpacity>
          </View>
          {isModalVisible && (
            <Modal style={styles.modalView} isVisible={isModalVisible}>
              <View style={styles.texcon}>
                <Text style={styles.text111}>Check your email!</Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>
                  An email has been sent to{' '}
                  <Text style={styles.link} onPress={handleEmail}>
                    {email}
                  </Text>
                  . Use the link in that email to reset your password
                </Text>
              </View>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>OK</Text>
                </View>
              </TouchableOpacity>
            </Modal>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
