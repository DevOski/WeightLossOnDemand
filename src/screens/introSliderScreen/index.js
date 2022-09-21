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
 } from '../../component/IntrComponent/index';
 const App = () => {
   const slides = [
     {id: 1, name: <Component />},
     {id: 2, name: <Componentsecond />},
     {id: 3, name: <Componentthrd />},
     {id: 4, name: <ComponentFour />},
   ];
   const [hideButton, setHideButton] = useState(false);
   let test;
   return (
     <SafeAreaView>
       <ScrollView
         horizontal
         showsHorizontalScrollIndicator={false}
         style={styles.srollwidth}
         disableIntervalMomentum={true}>
         {slides.map((item, index) => {
           return <View>{item.name}</View>;
         })}
       </ScrollView>
       {slides?.map((item, index) => {
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
       })}
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
    //  marginTop: deviceHeight * 0.02,
     flexDirection: 'row',
     justifyContent: 'space-between',
     paddingLeft: deviceWidth * 0.05,
     paddingRight: deviceWidth * 0.05,
     borderTopWidth: deviceWidth * 0.001,
     paddingTop: deviceHeight * 0.02,
   },
   paginatiioncon: {
     flexDirection: 'row',
     justifyContent: 'center',
     alignItems: 'center',
   },
   dot: {
     width: deviceWidth * 0.04,
     height: deviceHeight * 0.02,
     backgroundColor: 'red',
     borderRadius: deviceWidth * 0.5,
     marginLeft: deviceWidth * 0.02,
   },
   fontsiginandsignup: {
     fontSize: 25,
     color: 'red',
   },
 });
 
 export default App;