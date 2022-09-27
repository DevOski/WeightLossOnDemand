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

export default function UserVisit({navigation}) {
  const [username, setUsername] = useState('Jazzy');
  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
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
        <TouchableOpacity onPress={() => navigation.navigate('PaymentMethod')}>
          <View style={[styles.row, styles.card, styles.borderTop]}>
            <Text style={styles.cardText}>Pay with</Text>
            <Ionicons
              name="add-circle"
              color={colors.greenIcon}
              size={18}
              style={styles.icon}
            />
            {/* <MaterialIcons
              name="error"
              color={colors.secondary}
              size={18}
              style={styles.icon}
            /> */}

            <Text style={styles.addPaymentText}>Add payment type</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('insurancescreen', {
              title: 'Add Health Insurance',
            })
          }>
          <View style={[styles.row, styles.card]}>
            <Text style={styles.cardText}>Insurance</Text>

            <Text style={styles.checkText}>Check for coverage</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('ApplyCoupon')}>
          <View style={[styles.row, styles.card, styles.borderBottom]}>
            <Text style={styles.cardText}>Coupon</Text>
            <View>
              <Text style={styles.symbol}> ›</Text>
            </View>
          </View>
        </TouchableOpacity>
        <View style={[styles.padding, styles.row]}>
          <Text style={styles.head2}>Your Cost</Text>
          <Text style={styles.head2}>FREE</Text>
        </View>

        <TouchableOpacity onPress={toggleModal}>
          <View style={styles.buttonView}>
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
                <Text style={styles.text2}> Turn off other devices, like TV or music</Text>
              </View>
            </View>
            <View style={styles.buttnView}>
              <TouchableOpacity
              // onPress={() => navigation.navigate('signinscreen')}
              >
                <View style={styles.buttonView}>
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
      </ScrollView>
    </SafeAreaView>
  );
}
