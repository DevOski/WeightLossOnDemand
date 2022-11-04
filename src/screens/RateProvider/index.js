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
import {Rating} from 'react-native-ratings';
import {trainerRating} from '../../services/utilities/api/auth';
import Error from '../../components/Error';

export default function RateProvider({navigation, route}) {
  const [message, setMessage] = useState('');
  const ratingCompleted = async rating => {
    try {
      let response = await trainerRating(rating, route?.params?.trainer?.tr_id);
      setMessage(response.data.message);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(route?.params?.trainer?.tr_id);
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.skipBtn}>
            <TouchableOpacity
              onPress={() => navigation.navigate('HowLikelyRecommend')}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.rateText}>Rate your provider for this visit</Text>
        <Image
          source={{uri: route?.params?.trainer?.images}}
          style={styles.docImg}
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
      {message !== '' && (
        <Error
          title="Your rating is submitted!"
          message={message}
          screen={'HowLikelyRecommend'}
        />
      )}
    </SafeAreaView>
  );
}
