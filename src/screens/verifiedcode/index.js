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
import {openInbox} from 'react-native-email-link';
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
export default function Verificationscreen({navigation}) {
  const CELL_COUNT = 4;
  const [email, setEmail] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });
console.log(value,"'-------");
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const handleEmail = () => {
    openInbox();
  };
  
  return (
    <SafeAreaView>
      <Header title={'Verification'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Please enter your email address and we will send you a link to reset
            your password:
          </Text>
          <View style={styles.width}>
          <CodeField
        ref={ref}
        {...props}
        // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFieldRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={({index, symbol, isFocused}) => (
          <Text
            key={index}
            style={[styles.cell, isFocused && styles.focusCell]}
            onLayout={getCellOnLayoutHandler(index)}>
            {symbol || (isFocused ? <Cursor /> : null)}
          </Text>
        )}
      />
           
           
            
          </View>
          
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Verified</Text>
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
              <TouchableOpacity onPress={()=>navigation.navigate('EnterNewPassword')}>
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
