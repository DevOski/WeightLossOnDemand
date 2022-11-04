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
import {RadioButton} from 'react-native-paper';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openInbox} from 'react-native-email-link';
import {CustomTextFiel} from '../../component/textFiled';
import {getQuestion} from '../../services/utilities/api/auth';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {Question1} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Question({navigation, route}) {
  const [Onceaweek, setOnceaweek] = useState(false);
  const [question, setquestion] = useState();
  const [Qa, setQa] = useState();
  const [Twiceaweek, setTwiceaweek] = useState(false);
  const [Daily, setDaily] = useState(false);
  const [selectanswer, setselectanswer] = useState();

  const dispatch = useDispatch();

  // const q1 = useSelector(state=>state.question1)
  // console.log(q1,'====>');
  useEffect(() => {
    getQuestions();
  }, []);



  const getQuestions = async () => {
    try {
      let response = await getQuestion(1);
      console.log(response.data.data[0].question);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = () => {
    // console.log(question,'q1param');

    dispatch(Question1(selectanswer));
    navigation.navigate('question2', {
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
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Once a week</Text>
              <RadioButton
                status={Onceaweek ? 'checked' : 'unchecked'}
                onPress={() => {
                  setOnceaweek(!Onceaweek);
                  setTwiceaweek(false);
                  setDaily(false);
                  setselectanswer('Once a week');
                  // setgender('Female');
                  // setCheckedMale(false);
                  // setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Twice a week</Text>
              <RadioButton
                status={Twiceaweek ? 'checked' : 'unchecked'}
                onPress={() => {
                  setTwiceaweek(!Twiceaweek);
                  setOnceaweek(false);
                  setDaily(false);
                  setselectanswer('Twice a week');
                  // setgender('Female');
                  // setCheckedMale(false);
                  // setCheckedOther(false);
                }}
                color={'#be1d2d'}
                uncheckColor={colors.secondary}
              />
            </View>
            <View style={styles.ro}>
              <Text style={styles.lstyle}>Daily</Text>
              <RadioButton
                status={Daily ? 'checked' : 'unchecked'}
                onPress={() => {
                  setDaily(!Daily);
                  setTwiceaweek(false);
                  setOnceaweek(false);
                  setselectanswer('Daily');
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
