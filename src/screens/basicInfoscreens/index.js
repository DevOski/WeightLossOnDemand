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
} from 'react-native';
import {RadioButton} from 'react-native-paper';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, fontSize, sizes} from '../../services';
import {CustomTextFiel} from '../../component/textFiled';
const BasicInfoScreen = ({navigation}) => {
    const [CheckedMale, setCheckedMale] = React.useState();
    const [CheckedFemale, setCheckedFemale] = React.useState();
    const [CheckedOther, setCheckedOther] = React.useState();
  const [name, setname] = useState();
  const [lastname, setlastname] = useState();
  const [phonenumber, setphonenumber] = useState();
  const [slectnumber, setslectnumber] = useState();
  const [Middle, setMiddle] = useState()
  const [show, setshow] = useState(false)
  const [Fieldsshowhide, setFieldsshowhide] = useState(false)

const [Prefix, setPrefix] = useState()
const toogle=()=>{
    setshow(!show )
}
const ShowFiled =()=>{
    setFieldsshowhide(!Fieldsshowhide)
}

  return (
    <SafeAreaView style={styles.container}>
        <ScrollView>
      <View style={styles.inercontainer}>
        <View style={styles.basicinfocontainer}>
          <Text style={styles.basicinfo}> Basic Info</Text>
        </View>
        <View style={styles.spayrainfo}>
          <Text style={styles.basicinfophyra}>
            please tell us some basic info to complete{' '}
          </Text>
          <Text style={styles.basicinfophyra}> your profile</Text>
        </View>
        <View>
        { !Fieldsshowhide ?<View style={styles.filedcon}>
            <CustomTextFiel
              label={'Prefix'}
              value={Prefix}
              setValue={setPrefix}
            />
          </View>:null} 
       
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'First Name'}
              value={name}
              setValue={setname}
            />
          </View>
         {!Fieldsshowhide ? <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Middle Name'}
              value={Middle}
              setValue={setMiddle}
            />
          </View>:null}
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Last Name'}
              value={lastname}
              setValue={setlastname}
            />
            
          </View>
          {!Fieldsshowhide ?  <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Suffix'}
              value={lastname}
              setValue={setlastname}
            />
            
          </View>:null}
         
          <View style={styles.inonecon}>
            <View style={styles.twoitem}>
              <CustomTextFiel
                label={'Phone number'}
                value={phonenumber}
                setValue={setphonenumber}
                style={styles.twoitem}
              />
            </View>
            <View style={styles.twoitem}>
            <CustomTextFiel
                label={'Mobile'}
                value={slectnumber}
                setValue={setslectnumber}
                style={styles.twoitem}
              />
              <MaterialIcons name="expand-more" color={colors.secondary} style={styles.icon} size={20} onPress={toogle} />
              { !show ?<View style={styles.pap}>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Mobile');setshow(!show)}}>Mobile</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Work');setshow(!show)}}>Work</Text>
                <Text style={styles.lstyle} onPress={()=>{setslectnumber('Home');setshow(!show)}}>Home</Text>
            </View>:null}
            </View>
           
          </View>
          <View style={styles.expndbuttoncontainer}>
            <TouchableOpacity onPress={ShowFiled}>
               {!Fieldsshowhide ?<Text style={styles.lstyle}>COLLAPSE</Text>:<Text style={styles.lstyle}> Expand</Text>} 
              {!Fieldsshowhide ? <MaterialIcons name="expand-less" color={colors.secondary} style={!Fieldsshowhide? styles.iconexp:styles.iconexp2} size={20}  />: <MaterialIcons name="expand-more" color={colors.secondary} style={!Fieldsshowhide? styles.iconexp:styles.iconexp2} size={20}  />} 
            </TouchableOpacity>
           

          </View>
        </View>
        <View style={styles.genContainer}>
            <Text style={styles.lstyle}>GENDER</Text>
        </View>
