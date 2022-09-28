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
import Entypo from 'react-native-vector-icons/Entypo';
import Swiper from 'react-native-swiper';
export default function FindingProvider({navigation}) {
    useEffect(() => {
      setTimeout(() => {
        navigation.navigate("ProviderReview")
      }, 100);
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
              <Text style={styles.findingText}>Finding a Provider...</Text>
              <View style={styles.paddingTop}>
                <Loader size={5} background={'white'} />
              </View>
              <View style={styles.padding}>
                <Text style={[styles.findingText]}>
                  Estimated wait: <Text style={styles.bold}>{'<'} 5 min</Text>
                </Text>
              </View>
            </View>
          </View>
        </View>

        <Swiper autoplay={true} style={styles.wrapper} autoplayTimeout={10} showsPagination={false}>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />

            <View>
              <Text style={styles.cardText}>Turn on "Do Not Distrub"</Text>
              <Text style={styles.faqText}>
                Avoid getting distracted by notifications. Toggling between apps
                may between apps may disconnect your visit.
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />
            <View>
              <Text style={styles.cardText}>
                Give your provider a good view
              </Text>
              <Text style={styles.faqText}>
                Sit near a bright light. Find a secure place to prop your phone.
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />
            <View>
              <Text style={styles.cardText}>Time to focus</Text>
              <Text style={styles.faqText}>
                Make the most of your time with your provider by turning off
                distractions like the TV and video games.
              </Text>
            </View>
          </View>
          <View style={[styles.row, styles.card, styles.paddingTop]}>
            <Entypo name="light-bulb" color={colors.secondary} size={40} />
            <View>
              <Text style={styles.cardText}>Can you hear me now</Text>
              <Text style={styles.faqText}>
                For the best video and audio quality, connect to WiFi and sit
                close to your router. Avoid streaming music or videos, playing
                video games, and downloading large files.
              </Text>
            </View>
          </View>
        </Swiper>
      </View>
    </SafeAreaView>
  );
}
