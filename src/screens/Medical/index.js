import React, {useRef, useState} from 'react';
import {
  ActivityIndicator,
  Dimensions,
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import GetCare from '../../components/GetCare';
import images from '../../services/utilities/images';
import {styles} from './style';
import {WebView} from 'react-native-webview';
import {colors} from '../../services';
import Header from '../../components/Header';
import AntDesign from 'react-native-vector-icons/AntDesign';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

export default function Medical({navigation}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'Medical'} />
      <ScrollView style={styles.color}>
        {!showVideo ? (
          <ImageBackground source={images.medical} style={styles.image}>
            <TouchableOpacity onPress={() => setShowVideo(true)}>
              <View style={styles.playBtn}>
                <Image source={images.playIcon} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
          </ImageBackground>
        ) : (
          <WebView
            source={{uri: 'https://www.youtube.com/embed/rCa-TYJabNY'}}
            style={styles.videoView}
          />
        )}

        <View style={styles.padding}>
          <TouchableOpacity onPress={() => navigation.navigate('HowItWorksVT')}>
            <View style={[styles.top]}>
              <Text style={styles.subHeading}>See transcript for video</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.padding}>
            <TouchableOpacity
              onPress={() => navigation.navigate('visitforscreen')}>
              <View style={[styles.row, styles.card2]}>
                <Text style={styles.cardText2}>See a Provider Now</Text>
                <View>
                  <Text style={styles.symbol2}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('visitforscreen')}>
              <View style={[styles.row, styles.card]}>
                <AntDesign
                  name="calendar"
                  color={colors.secondary}
                  size={25}
                  style={styles.iconLeft}
                />
                <Text style={styles.cardText}>Schedule an Appointment</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('VideoVisit')}>
              <View style={[styles.row, styles.card]}>
                <FontAwesome5
                  name="play"
                  color={colors.secondary}
                  size={20}
                  style={styles.iconLeft}
                />
                <Text style={styles.cardText}>What is a Video Visit?</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('WhatDoWeTreat')}>
              <View style={[styles.row, styles.card]}>
                <Image source={images.icon} style={styles.icon} />
                <Text style={styles.cardText}>What do we treat?</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
            // onPress={() => navigation.navigate('FAQs')}
            >
              <View style={[styles.row, styles.card]}>
                <FontAwesome5
                  name="user-alt"
                  color={colors.secondary}
                  size={20}
                  style={styles.iconLeft}
                />
                <Text style={styles.cardText}>Meet Our Providers</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
