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
  skipBtn: {
    alignSelf: 'flex-end',
  },
  skipText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.primary,
    fontSize: fontSize.h6,
  },

  rateText: {
    fontFamily: fontFamily.appTextMedium,
    color: colors.primary,
    paddingBottom: sizes.screenHeight * 0.03,
    alignSelf: 'center',

  },
  docImg: {
    height: sizes.screenHeight * 0.2,
    width: sizes.screenWidth * 0.4,
    alignSelf: 'center',
    borderRadius:sizes.screenWidth*0.5
  },
  providerTitle: {
    paddingTop: sizes.screenHeight * 0.01,
    fontSize:fontSize.h5,
    alignSelf: 'center',
    color:colors.primary,
    fontFamily:fontFamily.appTextMedium
  },
});
