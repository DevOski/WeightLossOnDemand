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
import {CustomTextFiel} from '../../component/textFiled';
import {getQuestion} from '../../services/utilities/api/auth';
import {Question2} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Questiontwo({navigation, route}) {
  const [Morning, setMorning] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [questiontwo, setquestiontwo] = useState();
  const [question, setquestion] = useState(route?.params?.selectanswer);
  const [Qa, setQa] = useState();
  const [Afternoon, setAfternoon] = useState();
  const [Evening, setEvening] = useState();
  const [Night, setNight] = useState();
  const [selectanswer1, setselectanswer1] = useState();
  const dispatch = useDispatch();
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
  // console.log('question2', {question1: question});
  // const q2=useSelector(state =>state.question2)
  // console.log(q2,'====>q2');
  const handleEmail = () => {
    dispatch(Question2(selectanswer1));
    navigation.navigate('question3', {
      slot: route?.params?.slot,
      trainer: route?.params?.trainer,
    });
  };

  return (
    <SafeAreaView>
      <Header title={'Questionnaires '} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>{Qa}</Text>
          <View style={styles.width}>
            <TouchableOpacity
              onPress={() => {
                setMorning(!Morning);
                setAfternoon(false);
                setEvening(false);
                setNight(false);
                setselectanswer1('Morning');
                // setgender('Female');
                // setCheckedMale(false);
                // setCheckedOther(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Morning</Text>
                <RadioButton
                  status={Morning ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                setAfternoon(!Afternoon);
                setMorning(false);
                setselectanswer1('Afternoon');
                setEvening(false);
                setNight(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Afternoon</Text>
                <RadioButton
                  status={Afternoon ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setEvening(!Evening);
                setAfternoon(false);
                setMorning(false);
                setselectanswer1('Evening');

                setNight(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Evening</Text>
                <RadioButton
                  status={Evening ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setNight(!Night);
                setAfternoon(false);
                setMorning(false);
                setselectanswer1('Night');
                setEvening(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Night</Text>
                <RadioButton
                  status={Night ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={handleEmail}
              disabled={selectanswer1 ? false : true}>
              <View
                style={selectanswer1 ? styles.buttonView : styles.disabledView}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
