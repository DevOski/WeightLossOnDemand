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

export default function RateProvider({navigation}) {
  console.log(navigation);
  const ratingCompleted = rating => {
    navigation.navigate("HowLikelyRecommend")
    console.log(rating);
  };

  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.skipBtn}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Text style={styles.skipText}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.rateText}>Rate your provider for this visit</Text>
        <Image source={images.doctor} style={styles.docImg} />
        <Text style={styles.providerTitle}>Dr. Kimberly Townsend-Scott</Text>
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
    </SafeAreaView>
  );
}
