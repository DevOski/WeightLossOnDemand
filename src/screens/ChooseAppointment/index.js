import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Linking,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../../components/Header';
import {styles} from './style';
import {Calendar} from 'react-native-calendars';
import {colors, fontFamily} from '../../services';
import moment from 'moment';
import {
  getAllSlotDate,
  getSlotDate,
  getSlotList,
  getSlotTime,
} from '../../services/utilities/api/auth';
export default function ChooseAppointment({navigation, route}) {
  const [calendar, setCalendar] = useState(true);
  const [list, setList] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [markedDates, setMarkedDates] = useState('');
  const [timeSlot, setTimeSlot] = useState([]);
  const [dateSlot, setDateSlot] = useState([]);
  const handleCalendar = () => {
    setCalendar(true);
    setList(false);
  };
  const handleList = () => {
    setCalendar(false);
    setList(true);
    getTimeSlots();
  };
  useEffect(() => {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    setCurrentDate(utc);
  }, []);

  useEffect(() => {}, [list]);

  const getSelectedDayEvents = date => {
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: '#00B0BF',
      textColor: '#FFFFFF',
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD/MM/YYYY');
    setMarkedDates(markedDates);
    getDateSlots(serviceDate);
    if (route?.params?.from === 'All Trainer') {
      getAllDateSlots(serviceDate);
    
    }
  };

  const getDateSlots = async date => {
    try {
      let response = await getSlotDate(route?.params?.trainer?.tr_id, date);
      setDateSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getTimeSlots = async () => {
    try {
      let response = await getSlotTime(route?.params?.trainer?.tr_id);
      setTimeSlot(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const getAllDateSlots = async date => {
    try {
      let response = await getAllSlotDate(date);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={'Choose Appointment'} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.padding}>
          <View style={styles.row}>
            <View style={styles.border}>
              <TouchableOpacity onPress={handleCalendar}>
                <View style={[styles.view, calendar && styles.selected]}>
                  <Text style={[calendar ? styles.whiteText : styles.text]}>
                    Calendar
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity onPress={handleList}>
                <View style={[styles.view, list && styles.selected]}>
                  <Text style={[list ? styles.whiteText : styles.text]}>
                    List
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
          {calendar ? (
            <View>
              <Calendar
                onDayPress={day => {
                  getSelectedDayEvents(day.dateString);
                }}
                markedDates={markedDates}
                initialDate={currentDate}
                theme={styles.calendar}
              />
              <View style={styles.padding}>
                <Text style={styles.text2}>FRI, SEP 30</Text>
              </View>
              <View style={styles.height}>
                <ScrollView style={[styles.card]}>
                  {dateSlot?.map((item, index) => {
                    return (
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('appointmentreqest', {slot: item})
                        }>
                        <View style={[styles.row2, styles.card]}>
                          <Text style={styles.cardText}>{item?.sl_time}</Text>
                          <View>
                            <Text style={styles.symbol}> ›</Text>
                          </View>
                        </View>
                      </TouchableOpacity>
                    );
                  })}
                </ScrollView>
              </View>
            </View>
          ) : (
            <View>
              {timeSlot?.map((item, index) => {
                console.log(item);
                return (
                  <TouchableOpacity
                    onPress={() =>
                      navigation.navigate('appointmentreqest', {slot: item})
                    }>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>{item?.sl_time}</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                );
              })}
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
