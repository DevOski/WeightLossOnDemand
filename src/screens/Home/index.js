import {useIsFocused} from '@react-navigation/native';
import moment from 'moment';
import React, {useEffect, useRef, useState} from 'react';
import {
  Image,
  ImageBackground,
  Platform,
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import GetCare from '../../components/GetCare';
import {sizes} from '../../services';
import {LocalNotification} from '../../services/LocalNotificationController';
import {
  getAllTrainers,
  getUser,
  recentVisit,
  trainerAppointment,
  trainerRecentAppointment,
  userAppointment,
} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {storeUserData} from '../../store/actions';
import {styles} from './style';
import bg1 from '../../assets/bg1.jpeg';
import PushNotificationIOS from '@react-native-community/push-notification-ios';

export default function Home({navigation}) {
  const [userName, setUserName] = useState('');
  const [item, setItem] = useState([
    'Text1',
    'Text2',
    'Text3',
    'Text3',
    // 'Text5',
  ]);
  const [imgActive, setImgActive] = useState(0);
  const [trainerList, setTrainerList] = useState([]);
  const [pastVisit, setPastVisit] = useState();
  const [visitDetails, setVisitDetails] = useState();
  const [loader, setLoader] = useState(false);

  const token = useSelector(state => state.token);
  const dispatch = useDispatch();
  const isVisible = useIsFocused();

  useEffect(() => {
    getUserDetails();
    getTrainers();
    getPastVisit();
    getRecentAppointment();
  }, [isVisible]);

  const getUserDetails = async () => {
    setLoader(true);
    setTimeout(async () => {
      try {
        let response = await getUser(token);
        setUserName(response.data.data.first_name);
        dispatch(storeUserData(response.data.data));
        setLoader(false);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    }, 100);
  };
  const getTrainers = async () => {
    try {
      let response = await getAllTrainers();
      setTrainerList(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getPastVisit = async () => {
    try {
      let response = await recentVisit(token);
      setPastVisit(response.data.trainer[0]);
      setItem(['item1', 'item2', 'item3', 'item4', 'item5']);
      setVisitDetails(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const getRecentAppointment = async () => {
    try {
      const time = new Date().getTime();
      let currentTime = ` ${moment(time).format('HH:MM:SS')}`;
      let date = new Date().toJSON();
      let currentDate = moment(date).format('YYYY-MM-DD');
      let currentFinalDate = currentDate + currentTime;
      let response = await userAppointment(token);
      console.log(response.data.data);
      if (
        response.data.data.tr_name !== 'random' &&
        currentFinalDate == response.data.data.apt_time
      ) {
        console.log(response.data.data);
        navigation.navigate('ProviderReview', {
          tr_id: response.data.data.trainer_id,
          tr_name: response.data.data.tr_name,
          q1: response.data.data.response_1,
          q2: response.data.data.response_2,
          q3: response.data.data.response_3,
          q4: response.data.data.response_4,
          q5: response.data.data.response_5,
          reason: response.data.data.reason,
          tr_amount: response.data.data.amount,
          tr_image: response.data.image,
          apt_id: response.data.data.ap_id,
        });
      } else if (
        response.data.data.tr_name == 'random' &&
        currentFinalDate == response.data.data.apt_time
      ) {
        handleNotif();
        navigation.navigate('FindingProvider', {
          apt_id: response.data.data.ap_id,
        });
      }
    } catch (error) {
      console.log('ée', error);
    }
  };

  const onchange = nativeEvent => {
    if (nativeEvent) {
      const slide = Math.ceil(
        nativeEvent.contentOffset.x / nativeEvent.layoutMeasurement.width,
      );
      if (slide != imgActive) {
        setImgActive(slide);
      }
    }
  };
  const handleNotif = () => {
    if (Platform.OS !== 'ios') {
      LocalNotification();
    }
    else{
      PushNotificationIOS.presentLocalNotification({
        alertTitle: 'Your session is getting started',
        alertBody: 'Get ready for a training session.',
      });
    }
   

    // let date = new Date(Date.now() + 10 * 1000);
    // console.log(date);
    // alert()
  };
  const handleAPI = () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow',
    };

    fetch('http://alsyedmmtravel.com/api/receipt', requestOptions)
      .then(response => response.text())
      .then(result => console.log(result))
      .catch(error => console.log('error', error));
  };

  return (
    <SafeAreaView>
      <ScrollView style={styles.color}>
        <View style={[styles.row, styles.padding]}>
          <Image source={images.icon2} style={styles.icon} />
          <View>
            <Text style={styles.heading}> Hi {userName},</Text>
            <Text style={styles.welcomeText}> Welcome back</Text>
          </View>
          <View style={styles.transparentView}></View>
          <TouchableOpacity
            onPress={
              () => navigation.navigate('Setting')
              // handleAPI
              // handleNotif
            }>
            <Image source={images.setting} style={styles.settingIcon} />
          </TouchableOpacity>
        </View>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.wrap}>
          {item?.map((item, index) => {
            return (
              <View
                key={index}
                style={
                  Platform.OS !== 'ios' ? styles.cardView : styles.cardViewIOS
                }>
                {index == 0 && (
                  <ImageBackground
                    key={index}
                    source={images.bg1}
                    style={[styles.bg,{opacity:1}]}>
                    <TouchableOpacity
                      onPress={() =>
                        navigation.navigate('VideoPlayer', {
                          uri: 'https://www.youtube.com/embed/JLnycPtolfw',
                        })
                      }>
                      <View
                        style={
                          Platform.OS !== 'ios'
                            ? styles.playBtn
                            : styles.playBtnIOS
                        }>
                        <Image
                          source={images.playIcon}
                          style={styles.playIcon}
                        />
                      </View>
                    </TouchableOpacity>
                    <View style={styles.textView}>
                      <Text style={styles.text}>
                        What to expect during your initial session?
                      </Text>
                    </View>
                    <View style={[styles.semiTextView, styles.row2]}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('HowItWorks')}>
                        <Text style={styles.semiText}>
                          How It Works <Text style={styles.symbol}> ›</Text>
                        </Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                )}
                {index == 1 && (
                  <View key={index} style={styles.padding}>
                    <Text style={[styles.heading, styles.top]}>Consultant</Text>
                    <Text style={styles.providerText}>
                      Our professional consultants can handle a wide range of
                      weight loss goals. The program has four phases:
                    </Text>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>
                        Introduction
                      </Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>Weight loss</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>
                        Pre-maintenance
                      </Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>●</Text>
                      <Text style={styles.addText}>Maintenance</Text>
                    </View>
                    

                    <View style={styles.btnTop}>
                      <GetCare />
                      <TouchableOpacity
                        onPress={() => navigation.navigate('Medical')}>
                        <View style={styles.learnMoreBtn}>
                          <Text style={styles.learnMoreText}>Explore</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {/* {index == 2 && (
                  <View key={index} style={styles.padding}>
                    <Text style={[styles.heading, styles.top]}>
                      Mental health
                    </Text>
                    <Text style={styles.providerText}>
                      Our therapists and psychiatrists can help with:
                    </Text>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Depression & anxiety</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Workplace stress</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Addiction</Text>
                    </View>
                    <View style={styles.row2}>
                      <Text style={styles.addIcon}>✚</Text>
                      <Text style={styles.addText}> Trauma & loss</Text>
                    </View>
                    <View style={styles.btnTop2}>
                      <GetCare />
                      <TouchableOpacity
                        onPress={() =>
                          navigation.navigate('mentalhealthscreen')
                        }>
                        <View style={styles.learnMoreBtn}>
                          <Text style={styles.learnMoreText}>Learn more</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )} */}
                {index == 2 && (
                  <ImageBackground
                    key={index}
                    source={images.bg2}
                    style={styles.bg}>
                    <View style={styles.paddingBottom}></View>
                    <View style={styles.proudView}>
                      <Text style={styles.text2}>
                        We're more than just proud
                      </Text>
                      <Text style={styles.letUsText}>
                        Let us assist you in finding the right trainer for you.
                      </Text>
                    </View>
                    <View style={[styles.learnMoreView, styles.row2]}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('beyondscreen')}>
                        <Text style={styles.semiText}>Learn more</Text>
                        <Text style={styles.symbol}> ›</Text>
                      </TouchableOpacity>
                    </View>
                  </ImageBackground>
                )}
                {index == 3 && (
                  <View key={index} style={[styles.padding]}>
                    <Text style={[styles.heading, styles.top]}>
                      Meet our consultants
                    </Text>
                    {trainerList?.map((item, index) => {
                      console.log(item.images);
                      if (index < 6) {
                        return (
                          <View
                            key={index}
                            style={[styles.row2, styles.paddingLeft]}>
                            <Image
                              source={{uri: item.images}}
                              style={
                                Platform.OS !== 'ios'
                                  ? styles.providerImg
                                  : styles.providerImgIOS
                              }
                            />
                            <View>
                              <Text style={styles.providerHead}>
                                {item.tr_name}
                              </Text>
                              <Text style={styles.providerProfession}>
                                {item?.type}
                              </Text>
                            </View>
                          </View>
                        );
                      }
                    })}

                    {/* <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider2}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Elizabeth Curlin, PhD
                        </Text>
                        <Text style={styles.providerProfession}>
                          Psychologist
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider3}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Tracie DeJarnette-Holl...
                        </Text>
                        <Text style={styles.providerProfession}>
                          Psychiatrist
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider4}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Diana Malone, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider5}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>Aline Daou, MD</Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>
                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider6}
                        style={styles.providerImg2}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          Melissa Colbern, MD
                        </Text>
                        <Text style={styles.providerProfession}>
                          Medical Doctor
                        </Text>
                      </View>
                    </View>*/}
                    <View style={styles.seeBtn}>
                      <TouchableOpacity
                        onPress={() => navigation.navigate('meetOurproviders')}>
                        <View style={[styles.learnMoreBtn, styles.row2]}>
                          <Text style={styles.learnMoreText}>
                            Connect to all consultants
                          </Text>
                          <Text style={styles.symbol}> ›</Text>
                        </View>
                      </TouchableOpacity>
                    </View>
                  </View>
                )}
                {index == 4 && (
                  <View key={index} style={[styles.padding]}>
                    <Text style={[styles.heading, styles.top]}>
                      Recent Visit
                    </Text>

                    <View style={[styles.row2, styles.paddingLeft]}>
                      <Image
                        source={images.provider1}
                        style={styles.providerImg}
                      />
                      <View>
                        <Text style={styles.providerHead}>
                          {pastVisit?.tr_name}
                        </Text>
                        <Text style={styles.providerProfession}>
                          {/* Townsend-scott,MD */}
                          {pastVisit?.type}
                        </Text>
                        <Text style={styles.providerProfession}>
                          {/* sep 12,2022 */}
                          {moment(pastVisit?.updated_at).format('DD/MM/YYYY')}
                        </Text>
                      </View>
                    </View>
                    <View>
                      <Text style={styles.he}>DESCRIPTION:</Text>
                    </View>
                    <View style={styles.het1}>
                      <Text
                        style={styles.het}
                        numberOfLines={9}
                        ellipsizeMode="tail">
                        {pastVisit?.tr_desc}
                      </Text>
                    </View>
                    <View style={styles.seeBtn}>
                      <View style={styles.buttnView}>
                        <TouchableOpacity
                          onPress={() => navigation.navigate('VisitDetail')}>
                          <View style={styles.buttonView}>
                            <Text style={styles.buttonText}>
                              View Full summary
                            </Text>
                          </View>
                        </TouchableOpacity>
                      </View>
                    </View>
                  </View>
                )}
              </View>
            );
          })}
        </ScrollView>
        <View style={styles.wrapDot}>
          {item?.map((item, index) => {
            return (
              <View>
                <Text
                  key={index}
                  style={imgActive == index ? styles.dotActive : styles.dot}>
                  ▂▂
                </Text>
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
