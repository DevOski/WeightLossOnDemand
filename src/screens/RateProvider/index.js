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
import {Rating} from 'react-native-ratings';
import {trainerRating} from '../../services/utilities/api/auth';
import Error from '../../components/Error';
import Modal from 'react-native-modal';
import Loader from '../../components/Loader';

export default function RateProvider({navigation, route}) {
  const [message, setMessage] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);

  const ratingCompleted = async rating => {
    setLoader(true);
    try {
      let response = await trainerRating(
        rating,
        route?.params?.trainer?.tr_id
          ? route?.params?.trainer?.tr_id
          : route?.params?.tr_id,
      );
      setMessage(response.data.message);
      setIsModalVisible(true);
      setLoader(true);
    } catch (error) {
      console.log(error);
      setLoader(true);
    }
  };
  console.log(route?.params);
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.skipBtn}>
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('HowLikelyRecommend', {
                  trianer: route?.params?.trainer,
                  apt_id: route?.params?.apt_id,
                })
              }>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.rateText}>Rate your session for this visit</Text>
        <Image
          source={{
            uri: route?.params?.trainer?.tr_image
              ? route?.params?.trainer?.tr_image
              : route?.params?.trainer?.images,
          }}
          style={Platform.OS !== 'ios' ? styles.docImg : styles.docImgIOS}
        />
        <Text style={styles.providerTitle}>
          {route?.params?.trainer?.tr_name}
        </Text>
        <Rating
          type="custom"
          ratingColor={colors.secondary}
          onFinishRating={ratingCompleted}
          reviewColor={colors.secondary}
          ratingBackgroundColor={colors.disabledBg}
          tintColor={'#fafafa'}
          style={{
            paddingVertical: 20,
            backgroundColor: '#fafafa',
            borderColor: 'red',
          }}
        />
      </View>
      {isModalVisible && (
        <Modal style={styles.modalView} isVisible={isModalVisible}>
          <View style={styles.texcon}>
            <Text style={styles.text111}>Your rating is submitted!</Text>
          </View>
          <View style={styles.texcon1}>
            <Text style={styles.text1}>{message}</Text>
          </View>
          <View>
            <TouchableOpacity
              onPress={() => {
                setIsModalVisible(false);
                navigation.navigate('HowLikelyRecommend', {
                  trianer: route?.params?.trainer,
                  apt_id: route?.params?.apt_id,
                });
              }}>
              <View style={styles.buttonView}>
                <Text style={styles.buttonText}>OK</Text>
              </View>
            </TouchableOpacity>
          </View>
        </Modal>
      )}
        {loader && <Loader />}

    </SafeAreaView>
  );
}
