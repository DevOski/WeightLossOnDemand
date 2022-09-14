import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  headerView: {
    backgroundColor: colors.secondary,
    padding: sizes.screenHeight * 0.02,
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
});
