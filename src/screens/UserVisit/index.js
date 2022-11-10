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
import {colors, sizes} from '../../services';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Modal from 'react-native-modal';
import Entypo from 'react-native-vector-icons/Entypo';
import {useSelector} from 'react-redux';
import {
  getAmount,
  getUser,
  timeAppointment,
  trainerAppointment,
} from '../../services/utilities/api/auth';
import moment from 'moment';
import Error from '../../components/Error';
import {useIsFocused} from '@react-navigation/native';
import {useEffect} from 'react';

export default function UserVisit({navigation, route}) {
  const [username, setUsername] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [appointMsg, setAppointMsg] = useState('');
  const [amount, setAmount] = useState('');
  const [discount, setDiscount] = useState('');
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const coupon = useSelector(state => state.coupon);
  const payment = useSelector(state => state.payment);

  const token = useSelector(state => state.token);
  const reason = useSelector(state => state.reason);
  const q1 = useSelector(state => state.question1);
  const q2 = useSelector(state => state.question2);
  const q3 = useSelector(state => state.question3);
  const q4 = useSelector(state => state.question4);
  const q5 = useSelector(state => state.question5);
  const isVisible = useIsFocused();

  useEffect(() => {
    getUserDetails();
    getPrice();
  }, [isVisible]);

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUsername(response.data.data.first_name);
    } catch (error) {
      console.log(error);
    }
  };
  const getPrice = async () => {
    try {
      let response = await getAmount();
      setAmount(response.data.amount);
      setDiscount(response.data.discount);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(coupon);
  const confirmAndPay = () => {
    if (route?.params?.appointByTrainer == true && payment.cardNum) {
      let price =
        coupon == null
          ? amount * 100
          : (amount - (amount / 100) * discount) * 100;
      var formdata = new FormData();
      formdata.append('number', payment.cardNum);
      formdata.append('expr_num', payment.expirationMonth);
      formdata.append('exp_year', payment.expirationYear);
      formdata.append('cvc', payment.cvv);
      formdata.append('amount', price);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('http://alsyedmmtravel.com/api/pay', requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log(result);
          if (result.message == 'succeeded') {
            bookAppointmentByTrainer(price);
          }
        })
        .catch(error => console.log('error', error));
    } else if (route?.params?.appointByTime == true && payment.cardNum) {
      let price =
      coupon == null
        ? amount * 100
        : (amount - (amount / 100) * discount) * 100;
      var formdata = new FormData();
      formdata.append('number', payment.cardNum);
      formdata.append('expr_num', payment.expirationMonth);
      formdata.append('exp_year', payment.expirationYear);
      formdata.append('cvc', payment.cvv);
      formdata.append('amount', price);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('http://alsyedmmtravel.com/api/pay', requestOptions)
        .then(response => response.json())
        .then(result => {
          // console.log(result);
          if (result.message == 'succeeded') {
            bookAppointmentByTime(price);
          }
        })
        .catch(error => console.log('error', error));
    } else if (route?.params?.sessionStart == true && payment.cardNum) {
      let price =
      coupon == null
        ? amount * 100
        : (amount - (amount / 100) * discount) * 100;
      var formdata = new FormData();
      formdata.append('number', payment.cardNum);
      formdata.append('expr_num', payment.expirationMonth);
      formdata.append('exp_year', payment.expirationYear);
      formdata.append('cvc', payment.cvv);
      formdata.append('amount', price);

      var requestOptions = {
        method: 'POST',
        body: formdata,
        redirect: 'follow',
      };

      fetch('http://alsyedmmtravel.com/api/pay', requestOptions)
        .then(response => response.json())
        .then(result => {
          if (result.message == 'succeeded') {
            toggleModal();
          }
        })
        .catch(error => console.log('error', error));
    }
  };

  const bookAppointmentByTrainer = async price => {
    try {
      let response = await trainerAppointment(
        token,
        q1,
        q2,
        q3,
        q4,
        q5,
        route?.params?.trainer?.tr_id,
        route?.params?.trainer?.tr_name,
        reason,
        moment(route?.params?.slot?.tr_date, 'DD/MM/YYYY').format('MM/DD/YYYY'),
        route?.params?.slot?.tr_day,
        route?.params?.slot?.sl_time,
        `$${amount}`,
      );
      setAppointMsg(response.data.message);
    } catch (error) {
      console.log('err-->', error);
    }
  };

  const bookAppointmentByTime = async price => {
    try {
      let response = await timeAppointment(
        token,
        q1,
        q2,
        q3,
        q4,
        q5,
        reason,
        moment(route?.params?.slot?.tr_date, 'DD/MM/YYYY').format('MM/DD/YYYY'),
        route?.params?.slot?.tr_day,
        route?.params?.slot?.sl_time,
        `$${amount}`,
      );
      setAppointMsg(response.data.message);
    } catch (error) {
      console.log('err-->', error);
    }
  };
  return (
    <SafeAreaView>
      <View>
        <Header title={`${username}'s Visit`} />
      </View>
      <ScrollView style={styles.color}>
        <View style={styles.userView}>
          <View style={styles.padding2}>
            <Text style={styles.text}>First Available Medical Provider</Text>
            <Text style={styles.heading}>Estimated wait: {'<'} 5 min</Text>
          </View>
        </View>
        <View style={styles.padding}>
          <Text style={styles.head2}>Payment</Text>
        </View>
        <TouchableOpacity
          onPress={() =>
            !payment?.cardNum &&
            navigation.navigate('AddPaymentMethod', {
              to: 'UserVisit',
              appointByTrainer: route?.params?.appointByTrainer,
            })
          }>
          <View style={[styles.row, styles.card, styles.borderTop]}>
            <Text style={styles.cardText}>Pay with</Text>
            {payment?.cardNum ? (
              <Text style={styles.addPaymentText}> {payment?.cardNum}</Text>
            ) : (
              <View style={{flexDirection: 'row'}}>
                <Ionicons
                  name="add-circle"
                  color={colors.greenIcon}
                  size={18}
                  style={styles.icon}
                />
                <Text style={styles.addPaymentText}>Add payment type</Text>
              </View>
            )}
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            !coupon && navigation.navigate('ApplyCoupon');
          }}>
          <View style={[styles.row, styles.card, styles.borderBottom]}>
            <Text style={styles.cardText}>Coupon</Text>

            <View>
              <Text style={styles.symbol}>
                {' '}
                <Text style={[styles.addPaymentText, styles.size]}>
                  {coupon}{' '}
                </Text>
                ›
              </Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.padding, styles.row]}>
          <Text style={styles.head2}>Your Cost</Text>
          <Text style={styles.head2}>${amount}</Text>
        </View>

        <TouchableOpacity
          disabled={payment?.cardNum ? false : true}
          onPress={confirmAndPay}>
          <View
            style={payment?.cardNum ? styles.buttonView : styles.disabledBtn}>
            <Text style={styles.buttonText}> Confirm and Pay</Text>
          </View>
        </TouchableOpacity>
        {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
            <Image source={images.greenCheck} style={styles.greenIcon} />
            <TouchableOpacity onPress={toggleModal}>
              <View
                style={{
                  position: 'relative',
                  bottom: sizes.screenHeight * 0.25,
                  left: sizes.screenWidth * 0.85,
                }}></View>
            </TouchableOpacity>

            <View style={styles.texcon}>
              <Text style={styles.text111}>You're All Set!</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>
                When you're ready, tap below,and we'll connect you with your
                provider.
              </Text>
            </View>
            <View style={[styles.texcon1, styles.paddingTop]}>
              <Text style={styles.text1}>
                To help your visit go smoothly, we recommend that you:
              </Text>
              <View style={[styles.row2, styles.paddingTop]}>
                <Entypo
                  name="dot-single"
                  color={colors.disabledBg2}
                  size={25}
                />
                <Text style={styles.text2}> Sit in a quiet, private space</Text>
              </View>
              <View style={[styles.row2]}>
                <Entypo
                  name="dot-single"
                  color={colors.disabledBg2}
                  size={25}
                />
                <Text style={styles.text2}> Connect to strong WiFi</Text>
              </View>
              <View style={[styles.row2]}>
                <Entypo
                  name="dot-single"
                  color={colors.disabledBg2}
                  size={25}
                />
                <Text style={styles.text2}>
                  {' '}
                  Turn off other devices, like TV or music
                </Text>
              </View>
            </View>
            <View style={styles.buttnView}>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('FindingProvider');
                  setIsModalVisible(false);
                }}>
                <View style={styles.buttonView2}>
                  <Text style={styles.buttonText}>Start visit now</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.noBtn}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonView1}>
                  <Text style={styles.buttonText}>Cancel</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        {appointMsg !== '' && (
          <Error
            title="Congratulations!"
            message={appointMsg}
            screen={'Home'}
          />
        )}
      </ScrollView>
    </SafeAreaView>
  );
}
