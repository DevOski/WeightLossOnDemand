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

export default function Question({navigation}) {
 
 
  const [question, setquestion] = useState();
 


  const handleEmail = () => {
   
    // console.log(question,'q1param');
    navigation.navigate('question2',{question:question})
  };
  
  return (
    <SafeAreaView>
      <Header title={'Questions'} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
            Question 1
          </Text>
          <View style={styles.width}>
     
          <CustomTextFiel
           value={question}
           label={'Question'}
           setValue={setquestion}
          />
           
            
          </View>
          
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={ handleEmail}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
