import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  userView: {
    backgroundColor: colors.secondary,
    paddingBottom: sizes.screenHeight * 0.02,
  },
  signOutBtn: {
    alignSelf: 'flex-end',
    right: sizes.baseMargin,
  },
  signOutText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight: '300',
  },
  userName: {
    color: colors.white,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontWeight: '600',
  },
  left: {
    paddingLeft: sizes.baseMargin,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnText: {
    left: sizes.screenWidth * 0.05,
    fontSize: fontSize.h6,
    color: colors.black,
    // fontWeight:'400'
  },
  top: {
    top: sizes.TinyMargin,
  },
  head:{
    color:colors.primary,
    fontWeight:'bold'
  },
  redText:{
    color:colors.secondary
  }
});
