import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useRef, useState} from 'react';
import {useEffect} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useSelector} from 'react-redux';
import Header from '../../components/Header';
import {recentVisit} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {styles} from './style';
export default function HealthVisits({navigation}) {
  const [trainer, setTrainer] = useState();
  const [user, setUser] = useState();
  const [visit, setVisit] = useState();
  const [error, setError] = useState(false);
  const isVisible = useIsFocused();

  const token = useSelector(state => state.token);

  useEffect(() => {
    getPastVisit();
  }, [isVisible]);

  const getPastVisit = async () => {
    try {
      let response = await recentVisit(token);
      setVisit(response.data.visit);
      setTrainer(response.data.trainer[0]);
      setUser(response.data.user);
    } catch (error) {
      if (error.message.includes('500')) {
        setError(true);
      }
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={'Recent Visit'} />
      </View>
      <ScrollView style={styles.color}>
        {!error ? (
          <View style={styles.marginTop}>
            <View style={[styles.left, styles.top]}>
              <Text style={styles.head}>MY RECENT VISIT</Text>
            </View>
            <TouchableOpacity
              onPress={() => navigation.navigate('VisitDetail')}>
              <View style={[styles.card]}>
                <View style={styles.row}>
                  <Image source={images.provider1} style={styles.providerImg} />
                  <Text style={styles.cardText}>{trainer?.tr_name}</Text>
                  <View>
                    <Text style={styles.symbol}> ›</Text>
                  </View>
                </View>
                <View>
                  <Text style={styles.date}>
                    {/* {moment(visit?.created_at).format('DD/MM/YYYY')} */}
                    {moment(visit?.created_at).format('ddd')},{' '}
                    {moment(visit?.created_at).format('MMM')}{' '}
                    {moment(visit?.created_at).format('DD')}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>
        ) : (
          <View style={styles.contentView}>
            <Text style={styles.text}>You haven't had any visits yet.</Text>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
