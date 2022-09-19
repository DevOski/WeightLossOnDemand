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
import {colors, sizes, fontSize} from '../../services';
import {RadioButton} from 'react-native-paper';

export const ChildScreen = () => {
  const [CheckedMale, setCheckedMale] = React.useState();
  const [name, setname] = useState();
  const [lastname, setlastname] = useState();
  const [Middle, setMiddle] = useState();
  const [date, setdate] = useState();
  const [sufix, setsufix] = useState();
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>

      <View style={styles.headcontainer}>
        <Text style={styles.hedtext}>Add your child</Text>
      </View>

      <View
        style={{
          paddingLeft: sizes.screenWidth * 0.05,
          paddingRight: sizes.screenWidth * 0.05,
        }}>
        <View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'First Name'}
              value={name}
              setValue={setname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Middle Name (Optional)'}
              value={Middle}
              setValue={setMiddle}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Last Name'}
              value={lastname}
              setValue={setlastname}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Suffix (Optional)'}
              value={sufix}
              setValue={setsufix}
            />
          </View>
          <View style={styles.filedcon}>
            <CustomTextFiel
              label={'Date of birth'}
              value={date}
              setValue={setdate}
            />
          </View>
        </View>
        <View
          style={{flexDirection: 'row', paddingTop: sizes.screenHeight * 0.03}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: sizes.screenWidth * 0.04,
            }}>
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
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginRight: sizes.screenWidth * 0.02,
            }}>
            <Text style={styles.lstyle}>Female</Text>
            <RadioButton
              status={CheckedMale ? 'checked' : 'unchecked'}
              onPress={() => {
                setCheckedMale(!CheckedMale);
              }}
              color={'#be1d2d'}
              uncheckColor={colors.secondary}
            />
          </View>
          <View
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              backgroundColor: colors.lightGray,
              width: sizes.screenWidth * 0.08,
              height: sizes.screenHeight * 0.04,
              borderRadius: sizes.screenWidth * 0.4,
            }}>
            <Text style={styles.lstyle1}>?</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            marginTop: sizes.screenHeight * 0.04,
            marginBottom: sizes.screenHeight * 0.03,
          }}>
          <View style={styles.mrk}>
            <Text style={styles.lstyle2}>!</Text>
          </View>
          <View
            style={{
              paddingLeft: sizes.screenWidth * 0.05,
              paddingRight: sizes.screenWidth * 0.1,
            }}>
            <Text style={styles.lstylem}>
              Note :By continuing,I agree that I am legally authorized to make
              medical decisions for this individual
            </Text>
          </View>
        </View>
        <View style={styles.buttnView}>
          <TouchableOpacity>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Save</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
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
  hedtext: {
    fontSize: fontSize.h3,
    color: colors.black,
    fontWeight: 'bold',
  },
  lstyle: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '400',
    lineHeight: sizes.screenHeight * 0.05,
  },
  lstyle1: {
    fontSize: fontSize.h5,
    color: colors.black,
    fontWeight: '400',
  },
  mrk: {
    borderRadius: sizes.screenWidth * 0.05,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth * 0.06,
    height: sizes.screenHeight * 0.03,
    backgroundColor: colors.secondary,
  },
  lstyle2: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '400',
  },
  lstylem: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: '400',
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
  buttnView: {
    marginRight: sizes.screenWidth * 0.05,
    marginTop: sizes.screenHeight * 0.03,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
