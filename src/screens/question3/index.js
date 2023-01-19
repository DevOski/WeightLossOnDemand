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
import {Question3} from '../../store/actions';
import {useDispatch, useSelector} from 'react-redux';

export default function Questionthree({navigation, route}) {
  const [CheckedFemale, setCheckedFemale] = React.useState();
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [question, setquestion] = useState(route.params.question1);
  const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  const [questionthree, setquestionthree] = useState('');
  const [Qa, setQa] = useState();
  const [Yes, setYes] = useState();
  const [no, setno] = useState();
  const [selectanswer3, setselectanswer3] = useState();
  const [activeThing, setActiveThing] = useState('');
  const [regularExercise, setRegularExercise] = useState('');
  const [days, setDays] = useState('');
  const [minutes, setMinutes] = useState('');
  const [intensityLevel, setIntensityLevel] = useState('');
  const [fitTime, setFitTime] = useState('');
  const [phyLimitations, setPhyLimitations] = useState('');
  const dispatch = useDispatch();
  // console.log(route.params,"q3screen");
  useEffect(() => {
    getQuestions();
  }, []);
  // const q3=useSelector(state=>state.question3)
  console.log();
  const getQuestions = async () => {
    try {
      let response = await getQuestion(3);
      // setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNext = () => {
    dispatch(
      Question3(
        activeThing,
        regularExercise,
        days,
        minutes,
        intensityLevel,
        fitTime,
        phyLimitations,
      ),
    );

    navigation.navigate('question4', {
      slot: route?.params?.slot,
      trainer: route?.params?.trainer,
    });
  };
  const state = useSelector(state => state);
  console.log(state);
  return (
    <SafeAreaView>
      <Header title={'Questionnaires '} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>Physical Activity Information</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              What is the most physically active thing you do in a day?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                multiline={true}
                onChangeText={text => setActiveThing(text)}
                value={activeThing}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              What, if any, regular exercises do you do?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                multiline={true}
                onChangeText={text => setRegularExercise(text)}
                value={regularExercise}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>How many days a week?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setDays(text)}
                value={days}
              />
            </View>
          </View>

          <View style={styles.paddingTop}>
            <Text style={styles.text2}>How many minutes per day?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setMinutes(text)}
                value={minutes}
              />
            </View>
          </View>

          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              At what level of intensity (light, moderate, or high)?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setIntensityLevel(text)}
                value={intensityLevel}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              What time(s) of day can you fit exercise into your schedule?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setFitTime(text)}
                value={fitTime}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              List any physical limitations to exercising
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                multiline={true}
                onChangeText={text => setPhyLimitations(text)}
                value={phyLimitations}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity
              onPress={handleNext}
              // disabled={selectanswer3 ? false : true}
            >
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Submit</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.bottom2}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
