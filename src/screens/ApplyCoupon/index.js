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
import {TextInput} from 'react-native-paper';
import {colors} from '../../services';
export default function ApplyCoupon() {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header title={'Apply Coupon'} skip={true} />
        </View>
        <View style={styles.padding}>
          <Text style={styles.couponHead}>Enter coupon code:</Text>
          <Text style={styles.shareText}>
            (Note: Coupons cannot be used for visits subsidized by your
            insurance or employer.)
          </Text>
          <TextInput
            mode="contain"
            label={'e.g. Coupon594'}
            activeUnderlineColor={colors.secondary}
            style={styles.field}
          />
          <View style={styles.top}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}> Submit Coupon</Text>
            </View>
          </TouchableOpacity>
        </View>
        </View>

        
      </ScrollView>
    </SafeAreaView>
  );
}
