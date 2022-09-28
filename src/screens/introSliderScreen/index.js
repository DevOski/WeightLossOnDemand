/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
import {
  Component,
  Componentsecond,
  Componentthrd,
  ComponentFour,
} from '../../component/IntrComponent';
import {colors, fontFamily, fontSize, sizes} from '../../services';
// FontAwesome
import Entypo from 'react-native-vector-icons/Entypo';
import Loader from '../../components/Loader';

const Intro = ({navigation}) => {
  const slides = [
    {id: 1, name: <Component />},
    {id: 2, name: <Componentsecond />},
    {id: 3, name: <Componentthrd />},
    {id: 4, name: <ComponentFour />},
  ];
  const [imgActive, setImgActive] = useState(0);

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
  return (
    <SafeAreaView>
      <ScrollView>
        <ScrollView
          onScroll={({nativeEvent}) => onchange(nativeEvent)}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          style={styles.srollwidth}
          disableIntervalMomentum={true}>
          {slides.map((item, index) => {
            return <View>{item.name}</View>;
          })}
        </ScrollView>

        {/* {slides?.map((item, index) => {
         console.log(item.id);
         return (
           <>
             {item.id == 4 ? (
               <View style={styles.footer}>
                 <TouchableOpacity>
                   <Text style={styles.fontsiginandsignup}>sign In</Text>
                 </TouchableOpacity>
                 <View style={styles.paginatiioncon}>
                   <View style={styles.dot} />
                   <View style={styles.dot} />
                   <View style={styles.dot} />
                   <View style={styles.dot} />
                 </View>
 
                 <TouchableOpacity>
                   <Text style={styles.fontsiginandsignup}>signUp</Text>
                 </TouchableOpacity>
               </View>
             ) : null}
           </>
         );
      //  })} */}
        {/* {
        imgActive !==3 && (
          
        )
      } */}
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-around',
            padding: 20,
          }}>
          {imgActive !== 3 && (
            <View style={[styles.footer, styles.top]}>
              <TouchableOpacity
                onPress={() => navigation.navigate('signinscreen')}>
                <Text style={styles.fontsiginandsignup}>Sign In</Text>
              </TouchableOpacity>
            </View>
          )}
          <View style={styles.wrapDot}>
            {slides?.map((item, index) => {
              return (
                <View>
                  {imgActive !== 3 && (
                    <View>
                      <Text
                        // key={index}
                        style={
                          imgActive == index ? styles.dotActive : styles.dot
                        }>
                        <Entypo
                          name="dot-single"
                          color={colors.secondary}
                          size={30}
                        />
                      </Text>
                    </View>
                  )}
                </View>
              );
            })}
            {imgActive !== 3 && (
              <View style={[styles.footer, styles.top]}>
                <TouchableOpacity
                  onPress={() => navigation.navigate('signupscreen')}>
                  <Text style={styles.fontsiginandsignup}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  srollwidth: {
    width: deviceWidth,
  },
  footer: {
    //  marginTop: deviceHeight * 0.09,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: deviceWidth * 0.05,
    paddingRight: deviceWidth * 0.05,
    // borderTopWidth: deviceWidth * 0.001,
    //  paddingTop: deviceHeight * 0.02,
  },
  paginatiioncon: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },

  dot: {
    margin: 3,
    color: colors.secondary,
    opacity: 0.6,
    fontSize: fontSize.h2,
  },
  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
    // position:'absolute',
    // top:sizes.screenHeight * 0.19,
  },
  wrap: {
    width: sizes.screenWidth * 0.96,
  },
  dotActive: {
    margin: 3,
    color: colors.secondary,
    fontSize: fontSize.h2,
  },
  top: {
    bottom: sizes.screenHeight * 0.01,
  },
  fontsiginandsignup: {
    fontSize: fontSize.h5,
    color: colors.secondary,
    fontFamily: fontFamily.appTextHeading,
    fontWeight: '700',
  },
});

export default Intro;
