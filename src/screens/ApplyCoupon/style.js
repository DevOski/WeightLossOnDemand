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
    height: sizes.screenHeight,
  },
  couponHead: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.primary,
  },
  shareText: {
    paddingTop: sizes.screenHeight * 0.01,
    fontSize: fontSize.h6,
    fontWeight: '300',
    color: colors.primary,
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
  top: {
    top: sizes.screenHeight * 0.05,
  },
  field: {
    backgroundColor: colors.lightGray,
    fontSize: fontSize.extraLarge,
  },
});
