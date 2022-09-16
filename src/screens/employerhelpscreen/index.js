import React, {useState} from 'react';
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
  Button,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import AntDesign from 'react-native-vector-icons/AntDesign';

import {colors, fontSize, sizes} from '../../services';
import {CustomTextFiel} from '../../component/textFiled';
import Header from '../../components/Header';
import medicalCard from '../../assets/medicalCard.png';

export const Employerhelp = ({navigation}) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header dark={true} />
        </View>
        <View style={styles.im}>
          <View>
            <Image source={medicalCard} />
          </View>
        </View>
        <View style={styles.payra}>
          <View>
            <Text style={styles.tex}>Does your employer help cover Doctor on Demand visits?</Text>
          </View>
        </View>
        <View style={styles.payra2}>
          <View>
            <Text style={styles.tex1}>400+ employers partner directly with Doctor on Demand to provide benefits to their employess</Text>
          </View>
        </View>
        <View style={styles.btncontainer}>
            <View style={styles.gap}>
                <TouchableOpacity onPress={()=>navigation.navigate("wellcomescreen")}>
                <View style={styles.buttonView}>
          <Text style={styles.buttonText}> Yes</Text>
        </View>
                </TouchableOpacity>
            </View>
            <View>
                <TouchableOpacity onPress={()=>navigation.navigate("wellcomescreen")}>
                <View style={styles.buttonView}>
          <Text style={styles.buttonText}>No</Text>
        </View>
                </TouchableOpacity>
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
  im: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  payra: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop:sizes.screenHeight*0.05,
    
  },
  payra2: {
    paddingTop:sizes.screenHeight*0.05,
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft:sizes.screenWidth*0.15,
    paddingRight:sizes.screenWidth*0.2
    
  },
  tex:{
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: '500',
    textAlign:'center',
  },
  tex1:{
    textAlign:'center',
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '500',
  },
  buttonView: {
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.8,
    alignItems: 'center',
    justifyContent: 'center',
  },
 
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  btncontainer:{
    marginTop:sizes.screenHeight*0.2,
    justifyContent:'center',
    alignItems:'center'
  },
  gap:{
    marginBottom:sizes.screenHeight*0.04
  }
});
