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
} from 'react-native';
import Header from '../../components/Header';
import images from '../../services/utilities/images';
import {CustomTextFiel} from '../../component/textFiled';
import {colors, sizes, fontSize, fontFamily} from '../../services';
import ladyy from '../../assets/assets/ladyy.jpg'
import calender from '../../assets/assets/calender.png'
import favourite from '../../assets/assets/favourite.jpeg'
import book from '../../assets/assets/book.png'
import question from '../../assets/assets/question.png'
import share from '../../assets/assets/share.png'

export const VisitDetail = () => {
  return (
    <SafeAreaView style={styles.container}>
       <View>
        <Header dark={true}/>
       </View>
      <ScrollView>
      
       <View style={styles.container1}>
        <View>
            <Text style={styles.hedtext}>Visit Details</Text>
        </View>
        <View style={styles.flex}>
          <View>
            <Text style={styles.providertex}>PROVIDER</Text>
            <Text style={styles.subhead}>Kimberly Townsend-Scoot,Md</Text>
          </View>
          <View>
           <View style={styles.img}>
           <Image style={{width:"100%",height:"100%",   borderRadius:sizes.screenWidth*0.5}} source={ladyy}/>
           </View>
          </View>
        </View>

        <View>
          <Text style={styles.subhead}>DATE AND TIME</Text>
          <Text style={styles.subhead}>Mon,sep 12.8:15 Pm</Text>
        </View>
        <View style={styles.crd}>

<View style={styles.flex2}>
<View style={styles.imgicon}>
  <Image style={{width:'100%',height:'100%'}} source={calender}/>
</View>
  <Text style={styles.litext}>Schedule Follow-up</Text>
</View>
<View style={styles.flex2}>
<View style={styles.imgicon}>
  <Image style={{width:'100%',height:'100%'}} source={favourite}/>
</View>
  <Text style={styles.litext}>Add Provider to Favourites</Text>
</View>
<View style={styles.flex2}>
<View style={styles.imgicon}>
  <Image style={{width:'100%',height:'100%'}} source={book}/>
</View>
  <Text style={styles.litext}>Get areceipt</Text>
</View>
<View style={styles.flex2}>
<View style={styles.imgicon}>
  <Image style={{width:'100%',height:'100%'}} source={question}/>
</View>
  <Text style={styles.litext}>Message Support</Text>
</View>
<View style={styles.flex2}>
<View style={styles.imgicon}>
  <Image style={{width:'100%',height:'100%'}} source={share}/>
</View>
  <Text style={[styles.litext,styles.padding]}>Share Visit width an External provider</Text>
</View>


        </View>
        <View style={styles.crd}>
          <Text style={styles.subhead}>Patient</Text>
          <Text style={styles.providertex}>Jhone</Text>
        </View>
     

    
        

       </View>
       </ScrollView>
    </SafeAreaView>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.white,
    },
    container1:{
        padding:sizes.screenWidth*0.05
    },
    hedtext: {
        fontSize: fontSize.h3,
        color: colors.black,
        fontWeight: 'bold',
      },
      hedtext1:{
        fontSize: fontSize.large,
        color: colors.black,
        fontWeight: 'bold',
        fontFamily:fontFamily.appTextHeading
      },
      img:{
        width:sizes.screenWidth*0.20,
        height:sizes.screenHeight*0.11,
     
      },
      flex:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
     
      },
      providertex:{
        fontSize: fontSize.large,
        color: colors.gray,
        fontWeight: 'bold',
        fontFamily:fontFamily.appTextCondensed
      },
      subhead:{
        fontSize: fontSize.large,
        color: colors.gray,
        fontWeight: 'bold',
        fontFamily:fontFamily.appTextLight
      },
      flex2:{
        flexDirection:'row',
        marginBottom:sizes.screenHeight*0.02,
        alignItems:'center'
      },
      litext:{
        fontSize: fontSize.large,
        color: colors.gray,
        fontWeight: 'bold',
        fontFamily:fontFamily.appTextLight,
        marginLeft:sizes.screenWidth*0.03,
      },
      imgicon:{
        width:sizes.screenWidth*0.10,
        height:sizes.screenHeight*0.04
      },
      crd: {
        paddingBottom:sizes.screenHeight*0.03,
        marginTop:sizes.screenHeight*0.03,
        marginBottom:sizes.screenHeight*0.00,
        borderRadius:sizes.screenWidth*0.02,
        // height:sizes.screenHeight * 0.24,
        width: sizes.screenWidth * 0.90,
        borderWidth: 1,
        borderColor:colors.lightGray,
        padding: sizes.screenWidth * 0.04,
        shadowColor: '#000',
        backgroundColor:colors.white,
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    
        elevation: 5,
      },
      padding:{
        paddingRight:sizes.screenWidth*0.1,
      }
})
