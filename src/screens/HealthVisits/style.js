import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  contentView: {
    alignItems: 'center',
    paddingTop: sizes.screenHeight * 0.45,
  },
  text: {
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextRegular,
    color: colors.disabledBg2,
  },
});
