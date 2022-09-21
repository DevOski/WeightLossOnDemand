import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  signOutBtn: {
    alignSelf: 'flex-end',
    right: sizes.baseMargin,
  },
  signOutText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight: '300',
  },
  userName: {
    color: colors.white,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontWeight: '600',
  },
  left: {
    paddingLeft: sizes.baseMargin,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    left: sizes.screenWidth * 0.06,
    fontSize: fontSize.h6,
    color: colors.black,
    // fontWeight:'400'
  },
  fingerprintText: {
    right: sizes.screenWidth * 0.04,
    fontSize: fontSize.h6,
    color: colors.black,
  },
  top: {
    top: sizes.TinyMargin,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
  },
  version:{
    color: colors.secondary,
    fontWeight: 'bold',
  },
  redText: {
    color: colors.secondary,
  },
  medicalIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },
  justifyCenter: {justifyContent: 'space-between'},
  right: {
    alignSelf: 'flex-end',
    paddingRight: sizes.screenWidth * 0.08,
    paddingBottom:sizes.baseMargin,
  },
  bottom:{
    paddingBottom:sizes.screenWidth * 0.1
  }
});
