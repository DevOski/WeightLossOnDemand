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
  const [breakfastTime, setBreakfastTime] = useState('');
  const [breakfastEaten, setBreakfastEaten] = useState('');
  const [breakfastFood, setBreakfastFood] = useState('');
  const [snackTime, setSnackTime] = useState('');
  const [snackEaten, setSnackEaten] = useState('');
  const [snackFood, setSnackFood] = useState('');
  const [lunchTime, setLunchTime] = useState('');
  const [lunchEaten, setLunchEaten] = useState('');
  const [lunchFood, setLunchFood] = useState('');
  const [snackTime2, setSnackTime2] = useState('');
  const [snackEaten2, setSnackEaten2] = useState('');
  const [snackFood2, setSnackFood2] = useState('');
  const [dinnerTime, setDinnerTime] = useState('');
  const [dinnerEaten, setDinnerEaten] = useState('');
  const [dinnerFood, setDinnerFood] = useState('');
  const [snackTime3, setSnackTime3] = useState('');
  const [snackEaten3, setSnackEaten3] = useState('');
  const [snackFood3, setSnackFood3] = useState('');
  const [fastFood, setFastFood] = useState('');
  const [whichGrocery, setWhichGrocery] = useState('');
  const [groceryShopping, setGroceryShopping] = useState('');
  const [whoPlans, setWhoPlans] = useState('');
  const [whoPrepare, setWhoPrepare] = useState('');
  const [dietChange, setDietChange] = useState('');

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
  const handleNext = () => {
    dispatch(
      Question4(
        breakfastTime,
        breakfastEaten,
        breakfastFood,
        snackTime,
        snackEaten,
        snackFood,
        lunchTime,
        lunchEaten,
        lunchFood,
        snackTime2,
        snackEaten2,
        snackFood2,
        dinnerTime,
        dinnerEaten,
        dinnerFood,
        snackTime3,
        snackEaten3,
        snackFood3,
        fastFood,
        whichGrocery,
        groceryShopping,
        whoPlans,
        whoPrepare,
        dietChange,
      ),
    );
    // navigation.navigate('question5', {
    //   slot: route?.params?.slot,
    //   trainer: route?.params?.trainer,
    // });
    navigation.navigate('healthprofilereview', {
      slot: route?.params?.slot,
      trainer: route?.params?.trainer,
    });
  };

  return (
    <SafeAreaView>
      <Header title={'Questionnaires '} />
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.text}>Nutrition Information</Text>
          {/* <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              Fill in your typical day’s food/meal intake
            </Text>
            <Text style={[styles.text2, styles.paddingTop]}>Breakfast</Text>
            <View style={styles.row}>
              <TextInput
                mode="contain"
                label="Time"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setBreakfastTime(text)}
                value={breakfastTime}
              />
              <TextInput
                mode="contain"
                label="Where Eaten"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setBreakfastEaten(text)}
                value={breakfastEaten}
              />
            </View>
            <TextInput
              mode="contain"
              label="Foods and Beverages Eaten"
              activeUnderlineColor={colors.secondary}
              style={styles.field3}
              onChangeText={text => setBreakfastFood(text)}
              value={breakfastFood}
            />
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Snack</Text>
            <View style={styles.row}>
              <TextInput
                mode="contain"
                label="Time"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setSnackTime(text)}
                value={snackTime}
              />
              <TextInput
                mode="contain"
                label="Where Eaten"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setSnackEaten(text)}
                value={snackEaten}
              />
            </View>
            <TextInput
              mode="contain"
              label="Foods and Beverages Eaten"
              activeUnderlineColor={colors.secondary}
              style={styles.field3}
              onChangeText={text => setSnackFood(text)}
              value={snackFood}
            />
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Lunch</Text>
            <View style={styles.row}>
              <TextInput
                mode="contain"
                label="Time"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setLunchTime(text)}
                value={lunchTime}
              />
              <TextInput
                mode="contain"
                label="Where Eaten"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setLunchEaten(text)}
                value={lunchEaten}
              />
            </View>
            <TextInput
              mode="contain"
              label="Foods and Beverages Eaten"
              activeUnderlineColor={colors.secondary}
              style={styles.field3}
              onChangeText={text => setLunchFood(text)}
              value={lunchFood}
            />
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Snack</Text>
            <View style={styles.row}>
              <TextInput
                mode="contain"
                label="Time"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setSnackTime2(text)}
                value={snackTime2}
              />
              <TextInput
                mode="contain"
                label="Where Eaten"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setSnackEaten2(text)}
                value={snackEaten2}
              />
            </View>
            <TextInput
              mode="contain"
              label="Foods and Beverages Eaten"
              activeUnderlineColor={colors.secondary}
              style={styles.field3}
              onChangeText={text => setSnackFood2(text)}
              value={snackFood2}
            />
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Dinner</Text>
            <View style={styles.row}>
              <TextInput
                mode="contain"
                label="Time"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setDinnerTime(text)}
                value={dinnerTime}
              />
              <TextInput
                mode="contain"
                label="Where Eaten"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setDinnerEaten(text)}
                value={dinnerEaten}
              />
            </View>
            <TextInput
              mode="contain"
              label="Foods and Beverages Eaten"
              activeUnderlineColor={colors.secondary}
              style={styles.field3}
              onChangeText={text => setDinnerFood(text)}
              value={dinnerFood}
            />
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Snack</Text>
            <View style={styles.row}>
              <TextInput
                mode="contain"
                label="Time"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setSnackTime3(text)}
                value={snackTime3}
              />
              <TextInput
                mode="contain"
                label="Where Eaten"
                activeUnderlineColor={colors.secondary}
                style={styles.field2}
                onChangeText={text => setSnackEaten3(text)}
                value={snackEaten3}
              />
            </View>
            <TextInput
              mode="contain"
              label="Foods and Beverages Eaten"
              activeUnderlineColor={colors.secondary}
              style={styles.field3}
              onChangeText={text => setSnackFood3(text)}
              value={snackFood3}
            />
          </View> */}
          {/* <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              How often do you eat out at restaurants/fast food?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setFastFood(text)}
                value={fastFood}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              Which grocery stores do your foods come from?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setWhichGrocery(text)}
                value={whichGrocery}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Who does the grocery shopping?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setGroceryShopping(text)}
                value={groceryShopping}
              />
            </View>
          </View> */}
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Who plans the meals at home?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setWhoPlans(text)}
                value={whoPlans}
              />
            </View>
          </View>
          <View style={styles.paddingTop}>
            <Text style={styles.text2}>Who prepares the meals at home?</Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                onChangeText={text => setWhoPrepare(text)}
                value={whoPrepare}
              />
            </View>
          </View>
          {/* <View style={styles.paddingTop}>
            <Text style={styles.text2}>
              What 1 or 2 things would you like to change with your diet?
            </Text>
            <View>
              <TextInput
                mode="contain"
                activeUnderlineColor={colors.secondary}
                style={styles.field}
                multiline={true}
                onChangeText={text => setDietChange(text)}
                value={dietChange}
              />
            </View>
          </View> */}
          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={handleNext}>
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
