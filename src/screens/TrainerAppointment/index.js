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
  FlatList,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GetCare from '../../components/GetCare';
import {sizes} from '../../services';
import {
  getAllTrainers,
  getAppointmentTrainer,
  getTrainer,
  getUser,
  recentVisit,
} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {storeUserData} from '../../store/actions';
import {styles} from './style';

export default function TrainerAppointment({navigation}) {
  const [trainerName, setTrainerName] = useState('');
  const [appointmentList, setAppointmentList] = useState([]);
  const token = useSelector(state => state.token);
  const isVisible = useIsFocused();

  useEffect(() => {
    getTrainerInfo();
    getTrainerAppointments();
  }, [isVisible]);

  const getTrainerInfo = async () => {
    try {
      let response = await getTrainer(token);
      setTrainerName(response.data.data.tr_name);
    } catch (error) {
      console.log(error);
    }
  };
  const getTrainerAppointments = async () => {
    try {
      let response = await getAppointmentTrainer(token);
      setAppointmentList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={[styles.row, styles.padding]}>
          <Image source={images.icon2} style={styles.icon} />
          <View>
            <Text style={styles.heading}> Hi {trainerName},</Text>
            <Text style={styles.welcomeText}> Welcome back</Text>
          </View>
          <View style={styles.transparentView}></View>
          <TouchableOpacity onPress={() => navigation.navigate('Setting')}>
            <Image source={images.setting} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.appointmentText}>Your recent appointment</Text>
        </View>
        {appointmentList?.map((item, index) => {
          console.log(item);
          return (
            <View>
              {item.status == 'pending' ? (
                <TouchableOpacity
                  key={index}
                  // onPress={() => navigation.navigate(item.screen)}
                >
                  <View style={[styles.row, styles.card]}>
                    <Text style={styles.cardText}>
                      {moment(item.apt_time).format('DD/MM/YY hh:mm: A')}
                    </Text>
                    <View>{/* <Text style={styles.symbol}> ›</Text> */}</View>
                  </View>
                </TouchableOpacity>
              ) : (
                <Text>No recent appointments</Text>
              )}
            </View>
          );
        })}
        <View style={styles.paddingBottom2}></View>
      </ScrollView>
    </SafeAreaView>
  );
}
