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
import {RadioButton} from 'react-native-paper';
export default function Questionfour({navigation,route}) {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState(route.params.questions3);
  const [questionfour, setquestionfour] = useState();
  const [StrengthTraining, setStrengthTraining] = useState()
  const [Yoga, setYoga] = useState()
  const [Aerobicsanddance, setAerobicsanddance] = useState()
  const [Pilates, setPilates] = useState()
  const [Qa, setQa] = useState();
  console.log(route,"q4screen");
  useEffect(() => {
    getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      let response = await getQuestion(4);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };
  const handleEmail = () => {
    navigation.navigate('question5',{question1:question,questions2:questiontwo,questions3:questionthree,question4:questionfour})
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
          <View style={styles.ro}>
              <Text style={styles.lstyle}>Strength Training</Text>
              <RadioButton
                status={CheckedFemale ? 'checked' : 'unchecked'}
                onPress={() => {
                  setStrengthTraining(!StrengthTraining);
                  setYoga(false)
                  setAerobicsanddance(false);
                  setAerobicsanddance(false);
                
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Yoga</Text>
              <RadioButton
                status={Yoga ? 'checked' : 'unchecked'}
                onPress={() => {
                  setYoga(!Yoga);
                  setStrengthTraining(false);
                 
                  setAerobicsanddance(false);
                  setAerobicsanddance(false);
                
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Aerobics and dance</Text>
              <RadioButton
                status={Aerobicsanddance ? 'checked' : 'unchecked'}
                onPress={() => {
                  setAerobicsanddance(!Aerobicsanddance);
                  setYoga(false);
                  setStrengthTraining(false);
                 
                  setAerobicsanddance(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Pilates</Text>
              <RadioButton
                status={Pilates ? 'checked' : 'unchecked'}
                onPress={() => {
                  setPilates(!Pilates);
                  setAerobicsanddance(false);
                  setYoga(false);
                  setStrengthTraining(false);
                 
                  setAerobicsanddance(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
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
