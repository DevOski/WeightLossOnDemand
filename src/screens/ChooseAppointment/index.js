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
export default function ChooseAppointment({navigation}) {
  const [calendar, setCalendar] = useState(true);
  const [list, setList] = useState(false);
  const [currentDate, setCurrentDate] = useState('');
  const [markedDates, setMarkedDates] = useState('');

  const handleCalendar = () => {
    setCalendar(true);
    setList(false);
  };
  const handleList = () => {
    setCalendar(false);
    setList(true);
  };
  useEffect(() => {
    var utc = new Date().toJSON().slice(0, 10).replace(/-/g, '-');
    setCurrentDate(utc);
  }, []);

  const getSelectedDayEvents = date => {
    let markedDates = {};
    markedDates[date] = {
      selected: true,
      color: '#00B0BF',
      textColor: '#FFFFFF',
    };
    let serviceDate = moment(date);
    serviceDate = serviceDate.format('DD.MM.YYYY');
    setMarkedDates(markedDates);
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
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:00 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:15 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:30 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>7:45 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>8:00 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card]}>
                      <Text style={styles.cardText}>8:15 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('appointmentreqest')}>
                    <View style={[styles.row2, styles.card, styles.bottom]}>
                      <Text style={styles.cardText}>8:30 PM</Text>
                      <View>
                        <Text style={styles.symbol}> ›</Text>
                      </View>
                    </View>
                  </TouchableOpacity>
                </ScrollView>
              </View>
            </View>
          ) : (
            <View>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>7:00 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>7:15 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>7:30 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>7:45 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>8:00 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>8:15 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card, styles.bottom]}>
                  <Text style={styles.cardText}>8:30 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>8:45 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>9:00 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>9:15 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>9:30 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>9:45 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card]}>
                  <Text style={styles.cardText}>10:00 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => navigation.navigate('appointmentreqest')}>
                <View style={[styles.row2, styles.card, styles.bottom]}>
                  <Text style={styles.cardText}>10:15 PM</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
