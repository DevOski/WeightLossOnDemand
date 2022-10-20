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

const appId = '270b512970864b0a93b14650e52e8f9c';
const channelName = 'testing';
const token =
  '007eJxTYDjKaqESnVGwMHX69WCl+lUl+5I1GfYsFFlwetVlaX7nt0YKDEbmBkmmhkaW5gYWZiZJBomWxkmGJmamBqmmRqkWaZbJ66/5J68KZGSoZPnOzMgAgSA+O0NJanFJZl46AwMABjse/w=='
const uid = 0;



export default function Videocalling({navigation}) {
  const agoraEngineRef = useRef(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); //

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
    join();
    setupVideoSDKEngine();
  },[isJoined]);

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
    console.log('working');
    if (isJoined) {
      return;
    }
    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );

      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channelName, uid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
      console.log('work---->>', token, channelName, uid);
    } catch (e) {
      console.log(e);
    }
  };

  const leave = () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');
      
      navigation.navigate('RateProvider');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <SafeAreaView style={styles.main}>
        <Header/>
       {/* <Text style={styles.head}>Agora Video Calling Quickstart</Text>   */}
       {/* <View style={styles.btnContainer}> */}
        {/* <Text onPress={join} style={styles.button}>
          Join
        </Text> */}
        {/* <Text onPress={leave} style={styles.button}>
          Leave
        </Text> */}
      {/* </View>  */}
       {/* <ScrollView
            style={styles.scroll}
            contentContainerStyle={styles.scrollContainer}>  */}
            {isJoined ? (
                <React.Fragment key={0}>
         
                <RtcSurfaceView canvas={{uid: 0}} style={styles.videoView} />
                {/* <Text>Local user uid: {uid}</Text> */}
                </React.Fragment>
            ) : (
                <Text></Text>
            )}
          {isJoined && remoteUid !== 0 ? (
                <React.Fragment key={remoteUid}>
                <RtcSurfaceView
                    canvas={{uid: remoteUid}}
                    style={styles.videoView1}
                />
                 <Text onPress={leave} style={styles.button}>Leave</Text>
                {/* <Text>Remote user uid: {remoteUid}</Text> */}
                </React.Fragment>
            ) : (
                <Text>
                  {/* Waiting for a remote user to join */}
                  </Text>
            )}
            {/* <Text style={styles.info}>{message}</Text> */}
        {/* </ScrollView> */}
       
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    width:sizes.screenWidth*0.2,
    height:sizes.screenHeight*0.03,
    // paddingHorizontal: sizes.screenWidth*0.05,
    // paddingVertical: 4,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor:colors.secondary,
    // margin: 5,
    position:'relative',
    bottom:sizes.screenHeight*0.15,
    left:sizes.screenWidth*0.1,
    textAlign:'center',
   
  },
  main: {flex: 1, },
  scroll: {
    // flex: 1,
    // backgroundColor: '#ddeeff',
    width: '100%',
    // position: 'relative',
  },
  scrollContainer: {alignItems: 'center'},
  videoView: {width: '100%',
  // zIndex:-999,
  height:sizes.screenHeight,
  // bottom:34
},
  videoView1: {
    width: '50%',
     height: sizes.screenHeight*0.25,
     position:'absolute'
     ,top:sizes.screenHeight*0.66,
     right:sizes.screenHeight*0.02,
    //  zIndex:999
},
  btnContainer: {
    flexDirection: 'row',
   justifyContent: 'center'
  },
  head: {fontSize: 20},
  info: {backgroundColor: '#ffffe0', color: '#0000ff'},
  
});