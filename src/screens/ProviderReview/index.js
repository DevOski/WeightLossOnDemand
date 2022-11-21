import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
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
import {createChannel, startSession} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';
import {useIsFocused} from '@react-navigation/native';

export default function ProviderReview({navigation, route}) {
  const token = useSelector(state => state.token);
  const reason = useSelector(state => state.reason);
  const q1 = useSelector(state => state.question1);
  const q2 = useSelector(state => state.question2);
  const q3 = useSelector(state => state.question3);
  const q4 = useSelector(state => state.question4);
  const q5 = useSelector(state => state.question5);
  const isVisible = useIsFocused();

  const userID = useSelector(state => state.user.user_id);
  useEffect(() => {
    sessionStart();
  }, []);

  const sessionStart = async () => {
    try {
      let response = await startSession(
        token,
        route?.params?.q1 ? route?.params?.q1 : q1,
        route?.params?.q2 ? route?.params?.q2 : q2,
        route?.params?.q3 ? route?.params?.q3 : q3,
        route?.params?.q4 ? route?.params?.q4 : q4,
        route?.params?.q5 ? route?.params?.q5 : q5,
        route?.params?.tr_id
          ? route?.params?.tr_id
          : route?.params?.trainer?.tr_id,
        route?.params?.tr_name
          ? route?.params?.tr_name
          : route?.params?.trainer?.tr_name,
        route?.params?.reason ? route?.params?.reason : reason,
        route?.params?.tr_amount
          ? route?.params?.tr_amount
          : route?.params?.trainer?.tr_amount,
      );

      if (response.data.status == 200) {
        channelCreate();
        console.log(updatedTrainer);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const channelCreate = async () => {
    try {
      let response = await createChannel(
        route?.params?.trainer?.tr_id
          ? route?.params?.trainer?.tr_id
          : route?.params?.tr_id,
        userID,
      );
      console.log(response.data.message);
      if (response.data.message == 'Channel created successfully') {
        // sessionStart();
        let updatedTrainer = {
          tr_name: route?.params?.tr_name,
          tr_id: route?.params?.tr_id,
          tr_image: route?.params?.tr_image,
        };
        setTimeout(() => {
          navigation.navigate('videocallingscreen', {
            trainer: route?.params?.trainer
              ? route?.params?.trainer
              : updatedTrainer,
            apt_id: route?.params?.apt_id,
          });
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
              source={{
                uri: route?.params?.tr_image
                  ? route?.params?.tr_image
                  : route?.params?.trainer?.images,
              }}
              style={Platform.OS !== 'ios' ? styles.docImg : styles.docImgIOS}
            />
          </View>
        </View>
        <View style={[styles.padding, styles.info]}>
          <Text style={styles.head}>
            {route?.params?.tr_name
              ? route?.params?.tr_name
              : route?.params?.trainer?.tr_name}
          </Text>
          <Text style={styles.text}>{route?.params?.trainer?.type}</Text>
        </View>
        <View style={[styles.padding, styles.info, styles.top]}>
          <Text style={styles.text}>Your visit will begin shortly</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