<View style={styles.gcon}>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.lstyle}>Male</Text>
        <RadioButton
        status={CheckedMale ? 'checked' : 'unchecked'}
        onPress={() => {
           setCheckedMale(!CheckedMale);
        }}
        color={'#be1d2d'}
        uncheckColor={colors.secondary}
      />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.lstyle}>Female</Text>
        <RadioButton
        status={CheckedFemale? 'checked' : 'unchecked'}
        onPress={() => {
            setCheckedFemale(!CheckedFemale);
        }}
        color={'#be1d2d'}
        uncheckColor={colors.secondary}
      />
    </View>
    <View style={{flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
        <Text style={styles.lstyle}>Other</Text>
        <RadioButton
        status={CheckedOther ? 'checked' : 'unchecked'}
        onPress={() => {
            setCheckedOther(!CheckedOther);
        }}
        color={'#be1d2d'}
        uncheckColor={colors.secondary}
      />
    </View>
</View>
<View style={styles.termspayra}>
    <View>
        <Text style={styles.tremtext}>By providing your Mobile number,you give us permission to contact you via text,<TouchableOpacity><Text style={styles.tremtextbutt}>View terms.</Text></TouchableOpacity></Text>
    </View>
</View>
<View style={styles.buttocon}>
    <TouchableOpacity onPress={()=>navigation.navigate('insurancescreen')} >
        <View style={styles.buttoconSTYLE} >
            <Text style={styles.continue}>
                Continue
            </Text>
        </View>
    </TouchableOpacity>
</View>
      </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default BasicInfoScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  inercontainer: {
    padding: 20,
  },
  basicinfo: {
    fontSize: fontSize.h2,
    fontWeight: '700',
    color: colors.black,
  },
  basicinfophyra: {
    fontSize: fontSize.h6,
    fontWeight: '500',
    color: colors.black,
    textAlign: 'auto',
  },
  basicinfocontainer: {
    paddingBottom: sizes.screenHeight * 0.03,
  },
  spayrainfo: {
    paddingBottom: sizes.screenHeight * 0.05,
  },
  filedcon: {
    marginBottom: deviceHeight * 0.03,
  },
  twoitem: {
    marginBottom: deviceHeight * 0.03,
    width: sizes.screenWidth * 0.4,
  },
  inonecon: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  icon:{
position:'absolute',
left:sizes.screenWidth*0.3,
top:sizes.screenHeight *0.03,
fontSize:fontSize.h2
    // flexDirection:'row'
  },
  iconexp:{
    position:'absolute',
left:sizes.screenWidth*0.3,
top:sizes.screenHeight *0.01,
fontSize:fontSize.h2
  },
  iconexp2:{
    position:'absolute',
left:sizes.screenWidth*0.2,
top:sizes.screenHeight *0.01,
fontSize:fontSize.h2
  },
  pap:{
    
    width:sizes.screenWidth*0.4,
    heigh:sizes.screenHeight*0.9,
    backgroundColor:colors.white
  },
  lstyle:{
    fontSize:fontSize.h5,
    color:colors.black,
    fontWeight:"400",
    lineHeight:sizes.screenHeight*0.05
  },
  expndbuttoncontainer:{
    justifyContent:'center',
    alignItems:'center'
  },
  genContainer:{
    marginTop:sizes.screenHeight*0.05,
    paddingLeft:sizes.screenWidth*0.05,
    height:sizes.screenHeight*0.08,
    backgroundColor:colors.lightGray,
    justifyContent:'center',
    alignItems:'flex-start'
  },
  gcon:{
    paddingTop:sizes.screenHeight*0.03
  },
  termspayra:{
    paddingTop:sizes.screenHeight*0.05
  },
  tremtext:{
    fontSize:fontSize.medium
  },
  tremtextbutt:{
    fontSize:fontSize.h6,
    color:colors.secondary
  },
  buttocon:{
    paddingTop:sizes.screenHeight*0.05,
    justifyContent:'center',
    alignItems:'center',
  },
  buttoconSTYLE:{
    paddingTop:sizes.screenHeight*0.02,
    paddingBottom:sizes.screenHeight*0.02,
    width:sizes.screenWidth*0.9,
    heigh:sizes.screenHeight*0.99,
    backgroundColor:colors.secondary,
    justifyContent:'center',
    alignItems:'center'
  },
  continue:{
    color:colors.white,
    fontSize:fontSize.h5
  }
});
