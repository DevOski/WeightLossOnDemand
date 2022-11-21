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
import {CustomTextFiel} from '../../component/textFiled';
import {getQuestion} from '../../services/utilities/api/auth';
import {RadioButton} from 'react-native-paper';
import {Question4} from '../../store/actions';
import {useDispatch} from 'react-redux';

export default function Questionfour({navigation, route}) {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState(route.params.questions3);
  const [questionfour, setquestionfour] = useState();
  const [StrengthTraining, setStrengthTraining] = useState(false);
  const [Yoga, setYoga] = useState(false);
  const [Aerobicsanddance, setAerobicsanddance] = useState(false);
  const [Pilates, setPilates] = useState(false);
  const [selectanswer4, setselectanswer4] = useState();
  const [Qa, setQa] = useState();

  const dispatch = useDispatch();

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
    dispatch(Question4(selectanswer4));
    navigation.navigate('question5', {
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
                setStrengthTraining(!StrengthTraining);
                setYoga(false);
                setAerobicsanddance(false);
                setAerobicsanddance(false);
                setselectanswer4('Strength Training');
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Strength Training</Text>
                <RadioButton
                  status={StrengthTraining ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setYoga(!Yoga);
                setStrengthTraining(false);
                setselectanswer4('Yoga');
                setAerobicsanddance(false);
                setAerobicsanddance(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Yoga</Text>
                <RadioButton
                  status={Yoga ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setAerobicsanddance(!Aerobicsanddance);
                setYoga(false);
                setStrengthTraining(false);
                setselectanswer4('Aerobics and dance');
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Aerobics and dance</Text>
                <RadioButton
                  status={Aerobicsanddance ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setPilates(!Pilates);
                setAerobicsanddance(false);
                setYoga(false);
                setStrengthTraining(false);
                setselectanswer4('Pilates');
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Pilates</Text>
                <RadioButton
                  status={Pilates ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>

          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={handleEmail}
              disabled={selectanswer4 ? false : true}>
              <View
                style={selectanswer4 ? styles.buttonView : styles.disabledView}>
                <Text style={styles.buttonText}>Next</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
