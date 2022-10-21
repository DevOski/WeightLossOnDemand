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
import { useSelector } from 'react-redux';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {styles} from './style';
export default function ContactInfo({navigation}) {
  const user = useSelector(state => state.user);
  console.log(user);
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
              <Text style={styles.text}>{user.first_name} {user.middle_name} {user.last_name}</Text>
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
              <Text style={styles.text}>{user.address}</Text>
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
              <Text style={styles.text}>{user.phone}</Text>
            </View>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>navigation.navigate("ChangePassword",{screenName:"EditEmail",title:"email"})}>
          <View style={[styles.row, styles.card]}>
            <View style={styles.width}>
              <Text style={styles.head}>EMAIL</Text>
              <Text style={styles.text}>{user.email}</Text>
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
