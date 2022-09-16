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
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import {colors, fontSize, sizes} from '../../services';
import Octicons from 'react-native-vector-icons/Octicons';
import Header from '../../components/Header';

export const VisitScreen = () => {
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
              <TouchableOpacity>
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
              <TouchableOpacity>
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
              <TouchableOpacity>
                <View style={[styles.row, styles.card]}>
                  <View>
                    <Text style={styles.cardText}>someone Else ?</Text>
                    <Text style={styles.faqText2}>
                      if the patient is over 18 ,they need to create their own
                      account ,even if they are dependent on your health plan
                    </Text>
                  </View>
                </View>
              </TouchableOpacity>
            </View>
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
    marginBottom: sizes.TinyMargin,
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
    width: sizes.screenWidth * 0.1,
    height: sizes.screenHeight * 0.05,
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
  }
});
