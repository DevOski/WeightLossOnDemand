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
import { CustomTextFiel } from '../../component/textFiled';

export default function Questionthree({navigation,route}) {
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState('');
  console.log(route.params,"q3screen");


  const handleEmail = () => {
    navigation.navigate('question4',{question1:question,questions2:questiontwo,questions3:questionthree})
  };
  
  return (
    <SafeAreaView>
      <Header title={'Questions'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Question 3
          </Text>
          <View style={styles.width}>
     
          <CustomTextFiel
           value={questionthree}
           label={'Question3'}
           setValue={setquestionthree}
          />
           
            
          </View>
          
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={handleEmail}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Verified</Text>
              </View>
            </TouchableOpacity>
          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
