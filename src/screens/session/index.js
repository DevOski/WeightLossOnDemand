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
import {colors, sizes, fontSize, fontFamily} from '../../services';
import Header from '../../components/Header';
export default function startSession({navigation}) {
  const [msgList, setMsgList] = useState([]);
  const [currentSession, setCurrentSession] = useState(false);
  const [visitId, setVistId] = useState('');
  const [appId, setAppId] = useState('');
  const isVisible = useIsFocused();

  const token = useSelector(state => state.token);
  console.log(token);
  useEffect(() => {
    getUserVisit();
  }, [isVisible]);

  const getUserVisit = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'POST',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://alsyedmmtravel.com/api/question_review', requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.data.ap_id) {
          setAppId(result.data.ap_id);
        } else {
          setVistId(result.data.visit_id);
        }
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={'Current Session'} />
      </View>
      <View style={styles.container}>
        {!currentSession && (
          <View>
            <View style={{paddingBottom: sizes.TinyMargin}}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('userDetailTrainer', {
                    ap_id: appId,
                    visit_id: visitId,
                  })
                }
                // disabled={email != '' && password != '' ? false : true}
                style={styles.but}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: 'Bold',
                  }}>
                  View Client Details
                </Text>
              </TouchableOpacity>
            </View>
            {/* <View style={{paddingBottom: sizes.TinyMargin}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('trainervideocall')}
                // disabled={email != '' && password != '' ? false : true}
                style={styles.but}>
                <Text
                  style={{
                    color: '#fff',
                    fontSize: fontSize.h6,
                    fontFamily: fontFamily.appTextHeading,
                    fontWeight: 'Bold',
                  }}>
                  View Questionnaires
                </Text>
              </TouchableOpacity>
            </View> */}
            <TouchableOpacity
              onPress={() => navigation.navigate('trainervideocall')}
              // disabled={email != '' && password != '' ? false : true}
              style={styles.but}>
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
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}
