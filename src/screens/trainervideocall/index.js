import React, {useEffect, useRef, useState} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {colors, fontFamily, fontSize, sizes} from '../../services';
import {PermissionsAndroid, Platform} from 'react-native';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from 'react-native-agora';
import Header from '../../components/Header';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {useDispatch, useSelector} from 'react-redux';
import {getTrainer, getUser} from '../../services/utilities/api/auth';
import {removeData} from '../../store/actions';
const appId = '270b512970864b0a93b14650e52e8f9c';
const channelName = 'newVisit';
const token =
  '007eJxTYPj52X/29hrrxXcVZnh57To3+5CfeMi9qiXG5xV8Tpe1dFQoMBiZGySZGhpZmhtYmJkkGSRaGicZmpiZGqSaGqVapFkmx96MTm4IZGTY/ZOJhZEBAkF8Doa81PKwzOLMEgYGACVeIdY=';
const uid = 0;

export default function TrainerVideocalling({navigation, route}) {
  const agoraEngineRef = useRef(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); //
  const [channel_name, setChannelName] = useState('');
  var isMuted = false;
  const usertoken = useSelector(state => state.token);
  const showMessage = msg => {
    setMessage(msg);
  };

  const getPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
  };

  useEffect(() => {
    // join();
    setupVideoSDKEngine();
    getUserDetails();
  }, []);

  const getUserDetails = async () => {
    try {
      let response = await getTrainer(usertoken);
      setChannelName(response.data.data.channel);
      console.log(response.data.data.channel);
      // setUserName(response.data.data.first_name);
      // dispatch(storeUserData(response.data.data));
    } catch (error) {
      console.log(error);
    }
  };
  const setupVideoSDKEngine = async () => {
    try {
      // use the helper function to get permissions
      await getPermission();
      agoraEngineRef.current = createAgoraRtcEngine();
      const agoraEngine = agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          showMessage('Successfully joined the channel ' + channelName);
          setIsJoined(true);
        },
        onUserJoined: (_connection, Uid) => {
          showMessage('Remote user joined with uid ' + Uid);
          setRemoteUid(Uid);
        },
        onUserOffline: (_connection, Uid) => {
          showMessage('Remote user left the channel. uid: ' + Uid);
          setRemoteUid(0);
        },
      });
      agoraEngine.initialize({
        appId: appId,
      });
      agoraEngine.enableVideo();
    } catch (e) {
      console.log(e);
    }
  };

  const join = async () => {
    if (isJoined) {
      return;
    }
    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );

      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channel_name, uid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
      console.log('work---->>', token, channel_name, uid);
    } catch (e) {
      console.log(e);
    }
  };
  const switchCamera = () => {
    agoraEngineRef.switchCamera();
  };
  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');

      navigation.navigate('RateProvider', {trainer: route?.params?.trainer});
    } catch (e) {
      console.log(e);
    }
  };
  const mute = () => {
    isMuted = !isMuted;
    agoraEngineRef.current?.muteRemoteAudioStream(remoteUid, isMuted);
  };

  return (
    <SafeAreaView style={styles.main}>
      {/* <Header /> */}
      {/* <Text style={styles.head}>Agora Video Calling Quickstart</Text>   */}
      {/* <View style={styles.btnContainer}> */}
      <TouchableOpacity onPress={join}>
        <View style={styles.button}>
          <Text style={[styles.top]}>Join</Text>
        </View>
      </TouchableOpacity>
      {/* <Text onPress={leave} style={styles.button}>
          Leave
        </Text> */}
      {/* </View>  */}
      {/* <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContainer}>  */}
      {isJoined ? (
        <React.Fragment key={0}>
          <RtcSurfaceView canvas={{uid: 0}} style={styles.videoView1} />
          {/* <Text>Local user uid: {uid}</Text> */}
        </React.Fragment>
      ) : (
        <Text></Text>
      )}
      {isJoined && remoteUid !== 0 ? (
        <React.Fragment key={remoteUid}>
          <View>
            <RtcSurfaceView
              canvas={{uid: remoteUid}}
              style={styles.videoView}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingRight: sizes.screenWidth * 0.19,
              marginTop: sizes.screenHeight * 0.94,
              position: 'absolute',
              zIndex: 9,
            }}>
            <Ionicons
              name="ios-call-outline"
              color={colors.secondary}
              style={styles.button}
              size={20}
              onPress={leave}
              // onPress={toogle}
            />
            <Entypo
              name="sound-mute"
              color={colors.secondary}
              style={styles.button}
              size={20}
              onPress={mute}
              // onPress={toogle}
            />
            <MaterialCommunityIcons
              name="camera-flip"
              color={colors.secondary}
              style={styles.button}
              size={20}
              onPress={leave}
              // onPress={toogle}
            />
          </View>

          {/* <Text
                  // onPress={switchCamera}
                  onPress={leave}
                 style={styles.button}>Leave</Text> */}

          {/* <Text>Remote user uid: {remoteUid}</Text> */}
        </React.Fragment>
      ) : (
        <Text>{/* Waiting for a remote user to join */}</Text>
      )}
      {isJoined ? (
        <React.Fragment key={0}>
          <RtcSurfaceView canvas={{uid: 0}} style={styles.videoView1} />
          {/* <Text>Local user uid: {uid}</Text> */}
        </React.Fragment>
      ) : (
        <Text></Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width: sizes.screenWidth * 0.40,
    height: sizes.screenHeight * 0.21,
   
    backgroundColor: colors.secondary,
    borderRadius:sizes.screenWidth*0.7,
    paddingTop: sizes.screenWidth * 0.01,
    // margin: 5,
    // position: 'relative',
    // top:10,
    // bottom: sizes.screenHeight * 0.15,
    // left: sizes.screenWidth * 0.1,
    justifyContent:'center',
    alignItems:'center',
    // textAlign: 'center',
    // alignSelf:'center'
    // marginLeft: sizes.screenWidth * 0.09,

    
  },
  top:{
    fontSize: fontSize.large,
    fontWeight: 'bold',
    color: '#ffffff',
  },
  button1: {
    width: sizes.screenWidth * 0.2,
    height: sizes.screenHeight * 0.03,
    // paddingHorizontal: sizes.screenWidth*0.05,
    // paddingVertical: 4,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: colors.secondary,
    // margin: 5,
    position: 'relative',
    // bottom: sizes.screenHeight * 0.01,
    left: sizes.screenWidth * 0.4,
    textAlign: 'center',
  },

  main: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  scroll: {
    // flex: 1,
    // backgroundColor: '#ddeeff',
    width: '100%',
    // position: 'relative',
  },
  scrollContainer: {alignItems: 'center'},
  videoView: {
    width: '100%',
    zIndex: -1,
    height: sizes.screenHeight,

    // bottom:34
  },
  videoView1: {
    width: '50%',
    height: sizes.screenHeight * 0.25,
    position: 'absolute',
    marginTop: 8,
    top: sizes.screenHeight * 0.66,
    right: sizes.screenHeight * 0.02,
    zIndex: 111,
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  head: {fontSize: 20},
  info: {backgroundColor: '#ffffe0', color: '#0000ff'},
});
