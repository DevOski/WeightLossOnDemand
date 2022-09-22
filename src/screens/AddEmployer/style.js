import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  padding: {
    padding: sizes.baseMargin,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  addPaymentText: {
    fontSize: fontSize.h4,
    fontWeight: 'bold',
    color: colors.primary,
    fontFamily: fontFamily.appTextHeading,
  },
  text: {
    color: colors.primary,
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextLight,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.015,
  },
  input: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.h6,
    width: sizes.screenWidth * 0.9,
    fontFamily: fontFamily.appTextRegular,
    paddingLeft: sizes.screenWidth * 0.05,
    height:40
  },
  row: {
    flexDirection: 'row',
    paddingTop:sizes.TinyMargin
  },
  searchIcon: {position: 'absolute', left: 0, top: sizes.screenHeight * 0.02, bottom: 0, zIndex: 9},
});
