import React, {useRef, useState} from 'react';
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
import {colors} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';

export default function GetCare({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>
            Choose a video visit that is right for you
          </Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('visitforscreen',{to:"reasonVisit"})}>
          {/* UserVisit */}
          <View style={[styles.row, styles.card]}>
            <Image style={styles.icon} source={images.mdoctr} />
            <View>
              <Text style={styles.cardText}>See first available</Text>
              <Text style={styles.text}>Board-certified providers</Text>
              <Text style={[styles.text, styles.bold]}>
                Estimated wait: {'<'} 5 min
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={
            () => navigation.navigate('visitforscreen', {to: 'HowToSchedule'})
            // navigation.navigate('HowToSchedule')
          }>
          <View style={[styles.row, styles.card]}>
            <Image style={styles.icon2} source={images.mediVisit} />

            <View>
              <Text style={styles.cardText}>Book a medical visit</Text>
              <Text style={styles.text}>Board-certified providers</Text>
              <Text style={styles.providerText}>
                Choose your provider and time
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        {/* <TouchableOpacity
          onPress={() =>
            navigation.navigate('visitforscreen', {to: 'ProviderType'})
          }>
          <View style={[styles.row, styles.card]}>
            <Image style={styles.icon} source={images.fedoctr} />
            <View>
              <Text style={styles.cardText}>Book a mental health session</Text>
              <Text style={styles.text}>Psychiatry & Therapy</Text>
              <Text style={[styles.text, styles.bold]}>
                Next available: Today
              </Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity> */}
        {/* <TouchableOpacity onPress={()=>navigation.navigate("GenerateReciept")}>
          <Text style={{alignSelf:'center'}}>Testing button</Text>
        </TouchableOpacity> */}
      </ScrollView>
    </SafeAreaView>
  );
}
