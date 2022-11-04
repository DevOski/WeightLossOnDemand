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
import { Question3 } from '../../store/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function Questionthree({navigation,route}) {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState('');
  const [Qa, setQa] = useState();
  const [Yes, setYes] = useState()
  const [no, setno] = useState()
  const [selectanswer3, setselectanswer3] = useState()
  const dispatch=useDispatch()
  console.log(route.params,"q3screen");
  useEffect(() => {
    getQuestions();
  }, []);
// const q3=useSelector(state=>state.question3)
console.log();
  const getQuestions = async () => {
    try {
      let response = await getQuestion(3);
      setQa(response.data.data[0].question);
    } catch (error) {
    console.log(error);
    }
  };

  const handleEmail = () => {
    dispatch(Question3(selectanswer3))
   
    navigation.navigate('question4',{question1:question,questions2:questiontwo,questions3:questionthree})
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
              <Text style={styles.lstyle}>Yes</Text>
              <RadioButton
                status={Yes ? 'checked' : 'unchecked'}
                onPress={() => {
                  setYes(!Yes);
                  setno(false);
                  setselectanswer3('Yes')
                  // setgender('Female');
                  // setCheckedMale(false);
                  // setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>No</Text>
              <RadioButton
                status={no ? 'checked' : 'unchecked'}
                onPress={() => {
                  setno(!no);
                  setYes(false);
                  setselectanswer3('No')
                  // setgender('Female');
                  // setCheckedMale(false);
                  // setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
           
          </View>
          
          <View style={styles.paddingTop}>
          <TouchableOpacity onPress={handleEmail}  disabled={selectanswer3?false:true}>
              <View style={selectanswer3?styles.buttonView:styles.disabledView}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
