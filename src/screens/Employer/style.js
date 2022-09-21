import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  paddingLeft: {
    paddingLeft: sizes.baseMargin,
  },
  paddingBottom: {
    paddingBottom: sizes.baseMargin,
  },
  addPaymentText: {
    fontSize: fontSize.h3,
    fontWeight: 'bold',
    color: colors.primary,
  },
  contentView: {
    alignItems: 'center',
    marginTop: sizes.screenHeight * 0.15,
    padding: sizes.baseMargin,
  },
  text: {
    color: colors.disabledText,
    fontSize: fontSize.h6,
    fontWeight: '500',
    top: sizes.screenHeight * 0.03,
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
    paddingTop: sizes.screenHeight * 0.33,
    paddingBottom:sizes.screenHeight * 0.05
    
  },
});
