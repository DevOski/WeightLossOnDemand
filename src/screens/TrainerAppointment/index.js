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
import {removeData} from '../../store/actions';
import GetCare from '../../components/GetCare';
import Loader from '../../components/Loader';
import {sizes} from '../../services';
import {
  getAllTrainers,
  getTrainer,
  getUser,
  recentVisit,
} from '../../services/utilities/api/auth';
import images from '../../services/utilities/images';
import {storeUserData} from '../../store/actions';
import {styles} from './style';

export default function TrainerAppointment({navigation}) {
  const [userName, setUserName] = useState('');
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [loader, setLoader] = useState(false);
  const token = useSelector(state => state.token);
  console.log(token);
  const dispatch = useDispatch();
  const isVisible = useIsFocused();

  useEffect(() => {
    getTrainerInfo();
  }, [isVisible]);

  const getTrainerInfo = async () => {
    try {
      let response = await getTrainer(token);
      console.log(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };
  const handleSignOut = () => {
    dispatch(removeData());
  };

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
          <TouchableOpacity onPress={() => setIsModalVisible(true)}>
              <Text style={styles.signOutText}>Sign Out</Text>
            </TouchableOpacity>
        </View>
        <FlatList
          data={data}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate(item.screen)}>
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
         {isModalVisible && (
          <Modal style={styles.modalView} isVisible={isModalVisible}>
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
              <Text style={styles.text111}>Are you sure?</Text>
            </View>
            <View style={styles.texcon1}>
              <Text style={styles.text1}>
                Are you sure you want to sign out?
              </Text>
            </View>
            <View style={styles.buttnView}>
              <TouchableOpacity onPress={handleSignOut}>
                <View style={styles.buttonView}>
                  <Text style={styles.buttonText}>Yes</Text>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.noBtn}>
              <TouchableOpacity onPress={toggleModal}>
                <View style={styles.buttonView1}>
                  <Text style={styles.buttonText}>No</Text>
                </View>
              </TouchableOpacity>
            </View>
          </Modal>
        )}
        {Loader && <Loader />}
      </ScrollView>
    </SafeAreaView>
  );
}
