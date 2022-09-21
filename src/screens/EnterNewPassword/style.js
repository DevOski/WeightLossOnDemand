import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },

  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  addPaymentText: {
    fontSize: fontSize.h3,
    fontWeight: 'bold',
    color: colors.primary,
  },
  text: {
    fontSize: fontSize.large,
    color: colors.primary,
    fontWeight: '300',
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  field: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.extraLarge,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  buttonView: {
    alignSelf: 'center',
    backgroundColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.05,
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttnView: {
    marginTop: sizes.screenWidth * 0.06,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttnText: {
    color: colors.secondary,
    fontSize: fontSize.h6,
    fontWeight: '500',
  },
  buttonView1: {
    borderWidth: 1,
    borderColor: colors.secondary,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  filedcon: {
    marginBottom: sizes.screenHeight * 0.01,
  },
  fleix: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fontcheck: {
    marginLeft: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: '#000',
    // fontWeight: '400',
  },
});
