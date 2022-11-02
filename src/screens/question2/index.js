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
import {RadioButton} from 'react-native-paper';
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
  const [Morning, setMorning] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questiontwo, setquestiontwo] = useState();
  const [question, setquestion] = useState(route.params.question);
  const [Qa, setQa] = useState();
  const [Afternoon, setAfternoon] = useState()
  const [Evening, setEvening] = useState()
  const [Night, setNight] = useState()
  const [selectanswer, setselectanswer] = useState()
  
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
          <View style={styles.ro}>
              <Text style={styles.lstyle}>Morning</Text>
              <RadioButton
                status={Morning ? 'checked' : 'unchecked'}
                onPress={() => {
                  setMorning(!Morning);
                  setAfternoon(false);
                  setEvening(false);
                  setNight(false)
                  setselectanswer('Morning')
                  // setgender('Female');
                  // setCheckedMale(false);
                  // setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Afternoon</Text>
              <RadioButton
                status={Afternoon ? 'checked' : 'unchecked'}
                onPress={() => {
                  setAfternoon(!Afternoon);
                  setMorning(false);
                  setselectanswer('Afternoon')
                  setEvening(false);
                  setNight(false)
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Evening</Text>
              <RadioButton
                status={Evening ? 'checked' : 'unchecked'}
                onPress={() => {
                  setEvening(!Evening);
                  setAfternoon(false);
                  setMorning(false);
                  setselectanswer('Evening')
                 
                 
                  setNight(false)
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Night</Text>
              <RadioButton
                status={Night ? 'checked' : 'unchecked'}
                onPress={() => {
                  setNight(!Night);
                  setAfternoon(false);
                  setMorning(false);
                  setselectanswer('Night')
                 
                  setEvening(false);
               
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
