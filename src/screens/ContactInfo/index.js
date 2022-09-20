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
export default function ContactInfo({navigation}) {
  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View>
          <Header dark={true} />
        </View>
        <View style={[styles.paddingLeft, styles.paddingBottom]}>
          <Text style={styles.addPaymentText}>Contact Information</Text>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate("EditName")}> 
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>NAME</Text>
              <Text style={styles.text}>Tester Jazzy</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("EditAddress")}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>ADDRESS</Text>
              <Text style={styles.text}>Lorem ipsum dolor smit</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("EditPhone")}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>PHONE</Text>
              <Text style={styles.text}>(365) 154-1736</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("ChangePassword",{screenName:"EditEmail"})}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>EMAIL</Text>
              <Text style={styles.text}>testerjazzy586@gmail.com</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}
