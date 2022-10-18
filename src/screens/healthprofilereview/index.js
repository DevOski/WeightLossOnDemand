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
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
export const ReviewHealthprofile = ({navigation, route}) => {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Header dark={true} />
      </View>
      <ScrollView>
        <View style={styles.container1}>
          <View>
            <Text style={styles.hedtext}>
              Please review your health profile
            </Text>
          </View>
          <View style={styles.pa}>
            <View style={styles.box}>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>Medications</Text>
              </View>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>No active medicatyion</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('whichmedicationscreen')}>
                <Text style={styles.addanother}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>Drugs Allergies</Text>
              </View>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>No Known drug allergies</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('whichdrugallergi')}>
                <Text style={styles.addanother}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>Medical Conditions</Text>
              </View>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>No known medical conditions</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('whichmedicalconditions')}>
                <Text style={styles.addanother}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.box}>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>Surgeries</Text>
              </View>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>No Past surgeries</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('whichsurgeri')}>
                <Text style={styles.addanother}>Add</Text>
              </TouchableOpacity>
            </View>
            <View style={[styles.box, styles.b2]}>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>Family History</Text>
              </View>
              <View style={styles.borderrb}>
                <Text style={styles.textttt}>
                  No first-degree relatives with medical Conditions
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('whichmedicalconditions')}>
                <Text style={styles.addanother}>Add</Text>
              </TouchableOpacity>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => navigation.navigate('UserVisit')
              // route?.params?.pharmacy
              //   ? navigation.navigate('pharmacymaplocation')
              //   : navigation.navigate('doyouneeddoctor')
            }>
            <View style={styles.buttonView}>
              <Text style={styles.buttonText}>Confirm</Text>
            </View>
          </TouchableOpacity>
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
  container1: {
    padding: sizes.screenWidth * 0.05,
  },
  hedtext: {
    fontSize: fontSize.h4,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext1: {
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    fontSize: fontSize.medium,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtext2: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  hedtextcon: {
    marginTop: sizes.screenHeight * 0.05,
  },
  buttnView: {
    // marginRight:sizes.screenWidth*0.06,
    marginTop: sizes.screenHeight * 0.04,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight: 'bold',
  },
  buttonView: {
    marginTop: sizes.screenHeight * 0.02,
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
    // borderRadius: sizes.screenWidth * 0.2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  inonecon: {
    // flexDirection: 'row',
    // justifyContent: 'space-around',
    width: sizes.screenWidth * 0.94,
  },
  twoitem: {
    right: sizes.screenWidth * 0.03,
    marginBottom: sizes.screenHeight * 0.03,
    width: sizes.screenWidth * 0.9,
  },

  icon: {
    position: 'absolute',
    // left:sizes.screenWidth*0.3,
    // top:sizes.screenHeight *0.03,
    fontSize: fontSize.h2,
    // flexDirection:'row'
  },
  te: {
    top: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
    fontWeight: 'bold',
  },
  addanother: {
    paddingTop: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.secondary,
    fontWeight: 'bold',
  },
  box: {
    marginBottom: sizes.screenHeight * 0.03,
    borderRadius: sizes.screenWidth * 0.02,
    height: sizes.screenHeight * 0.24,
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.lightGray,
    padding: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    backgroundColor: colors.white,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  textttt: {
    paddingTop: sizes.screenHeight * 0.02,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.large,
    color: colors.black,
  },
  borderrb: {
    borderColor: colors.gray,
    //    height:sizes.screenHeight * 0.05,
    borderBottomWidth: 1,
  },

  pa: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  b2: {
    height: sizes.screenHeight * 0.26,
    width: sizes.screenWidth * 0.9,
  },
});
