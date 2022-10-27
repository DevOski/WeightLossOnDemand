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
import Slider from '@react-native-community/slider';
import {appRating} from '../../services/utilities/api/auth';
import Error from '../../components/Error';

export default function HowLikelyRecommend({navigation}) {
  const [rate, setRate] = useState(5);
  const [loader, setLoader] = useState(false);
  const [message, setMessage] = useState('');
  const handleRating = () => {
    //
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await appRating(rate);
        setMessage(response.data.message);
        // setFirstName(response.data.data.first_name);
        // setLastName(response.data.data.last_name);
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  return (
    <SafeAreaView>
      <View style={styles.color}>
        <View style={[styles.padding, styles.top]}>
          <Text style={styles.skipText}>
            How likely are you to recommend Weight Loss On Demand to a friend or
            colleague?
          </Text>
          <View style={styles.paddingTop}>
            <View style={[styles.padding, styles.row]}>
              <Text style={styles.extremelyText}>Extremely Unlikely</Text>
              <Text style={styles.rate}>{rate}</Text>
              <Text style={styles.extremelyText2}>Extremely Likely</Text>
            </View>
            <View style={[styles.row]}>
              <View style={styles.left}>
                <Text style={styles.rating}>0</Text>
              </View>
              <View>
                <Slider
                  onValueChange={val => setRate(Math.round(val))}
                  style={styles.sliderWidth}
                  thumbTintColor={colors.secondary}
                  value={rate}
                  minimumValue={0}
                  maximumValue={10}
                  minimumTrackTintColor={colors.secondary}
                  maximumTrackTintColor={colors.primary}
                />
              </View>
              <View style={styles.right}>
                <Text style={styles.rating}>10</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.paddingTop}>
          <View style={styles.disabledView}>
            <TouchableOpacity onPress={handleRating}>
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
          </View>
          <View style={[styles.center, styles.paddingTop]}>
            <TouchableOpacity
              onPress={() => navigation.navigate('ThankyouVisit')}>
              <Text style={styles.skip}>Skip</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {message !== '' && (
        <Error
          title={'We’re so happy to hear from you!'}
          message={message}
          screen={'ThankyouVisit'}
        />
      )}
    </SafeAreaView>
  );
}
