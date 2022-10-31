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
  KeyboardAvoidingView
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {TextInput} from 'react-native-paper';
import {colors, sizes} from '../../services';
import Modal from 'react-native-modal';
import {openInbox} from 'react-native-email-link';
import {CustomTextFiel} from '../../component/textFiled';
import {getAppointment, getQuestion} from '../../services/utilities/api/auth';

export default function Chat({navigation, route}) {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [message, setmessage] = useState();
  const [visible, setVisible] = useState(false);
  const [msgList, setMsgList] = useState([]);
  // const [questiontwo, setquestiontwo] = useState(route.params.questions2);
  // const [questionthree, setquestionthree] = useState(route.params.questions3);
  // const [questionfour, setquestionfour] = useState(route.params.question4);
  // const [questionfive, setquestionfive] = useState();
  // const [Qa, setQa] = useState();
  // console.log(route,'screen5');

  useEffect(() => {
    // getQuestions();
  }, []);

  const getQuestions = async () => {
    try {
      // let response = await getQuestion(5);
      setQa(response.data.data[0].question);
    } catch (error) {
      console.log(error);
    }
  };

  const handleEmail = async () => {
    if (message != '') {
      setVisible(true);
      let temp = [...msgList];
      temp.push(message);
      setMsgList(temp);
 
    }
    else {
          setVisible(false);
    
    }
    setmessage("")
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={100}>
    <SafeAreaView style={styles. col} >
      <Header title={'Message'} done={true}/>
      <ScrollView style={styles.color}>
      {visible ? (
          <View style={styles.msgbox}>
            <ScrollView style={{padding: 10}}>
              {msgList.map((item, index) => {
                return (
                  <View key={index} style={styles.card}>
                <Text style={styles.text1}>10/22/9 6:42PM</Text>
                <Text style={styles.text1}>Jazzy</Text>
                <Text style={styles.text111}>{item}</Text>
               
              </View>
                ) 
                
                
                // <Text style={styles.sent}>{item}</Text>;
              })}
            </ScrollView>
          </View>
        ) : null}
        {/* {msgList.map((item, index) => {
          return (

            <View key={index} style={styles.card}>
                <Text style={styles.text1}>10/22/9 6:42PM</Text>
                <Text style={styles.text1}>Jazzy</Text>
                <Text style={styles.text111}>{message}</Text>
               
              </View>
                     )
              })} */}
          {/* <Text style={styles.text1}>Jazzy</Text>
          <Text style={styles.text1}>10/22/9 6:42PM</Text>
          <Text style={styles.text111}>{message}</Text> */}
        <View style={styles.card2}>
          <View style={styles.row}>
            <View>
              <Image source={images.icon2} style={styles.icon} />
            </View>
            <View style={styles.left}>
              <Text style={styles.text1}>Support Team</Text>
              <Text style={styles.text1}>10/22/9 6:42PM</Text>
            </View>
          </View>
          <Text style={styles.text11}>
            loremipsum loremipsum loremipsum loremipsum
            loremipsumloremipsumloremipsum{' '}
            loremipsum loremipsum loremipsum loremipsum
            loremipsumloremipsumloremipsum{' '}
            loremipsum loremipsum loremipsum loremipsum
          </Text>
        </View>

        
      </ScrollView>
      <View style={styles.padding}>
          <View style={styles.width}>
            <CustomTextFiel
              value={message}
              label={'Message'}
              setValue={setmessage}
              style={styles.inputbg}
            />
          </View>

          <View style={styles.paddingTop}>
            <TouchableOpacity onPress={handleEmail}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>Send</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
    </SafeAreaView>
    </KeyboardAvoidingView>
  );
}
