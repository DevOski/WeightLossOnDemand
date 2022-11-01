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
import { getAppointment, getQuestion } from '../../services/utilities/api/auth';

export default function Questionfive({navigation,route}) {
 
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState(route.params.questions3);
  const [questionfour, setquestionfour] = useState(route.params.question4);
  const [questionfive, setquestionfive] = useState();
  const [Qa, setQa] = useState();
  console.log(route,'screen5');

  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      let response = await getQuestion(5);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = async () => {
    navigation.navigate('healthprofilereview')
    console.log(
      question,
      questiontwo,
      questionthree,
      questionfour,
      questionfive,
      "q5screengootodatabase");
// try {
//   let response=await getAppointment(token)
//   console.log(response);
// } catch (error) {
//   console.log(error);
// }
      


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
           value={questionfive}
           label={'Question5'}
           setValue={setquestionfive}
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
