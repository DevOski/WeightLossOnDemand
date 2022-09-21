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
  TextInput,
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import Entypo from 'react-native-vector-icons/Entypo';
import {colors, fontSize, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../components/Header';
import Modal from 'react-native-modal';
import { NavigationHelpersContext } from '@react-navigation/native';

export const VisitScreen = ({navigation}) => {
  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View>
          <Header dark={true} />
        </View>
        <View style={styles.container2}>
          <View>
            <Text style={styles.visitfortext}>Who is this Visit for ?</Text>
          </View>

          <View style={styles.buttondiv}>
            <View style={styles.buttonchilddiv}>
              <TouchableOpacity onPress={()=>navigation.navigate("correctinfoscreen")} >
                <View style={[styles.row, styles.card]}>
                  <View style={styles.namefirt}>
                    <Text style={styles.fname}>J</Text>
                  </View>
                  <View>
                    <Text style={styles.cardText}>{'   '}Jhone</Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <View style={styles.buttonchilddiv}>
              <TouchableOpacity onPress={()=>navigation.navigate("addchildscreen")}>
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
                      If the patient is over 18 ,they need to create their own
                      account ,even if they are dependent on your health plan
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
            <Modal style={{width:sizes.screenWidth,height:sizes.screenHeight,backgroundColor: 'rgba(52, 52, 52, 0.8)',marginLeft:sizes.screenWidth*0.01,padding:10}}  isVisible={isModalVisible}>
         <TouchableOpacity onPress={toggleModal}>
         <View style={{position:'relative',bottom:sizes.screenHeight*0.25,left:sizes.screenWidth*0.85}}>
          <Entypo
                    name="cross"
                    color={colors.secondary}
                    size={30}
                  />
          </View>
         </TouchableOpacity>
          
           <View style={styles.texcon}>
            <Text style={styles.text111}>Trying to set Up a visit for Someone else ?</Text>
           </View>
           <View style={styles.texcon1}>
            <Text style={styles.text1}>if the patient is over 18,they need to create their own account.if they are a dependent under your health plan,they can add your insurance to thier account</Text>
           </View>

           <View style={styles.buttnView}>
          <TouchableOpacity onPress={()=>navigation.navigate("signupscreen")}>
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

          </Modal>


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
  },
  faqText: {
    color: colors.secondary,
    fontSize: fontSize.h6,
  },
  faqText2: {
    marginTop: sizes.screenHeight * 0.02,
    color: colors.secondary,
    fontSize: fontSize.h7,
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.03,
    marginBottom: sizes.screenHeight*-0.01,
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
  fname: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  buttondiv:{
    marginTop:sizes.screenHeight*0.05
  },
  buttonchilddiv:{
    marginBottom:sizes.screenHeight*0.03
  },
  text111:{
    fontSize:fontSize.h4,
    color:colors.white,
    fontWeight:"bold"
  },
  texcon:{
    bottom:sizes.screenHeight*0.1
  },
  texcon1:{
    bottom:sizes.screenHeight*0.08
  },
  text1:{
    fontSize:fontSize.large,
    color:colors.white,
    fontWeight:"bold"
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop:sizes.screenHeight*0.03,
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
  buttonView1:{
    borderWidth:1,
    borderColor:colors.white,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.91,
    alignItems: 'center',
    justifyContent: 'center',
  }
});
