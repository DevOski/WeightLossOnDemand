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
import Slider from '@react-native-community/slider';

export default function Question({navigation, route}) {
  const [Onceaweek, setOnceaweek] = useState(false);
  const [question, setquestion] = useState();
  const [Qa, setQa] = useState(
    'List any health problems and physical limitations',
  );
  const [Twiceaweek, setTwiceaweek] = useState(false);
  const [Daily, setDaily] = useState(false);
  const [restFul, setRestFul] = useState('');
  const [restFulYes, setRestFulYes] = useState(false);
  const [restFulNo, setRestFulNo] = useState(false);
  const [selectanswer, setselectanswer] = useState();
  const [stressRate, setStressRate] = useState(0);
  const [healthProblem, setHealthProblem] = useState('');
  const [allergies, setAllergies] = useState('');
  const [medicationDos, setMedicationDos] = useState('');
  const [copeStress, setCopeStress] = useState('');
  const [listCultural, setListCultural] = useState('');
  const [lifestyleRate, setLifestyleRate] = useState(0);
  const [confidenceRate, setConfidenceRate] = useState(0);

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
      // setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleQuestion = () => {
    // console.log(question,'q1param');

    dispatch(
      Question1(
        healthProblem,
        allergies,
        medicationDos,
        restFul,
        stressRate,
        copeStress,
        listCultural,
        lifestyleRate,
        confidenceRate,
      ),
    );
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
          <Text style={styles.text}>General Health Information</Text>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              List any health problems and physical limitations
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setHealthProblem(text)}
                value={healthProblem}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>List any allergies/intolerances</Text>
            <View>
              <TextInput
                mode="contain"
                // label={'New password'}
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setAllergies(text)}
                value={allergies}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              List All Medications, Vitamins, and Herbals and their dosage
            </Text>
            <View>
              <TextInput
                mode="contain"
                // label={'New password'}
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                multiline={true}
                numberOfLines={4}
                onChangeText={text => setMedicationDos(text)}
                value={medicationDos}
              />
            </View>
          </View>

          <View style={styles.gcon}>
            <Text style={styles.text2}>
              How many hours of sleep do you average per night? _____ Is your
              sleep restful?
            </Text>

            <TouchableOpacity
              onPress={() => {
                setRestFulYes(!restFulYes);
                setRestFul('Yes');
                setRestFulNo(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>Yes</Text>
                <RadioButton
                  onPress={() => {
                    setRestFulYes(!restFulYes);
                    setRestFul('Yes');
                    setRestFulNo(false);
                  }}
                  status={restFulYes ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                setRestFulNo(!restFulNo);
                setRestFul('No');
                setRestFulYes(false);
              }}>
              <View style={styles.ro}>
                <Text style={styles.lstyle}>No</Text>
                <RadioButton
                  onPress={() => {
                    setRestFulNo(!restFulNo);
                    setRestFul('No');
                    setRestFulYes(false);
                  }}
                  status={restFulNo ? 'checked' : 'unchecked'}
                  color={'#be1d2d'}
                  uncheckColor={colors.secondary}
                />
              </View>
            </TouchableOpacity>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              How do you rate the stress in your life, 10 being the highest?
            </Text>

            <View style={[styles.row, styles.paddingTop]}>
              <View
                style={Platform.OS !== 'ios' ? styles.left : styles.leftIOS}>
                <Text style={styles.rating}>0</Text>
              </View>
              <View>
                <Slider
                  onValueChange={val => setStressRate(Math.round(val))}
                  style={styles.sliderWidth}
                  thumbTintColor={colors.secondary}
                  value={stressRate}
                  minimumValue={0}
                  maximumValue={10}
                  minimumTrackTintColor={colors.secondary}
                  maximumTrackTintColor={colors.primary}
                />
              </View>
              <View
                style={Platform.OS !== 'ios' ? styles.right : styles.rightIOS}>
                <Text style={styles.rating}>10</Text>
              </View>
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>How do you cope with stress?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setCopeStress(text)}
                value={copeStress}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              List any cultural or religious practices related to your health or
              diet
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setListCultural(text)}
                value={listCultural}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              How do you rate your readiness to make lifestyle changes, 5 being
              most ready?{' '}
            </Text>

            <View style={[styles.row, styles.paddingTop]}>
              <View
                style={Platform.OS !== 'ios' ? styles.left : styles.leftIOS}>
                <Text style={styles.rating}>0</Text>
              </View>
              <View>
                <Slider
                  onValueChange={val => setLifestyleRate(Math.round(val))}
                  style={styles.sliderWidth}
                  thumbTintColor={colors.secondary}
                  value={lifestyleRate}
                  minimumValue={0}
                  maximumValue={5}
                  minimumTrackTintColor={colors.secondary}
                  maximumTrackTintColor={colors.primary}
                />
              </View>
              <View
                style={Platform.OS !== 'ios' ? styles.right : styles.rightIOS}>
                <Text style={styles.rating}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              How do you rate your confidence to make lifestyle changes, 5 being
              most confident?
            </Text>

            <View style={[styles.row, styles.paddingTop]}>
              <View
                style={Platform.OS !== 'ios' ? styles.left : styles.leftIOS}>
                <Text style={styles.rating}>0</Text>
              </View>
              <View>
                <Slider
                  onValueChange={val => setConfidenceRate(Math.round(val))}
                  style={styles.sliderWidth}
                  thumbTintColor={colors.secondary}
                  value={confidenceRate}
                  minimumValue={0}
                  maximumValue={5}
                  minimumTrackTintColor={colors.secondary}
                  maximumTrackTintColor={colors.primary}
                />
              </View>
              <View
                style={Platform.OS !== 'ios' ? styles.right : styles.rightIOS}>
                <Text style={styles.rating}>5</Text>
              </View>
            </View>
          </View>
          <View style={styles.paddingTop}>
            <TouchableOpacity
              // disabled={selectanswer ? false : true}
              onPress={handleQuestion}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Skip</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.bottom2}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
