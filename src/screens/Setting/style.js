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
    fontFamily: fontFamily.appTextLight,
  },
  userName: {
    color: colors.white,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontFamily: fontFamily.appTextMedium,
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
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  fingerprintText: {
    right: sizes.screenWidth * 0.07,
    fontSize: fontSize.medium,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
  },
  top: {
    top: sizes.TinyMargin,
  },
  head: {
    color: colors.primary,
    fontWeight: 'bold',
    fontFamily: fontFamily.appTextLight,
    fontSize: fontSize.medium,
  },
  version: {
    color: colors.secondary,
    fontWeight: '700',
    fontFamily: fontFamily.appTextLight,
  },
  redText: {
    color: colors.secondary,
    left: sizes.screenWidth * 0.008,
    fontFamily: fontFamily.appTextLight,
  },
  medicalIcon: {
    height: sizes.screenHeight * 0.03,
    width: sizes.screenHeight * 0.03,
  },
  justifyCenter: {justifyContent: 'space-between'},
  right: {
    alignSelf: 'flex-end',
    paddingRight: sizes.screenWidth * 0.08,
    paddingBottom: sizes.baseMargin,
  },
  bottom: {
    paddingBottom: sizes.screenWidth * 0.25,
  },
});
