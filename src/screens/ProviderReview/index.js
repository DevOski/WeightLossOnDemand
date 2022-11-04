import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
import {colors, sizes} from '../../services';
import Loader from 'react-native-three-dots-loader';
import Spinner from 'react-native-spinkit';
import {startSession} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';

export default function ProviderReview({navigation, route}) {
  const token = useSelector(state => state.token);
  const reason = useSelector(state => state.reason);
  const q1 = useSelector(state => state.question1);
  const q2 = useSelector(state => state.question2);
  const q3 = useSelector(state => state.question3);
  const q4 = useSelector(state => state.question4);
  const q5 = useSelector(state => state.question5);

  useEffect(() => {
    sessionStart();
  }, []);

  const sessionStart = async () => {
    try {
      let response = await startSession(
        token,
        q1,
        q2,
        q3,
        q4,
        q5,
        route?.params?.trainer?.tr_id,
        route?.params?.trainer?.tr_name,
        reason,
        route?.params?.trainer?.tr_amount,
      );
      console.log(response.data);
      if (response.data.status == 200) {
        setTimeout(() => {
          navigation.navigate('videocallingscreen', {trainer: route?.params?.trainer});
        }, 5000);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.userView}>
          <View style={[styles.padding]}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <View>
                <Text style={styles.cancel}>Cancel</Text>
              </View>
            </TouchableOpacity>
            <View style={styles.paddingTop}>
              <Text style={styles.findingText}>
                Your provider is reviewing your chart...
              </Text>
              <View style={styles.paddingTop}>
                <Spinner
                  style={styles.spinner}
                  isVisible={true}
                  size={50}
                  type={'ThreeBounce'}
                  color={colors.white}
                />
              </View>
            </View>
          </View>
          <View style={styles.imageView}>
            <Image
              source={{uri: route?.params?.trainer?.images}}
              style={styles.docImg}
            />
          </View>
        </View>
        <View style={[styles.padding, styles.info]}>
          <Text style={styles.head}>{route?.params?.trainer?.tr_name}</Text>
          <Text style={styles.text}>{route?.params?.trainer?.type}</Text>
        </View>
        <View style={[styles.padding, styles.info, styles.top]}>
          <Text style={styles.text}>Your visit will begin shortly</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
