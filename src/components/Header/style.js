import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerView: {
    padding: sizes.screenHeight * 0.02,
  },
  headerBg: {
    backgroundColor: colors.secondary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
  },
  darkTitle: {
    color: colors.primary,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
  },
  skipView: {
    left: sizes.screenHeight * 0.2,
  },
  skipIcon: {left: sizes.baseMargin},
  bold: {
    fontWeight: 'bold',
  },
  left: {
    right: sizes.screenWidth * 0.05,
  },
});
