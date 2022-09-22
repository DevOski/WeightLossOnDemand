import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerView: {
    padding: sizes.screenHeight * 0.02,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    bottom: 0,
    zIndex: 0,
  },
  headerBg: {
    backgroundColor: colors.secondary,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    bottom: 0,
    zIndex: 0,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: colors.white,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
  },
  darkTitle: {
    color: colors.primary,
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextLight,
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
  card: {
    // zIndex: 1,
  },
});
