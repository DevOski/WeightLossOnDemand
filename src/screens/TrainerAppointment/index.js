import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
  FlatList
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GetCare from '../../components/GetCare';
import {sizes} from '../../services';
import {
  getAllTrainers,
  getUser,
  recentVisit,
} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {storeUserData} from '../../store/actions';
import {styles} from './style';

export default function TrainerAppointment({navigation}) {
  const [userName, setUserName] = useState('');
  

  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const isVisible = useIsFocused();
  const data = [
   
  
    {
      id: 1,
      title: 'Appointment',
      
      // screen: 'chatroom',
    },
    {
      id: 2,
      title: 'Appointment',
      
      // screen: 'chatroom',
    },
    {
      id: 3,
      title: 'Appointment',
      
      // screen: 'chatroom',
    },
    {
      id: 4,
      title: 'Mustafa',
      
      // screen: 'chatroom',
    },
 
  
  ];
 

  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={[styles.row, styles.padding]}>
          <Image source={images.icon2} style={styles.icon} />
          <View>
            <Text style={styles.heading}> We're Hi jazzy,</Text>
            <Text style={styles.welcomeText}> Welcome back</Text>
          </View>
          <View style={styles.transparentView}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image source={images.setting} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (

            <TouchableOpacity onPress={() =>  navigation.navigate(item.screen)}>
              <View style={[styles.row, styles.card]}>
                <Text style={styles.cardText}>{item.title}</Text>
                <View>
                  <Text style={styles.symbol}> ›</Text>
                </View>
              </View>
            </TouchableOpacity>
            // <Chatbox
            //   name={item.name}
            //   text={item.text}
            //   onPress={() =>
            //     navigation.navigate(item.screen, {
            //       name: item.name,
            //       text: item.text,
            //     })
            //   }
            // />
          )}
          // keyExtractor={item => navigation.navigate(item.screen)}
        />
       
      </ScrollView>
    </SafeAreaView>
  );
}
