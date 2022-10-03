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

export default function ProviderReview({navigation}) {
  useEffect(() => {
   navigation.navigate("RateProvider")
  }, [])
  
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
            <Image source={images.doctor} style={styles.docImg} />
          </View>
        </View>
        <View style={[styles.padding, styles.info]}>
          <Text style={styles.head}>Kimberly Townsend-Scott,MD</Text>
          <Text style={styles.text}>Medical Doctor</Text>
        </View>
        <View style={[styles.padding, styles.info,styles.top]}>
          <Text style={styles.text}>Your visit will begin shortly</Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
