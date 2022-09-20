import React, {useRef, useState} from 'react';
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
  TextInput,
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize} from '../../services';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export const ReasonForDcoctor = () => {
  const [search, setsearch] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>What is the reason for your visit ?</Text>
      </View>
      <View style={styles.seachViewmain}>
        <View style={styles.seachView}>
          <View style={styles.iconali}>
            <FontAwesome name="search" color={colors.secondary} size={26} />
          </View>
          <View style={styles.filedcon}>
            <TextInput placeholder="search" style={{color:colors.black,marginLeft:sizes.screenWidth*0.02}} />
          </View>
        </View>
      </View>
      <View style={styles.chooseContainer}>
        <Text style={styles.chosetext}>OR CHOOSE FROME TOP REASONS</Text>
      </View>
      <ScrollView >
      <View style={styles.listcontainer}>
       
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Cold</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Cough</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >CoronaVirus(Covid-19)elevation</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >InfluenZa(flu)</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Nasal congestion</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Sore throat</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Allergies</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Rash</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Acid reflux</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Allergic reaction</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Animal bite</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Anxiety</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Asthma</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Back pain</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Cold or cranker sore</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >CoronaVirus(Covid-19)education</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Depression</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Depression evaluation</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Diabetes</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Diarrhea</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Dizziness</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Earche</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Eczema</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Erectile dysfunction</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Eye issue</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Fever</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >General lab testing</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Gout</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Hiv PrEP</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Hair Loss</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Headache</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >High blood pressure</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Hight cholestrol</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >ingrown nail</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >insect bite or siting</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Insomnia</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Muscle or joint injury</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Muscle or joint pain</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Nail fungus</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Neck pain</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Other injury</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Other medication refill</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Other skin issue</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Refill for anxiety medication</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Refill for depression medication </Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Refill for diabetes medication</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Refill for hight blood pressure med</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >STD testing or treatment</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Shortness of breath</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >skin infection</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >smoking cessation</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Stomach pain</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Thyroid issue</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Tooth pain</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Travel advice</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Urinary tract infection (UTI)</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Vomiting</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton}>
                    <Text style={styles.text}  >Veight loss management</Text>
                </View>
            </TouchableOpacity>
        </View>
        <View style={styles.pading}>
            <TouchableOpacity>
                <View style={styles.lisbutton1}>
                    <Text style={styles.text}  >Other reason</Text>
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
    backgroundColor: colors.white,
  },
  headcontainer: {
    paddingLeft: sizes.screenWidth * 0.05,
  },
  chooseContainer:{
    paddingLeft: sizes.screenWidth * 0.05,
    paddingBottom: sizes.screenHeight * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h2,
    color: colors.black,
    fontWeight: 'bold',
  },
  seachView: {
    width:sizes.screenWidth * 0.9,
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: colors.secondary,
  },
  filedcon: {
    justifyContent: 'center',
    width: sizes.screenWidth * 0.8,
  },
  seachViewmain:{
    marginTop:sizes.screenHeight*0.04,
    marginBottom:sizes.screenHeight*0.03,
    justifyContent:'center',
    alignItems:'center'
  },
  chosetext:{
 fontSize:fontSize.large,
 color:colors.black,
 fontWeight:'bold'
  },
  listcontainer:{
    marginTop:sizes.screenHeight*0.03,
    justifyContent:'center',
    alignItems:'center'
  },
  lisbutton:{
    width:sizes.screenWidth*0.9,
    height:sizes.screenHeight*0.08,
    backgroundColor:colors.white,
   justifyContent:'center',
   alignItems:'center', 
   borderRadius:sizes.screenWidth*0.2,
   shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 7,
},
shadowOpacity: 0.43,
shadowRadius: 9.51,

elevation: 15,
  },
  lisbutton1:{
    width:sizes.screenWidth*0.9,
    height:sizes.screenHeight*0.08,
    justifyContent:'center',
   alignItems:'center', 
  },
  text:{
    fontSize:fontSize.large,
 color:colors.secondary,
 fontWeight:'bold'
  },
  pading:{
   marginBottom:sizes.screenHeight*0.01,
    // paddingTop:sizes.screenHeight*0.02
  }
});
