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
import Fontisto from 'react-native-vector-icons/Fontisto';
import {colors} from '../../services';

export default function PaymentMethod({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Payment Method'} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.addPaymentText}>Add Payment Method</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('AddPaymentMethod')}>
          <View style={[styles.row, styles.card]}>
            <Fontisto name="credit-card" color={colors.secondary} size={25} />
            <Text style={styles.cardText}>{'   '}Credit Card, FSA, HSA</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={[styles.row, styles.card]}>
            <Fontisto name="paypal" color={colors.secondary} size={25} />
            <Text style={styles.cardText}>{'   '}PayPal</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
