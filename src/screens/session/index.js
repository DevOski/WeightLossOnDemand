import {useIsFocused} from '@react-navigation/native';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors, sizes,fontSize,fontFamily} from '../../services';
export default function startSession({navigation}) {
  const [msgList, setMsgList] = useState([]);

  const isVisible = useIsFocused();

  const token = useSelector(state => state.token);
  useEffect(() => {
    getChat();
  }, [isVisible]);

  const getChat = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://alsyedmmtravel.com/api/chat_display', requestOptions)
      .then(response => response.json())
      .then(result => {
        setMsgList(result.data);
        console.log(result.data);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
      onPress={()=>navigation.navigate('trainervideocall')}
        // disabled={email != '' && password != '' ? false : true}
        style={styles.but}
        >
        <Text
          style={{
            color: '#fff',
            fontSize: fontSize.h6,
            fontFamily: fontFamily.appTextHeading,
            fontWeight: 'Bold',
          }}>
         Start Session
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
