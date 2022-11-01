import React, {useEffect, useRef, useState} from 'react';
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
import { getQuestion } from '../../services/utilities/api/auth';

export default function Questiontwo({navigation,route}) {
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questiontwo, setquestiontwo] = useState();
  const [question, setquestion] = useState(route.params.question);
  const [Qa, setQa] = useState();
  
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      let response = await getQuestion(2);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log(question,"question");
  console.log('question2',{question1:question})
  const handleEmail = () => {
    navigation.navigate('question3',{question1:question,questions2:questiontwo})
   
  };
  
  return (
    <SafeAreaView>
      <Header title={'Questionnaires '} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>
          {Qa}
          </Text>
          <View style={styles.width}>
     
          <CustomTextFiel
           value={questiontwo}
           label={'Question2'}
           setValue={setquestiontwo}
          />
           
            
          </View>
          
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={handleEmail}>
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
