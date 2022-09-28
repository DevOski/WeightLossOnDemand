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
  },

  skipText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    fontSize: fontSize.medium,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.5,
    textAlign: 'center',
  },
  extremelyText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.25,
    textAlign: 'left',
    alignSelf: 'flex-start',
    right: sizes.screenWidth * 0.07,
  },
  extremelyText2: {
    color: colors.primary,
    fontSize: fontSize.medium,
    width: sizes.screenWidth * 0.25,
    textAlign: 'right',
    alignSelf: 'flex-end',
    left: sizes.screenWidth * 0.07,
  },
  top: {
    paddingTop: sizes.screenHeight * 0.2,
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.03,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  rate: {
    fontSize: fontSize.h5,
    fontFamily: fontFamily.appTextRegular,
    color: colors.primary,
    right: sizes.screenWidth * 0.01,
  },
  rating: {
    fontSize: fontSize.medium,
    fontFamily: fontFamily.appTextRegular,
    color: colors.primary,
    fontWeight: 'bold',
  },
  left: {
    left: sizes.screenWidth * 0.03,
    bottom: 2,
  },
  right: {
    right: sizes.screenWidth * 0.03,
    bottom: 2,
  },
  sliderWidth: {
    width: sizes.screenWidth * 0.8,
  },
  disabledView: {
    alignSelf: 'center',
    backgroundColor: colors.disabledBg,
    height: sizes.screenHeight * 0.06,
    width: sizes.screenWidth * 0.92,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: colors.white,
    fontSize: fontSize.h6,
  },
  center: {
    alignItems: 'center',
  },
  skip:{
    color:colors.secondary,
    fontWeight:'bold',
    fontFamily:fontFamily.appTextLight,
  }
});
