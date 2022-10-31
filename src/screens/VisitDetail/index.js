import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Switch,
  Text,
  TouchableOpacity,
  View,
  StyleSheet,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg';
import calender from '../../assets/assets/calender.png';
import favourite from '../../assets/assets/favourite.jpeg';
import book from '../../assets/assets/book.png';
import question from '../../assets/assets/question.png';
import share from '../../assets/assets/share.png';
import {recentVisit} from '../../services/utilities/api/auth';
import {useSelector} from 'react-redux';
import moment from 'moment';
import {useIsFocused} from '@react-navigation/native';

export const VisitDetail = ({navigation, route}) => {
  const [show, setshow] = useState(false);
  const token = useSelector(state => state.token);
  const [trainer, setTrainer] = useState();
  const [user, setUser] = useState();
  const [visit, setVisit] = useState();

  const [msgList, setMsgList] = useState([]);

  const isVisible = useIsFocused();

  const Toogle = () => {
    setshow(!show);
  };
  useEffect(() => {
    getPastVisit();
    getChat();
  }, [isVisible]);

  const getPastVisit = async () => {
    try {
      let response = await recentVisit(token);
      setVisit(response.data.visit);
      setTrainer(response.data.trainer[0]);
      setUser(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const getChat = async () => {
    var myHeaders = new Headers();
    myHeaders.append('Authorization', token);

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow',
    };

    fetch('http://alsyedmmtravel.com/api/chat_display', requestOptions)
      .then(response => response.json())
      .then(result => {
        setMsgList(result.data);
        console.log(result.data);
      })
      .catch(error => console.log('error', error));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View>
            <Text style={styles.hedtext}>Visit Details</Text>
          </View>
          <View style={styles.flex}>
            <View>
              <Text style={styles.providertex}>TRAINER</Text>
              <Text style={styles.subhead}>{trainer?.tr_name}</Text>
            </View>
            <View>
              <View style={styles.img}>
                <Image
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: sizes.screenWidth * 0.5,
                  }}
                  source={ladyy}
                />
              </View>
            </View>
          </View>

          <View>
            <Text style={styles.subhead}>DATE</Text>
            <Text style={styles.subhead}>
              {moment(visit?.created_at).format('DD/MM/YYYY')}
            </Text>
          </View>
          <View style={styles.crd}>
            <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={calender}
                />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('ChooseFollowUp')}>
                <Text style={styles.litext}>Schedule Follow-up</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={favourite}
                />
              </View>
              <TouchableOpacity>
                <Text style={styles.litext}>Add Provider to Favourites</Text>
              </TouchableOpacity>
            </View> */}
            <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image style={{width: '100%', height: '100%'}} source={book} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('GenerateReciept')}>
                <Text style={styles.litext}>Get a receipt</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image
                  style={{width: '100%', height: '100%'}}
                  source={question}
                />
              </View>
              <TouchableOpacity
                onPress={() => {
                  msgList.length
                    ? navigation.navigate('chatscreen')
                    : navigation.navigate('MessageSupport');
                }}>
                <Text style={styles.litext}>Message Support</Text>
              </TouchableOpacity>
            </View>
            {/* <View style={styles.flex2}>
              <View style={styles.imgicon}>
                <Image style={{width: '100%', height: '100%'}} source={share} />
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('sharevist')}>
                <Text style={[styles.litext, styles.padding]}>
                  Share Visit width an External Physicans
                </Text>
              </TouchableOpacity>
            </View> */}
          </View>
          <View style={styles.crd}>
            <Text style={styles.subhead}>Trainee</Text>
            <Text style={styles.providertex}>
              {user?.first_name} {user?.middle_name} {user?.last_name}
            </Text>
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>Trainer</Text>
            <Text style={[styles.subhead, styles.border]}>
              {trainer?.tr_desc}
            </Text>
            {/* {show ? (
              <Text style={[styles.subhead, styles.border]}>
                your connection.our customer support team is available 24/7 to
                get you reconnected.please email support@weightloseondeman.com
                or call 1-800-997-6196 for assistance.if you are having a
                medical emergency, please call 911 or proceed diretly to the
                emergency room
              </Text>
            ) : null} */}

            <View style={styles.borderbottom}></View>
            {/* <View>
              {show ? (
                <TouchableOpacity onPress={Toogle}>
                  <Text style={styles.addanother}>READ LESS</Text>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity onPress={Toogle}>
                  <Text style={styles.addanother}>READ MORE</Text>
                </TouchableOpacity>
              )}
            </View> */}
          </View>
          <View style={styles.crd}>
            <Text style={styles.providertex}>Documents</Text>
            <View style={styles.flex3}>
              <Text style={styles.litext1}>
                Receipt {moment(visit?.created_at).format('DD/MM/YYYY')}
              </Text>
              <Text style={styles.litext3}>{'>'}</Text>
            </View>
          </View>
          <View style={styles.crd}>
            <View>
              <Text style={styles.subhead}>Visit intake</Text>
              <Text style={styles.subhead}>PURPOSE OF VISIT</Text>
              <Text style={styles.subhead}>{visit?.reason}</Text>
              <View style={styles.borderbottom}></View>
              {/* <Text style={[styles.subhead, styles.mt]}>Time PERIOD</Text>
              <Text style={[styles.subhead, styles.mt]}>3 days</Text> */}
              {/* <View style={styles.borderbottom}></View> */}
              <Text style={[styles.subhead, styles.mt]}>SYMPTOMS</Text>
              <Text style={[styles.subhead, styles.mt]}>
                {visit?.response_1} {visit?.response_2} {visit?.response_3}
                {visit?.response_4} {visit?.response_5}
              </Text>
            </View>
          </View>
          {/* <View style={styles.crd}>
            <Text style={styles.subhead}>Visit Durations</Text>
            <Text style={styles.providertex}>0 min,25 sec</Text>
          </View> */}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  container1: {
    padding: sizes.screenWidth * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextHeading,
  },
  img: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.11,
  },
  flex: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  providertex: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextCondensed,
  },
  subhead: {
    fontSize: fontSize.h6,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  flex2: {
    flexDirection: 'row',
    marginBottom: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  litext: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    marginLeft: sizes.screenWidth * 0.03,
  },
  litext1: {
    fontSize: fontSize.large,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },
  litext3: {
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
  },

  imgicon: {
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.04,
  },
  crd: {
    paddingBottom: sizes.screenHeight * 0.03,
    marginTop: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight * 0.0,
    borderRadius: sizes.screenWidth * 0.02,
    // height:sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  padding: {
    paddingRight: sizes.screenWidth * 0.1,
  },
  border: {
    fontSize: fontSize.h6,
    color: colors.gray,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    // marginLeft:sizes.screenWidth*0.03,
  },
  borderbottom: {
    paddingTop: sizes.screenHeight * 0.03,

    borderBottomWidth: sizes.screenWidth * 0.002,
  },
  addanother: {
    paddingTop: sizes.screenHeight * 0.04,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  flex3: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: sizes.screenHeight * 0.02,
  },
  mt: {
    marginTop: sizes.screenHeight * 0.02,
  },
});
