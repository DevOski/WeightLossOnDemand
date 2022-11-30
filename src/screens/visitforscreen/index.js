import React, {useEffect, useState} from 'react';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fontFamily, fontSize, sizes} from '../../services';

import Header from '../../components/Header';
import Modal from 'react-native-modal';
import {getUser} from '../../services/utilities/api/auth';
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';

export const VisitScreen = ({navigation, route}) => {
  const [isModalVisible, setModalVisible] = useState(false);
  const [userName, setUserName] = useState('');
  const [middleName, setMiddleName] = useState('');
  const [lastName, setLastName] = useState('');

  const token = useSelector(state => state.token);
  const isVisible = useIsFocused();

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  useEffect(() => {
    getUserDetails();
  }, [isVisible]);

  const getUserDetails = async () => {
    try {
      let response = await getUser(token);
      setUserName(response.data.data.first_name);
      setMiddleName(response.data.data.middle_name);
      setLastName(response.data.data.last_name);
      // dispatch(storeUserData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header dark={true} />
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.visitfortext}>Who is this session for?</Text>
          </View>

          <View style={styles.buttondiv}>
            <View style={styles.buttonchilddiv}>
              <TouchableOpacity
                onPress={() =>
                  route?.params?.to
                    ? navigation.navigate(route?.params?.to, {
                        GoogelFit: route?.params?.GoogelFit,
                      })
                    : navigation.navigate('reasonVisit')
                }>
                <View style={[styles.row, styles.card]}>
                  <View
                    style={
                      Platform.OS !== 'ios'
                        ? styles.namefirt
                        : styles.namefirtIOS
                    }>
                    <Text style={styles.fname}>{userName.charAt(0)}</Text>
                  </View>
                  <View>
                    {middleName == '' ? (
                      <Text style={styles.cardText}>
                        {userName} {middleName} {lastName}
                      </Text>
                    ) : (
                      <Text style={styles.cardText}>
                        {'    '}
                        {userName} {lastName}
                      </Text>
                    )}
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            {/* style={styles.cardText} */}
            {/* <View style={styles.buttonchilddiv}>
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate('addchildscreen', {
                    to: route?.params?.to,
                    GoogelFit: route?.params?.GoogelFit,
                  })
                }>
                <View style={[styles.row, styles.card]}>
                  <View style={styles.namefirt}>
                    <Text style={styles.fname}>+</Text>
                  </View>
                  <View>
                    <Text style={styles.cardText}>{'   '}My Child</Text>
                    <Text style={styles.faqText}>{'   '}Must be under 18</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonchilddiv}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={[styles.row, styles.card]}>
                  <View>
                    <Text style={styles.cardText}>Someone Else ?</Text>
                    <Text style={styles.faqText2}>
                      If the patient is over 18, they need to create their own
                      account, even if they are dependent on your health plan
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <Modal
              style={{
                width: sizes.screenWidth,
                height: sizes.screenHeight,
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                marginLeft: sizes.screenWidth * 0.01,
                padding: sizes.screenWidth*0.02,
                position:'absolute',
                top:-sizes.baseMargin,
              }}
              isVisible={isModalVisible}>
              <TouchableOpacity onPress={toggleModal}>
                <View
                  style={{
                    position: 'relative',
                    bottom: sizes.screenHeight * 0.25,
                    left: sizes.screenWidth * 0.85,
                  }}>
                  <Entypo name="cross" color={colors.secondary} size={30} />
                </View>
              </TouchableOpacity>

              <View style={styles.texcon}>
                <Text style={styles.text111}>
                  Trying to set up a visit for Someone else ?
                </Text>
              </View>
              <View style={styles.texcon1}>
                <Text style={styles.text1}>
                  If the patient is over 18,they need to create their own
                  account.if they are a dependent under your health plan,they
                  can add your insurance to thier account
                </Text>
              </View>

              <View style={styles.buttnView}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('signupscreen')}>
                  <View style={styles.buttonView}>
                    <Text style={styles.buttonText}>Create new account</Text>
                  </View>
                </TouchableOpacity>
              </View>
              <View style={styles.buttnView}>
                <TouchableOpacity onPress={toggleModal}>
                  <View style={styles.buttonView1}>
                    <Text style={styles.buttonText}>Go Back</Text>
                  </View>
                </TouchableOpacity>
              </View>
            </Modal> */}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  container2: {
    paddingLeft: sizes.screenWidth * 0.05,
    paddingRight: sizes.screenWidth * 0.05,
  },
  visitfortext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    // justifyContent: 'space-evenly',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },

  cardText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextRegular,
  },
  faqText: {
    color: colors.secondary,
    // fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextRegular,
  },
  faqText2: {
    marginTop: sizes.screenHeight * 0.02,
    color: colors.secondary,
    fontSize: fontSize.h7,
    fontFamily: fontFamily.appTextRegular,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * -0.01,
    width: sizes.screenWidth * 0.9,
    borderRadius: sizes.screenWidth * 0.02,
    alignSelf: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  namefirt: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.11,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.secondary,
    borderRadius: sizes.screenWidth * 0.5,
  },
  namefirtIOS: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.13,
    height: sizes.screenHeight * 0.06,
    backgroundColor: colors.secondary,
    borderRadius: sizes.screenWidth * 0.5,
  },
  fname: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextMedium,
  },
  buttondiv: {
    marginTop: sizes.screenHeight * 0.05,
  },
  buttonchilddiv: {
    marginBottom: sizes.screenHeight * 0.03,
  },
  text111: {
    fontSize: fontSize.h4,
    color: colors.white,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  texcon: {
    bottom: sizes.screenHeight * 0.1,
  },
  texcon1: {
    bottom: sizes.screenHeight * 0.08,
  },
  text1: {
    fontSize: fontSize.large,
    color: colors.white,
    fontFamily: fontFamily.appTextLight,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonView1: {
    borderWidth: 1,
    borderColor: colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.91,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
