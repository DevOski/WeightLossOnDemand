import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  btnText: {
    fontSize: fontSize.h6,
    color: colors.white,
    fontWeight: '300',
  },
  code: {
    fontSize: fontSize.h5,
    color: colors.white,
    fontWeight: '400',
  },
  padding: {
    padding: sizes.baseMargin,
  },
  shareText: {
    fontSize: fontSize.h5,
    fontWeight: '400',
    color: colors.primary,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.18,
  },
  iconText: {
    textAlign: 'center',
    fontSize: fontSize.medium,
    color: colors.primary,
    top: 2,
  },
  gmailView: {justifyContent: 'space-between', paddingTop: 0},
  playIcon: {left: sizes.TinyMargin},
  mailRight: {right: sizes.TinyMargin},
  between: {justifyContent: 'space-between'},
  alignCenter: {alignItems: 'center'},
});
