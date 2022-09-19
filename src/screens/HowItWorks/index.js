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

export default function HowItWorks({route}) {
  const [showVideo, setShowVideo] = useState(false);
  return (
    <SafeAreaView>
      <Header title={'How It Works'} />
      <ScrollView style={styles.color}>
        {!showVideo ? (
          <ImageBackground source={images.mother} style={styles.image}>
            <TouchableOpacity onPress={() => setShowVideo(true)}>
              <View style={styles.playBtn}>
                <Image source={images.playIcon} style={styles.playIcon} />
              </View>
            </TouchableOpacity>
            <View style={styles.textView}>
              <Text style={styles.heading}>How It Works</Text>
            </View>
          </ImageBackground>
        ) : (
          <WebView
            source={{uri: 'https://www.youtube.com/embed/rCa-TYJabNY'}}
            style={styles.videoView}
          />
        )}

        <View style={styles.padding}>
          <TouchableOpacity>
            <View style={[styles.top]}>
              <Text style={styles.subHeading}>See transcript for video</Text>
            </View>
          </TouchableOpacity>
          <View style={styles.padding}>
            <TouchableOpacity>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>What is a Video Visit?</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Tips for a Successful Visit</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>Prescriptions and Lab Work</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>My Pricing</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            <TouchableOpacity>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>FAQs</Text>
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
