import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  padding: {
    padding: sizes.TinyMargin,
    paddingBottom: sizes.baseMargin,
    paddingLeft: sizes.screenWidth * 0.05,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {
    height: sizes.screenHeight * 0.07,
    width: sizes.screenWidth * 0.13,
  },
  heading: {
    fontSize: fontSize.h5,
    fontWeight: 'bold',
    color: colors.black,
  },
  welcomeText: {
    fontSize: fontSize.h6,
    color: colors.black,
  },
  settingIcon: {
    height: sizes.screenHeight * 0.09,
    width: sizes.screenWidth * 0.1,
  },
  transparentView: {
    width: sizes.screenWidth * 0.4,
  },
  dotActive: {
    margin: 3,
    color: colors.dot,
  },
  dot: {
    margin: 3,
    color: colors.dot,
    opacity: 0.6,
  },
  wrapDot: {
    flexDirection: 'row',
    alignSelf: 'center',
  },
  wrap: {
    width: sizes.screenWidth * 0.96,
  },
  cardView: {
    height: sizes.screenHeight * 0.75,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.05,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  bg: {
    height: sizes.screenHeight * 0.75,
    width: sizes.screenWidth * 0.9,
  },
  playBtn: {
    top: sizes.screenHeight * 0.3,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 247,0.3)',
    height: sizes.screenHeight * 0.1,
    width: sizes.screenWidth * 0.2,
    borderRadius: sizes.screenWidth * 0.8,
    justifyContent: 'center',
  },
  playIcon: {
    height: sizes.screenHeight * 0.05,
    width: sizes.screenWidth * 0.1,
    alignSelf: 'center',
  },
  textView: {
    padding: sizes.baseMargin,
    top: sizes.screenHeight * 0.46,
  },
  proudView: {
    padding: sizes.baseMargin,
    top: sizes.screenHeight * 0.43,
    paddingBottom: 0,
  },
  learnMoreView:{
    top: sizes.screenHeight * 0.42,
    padding: sizes.baseMargin,

  },
  semiTextView: {
    padding: sizes.baseMargin,
    top: sizes.screenHeight * 0.44,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.h5,
    fontWeight: '500',
  },
  semiText: {
    color: colors.white,
    fontWeight: '500',
    fontSize: fontSize.h6,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    color: colors.dot,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  providerText: {
    paddingTop: sizes.screenHeight * 0.015,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.h6,
    color: colors.black,
    fontWeight: '300',
  },
  top: {
    paddingTop: sizes.TinyMargin,
  },
  addIcon: {
    color: colors.dot,
    fontWeight: 'bold',
    paddingBottom: sizes.screenHeight * 0.02,
  },
  addText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '400',
    paddingBottom: sizes.screenHeight * 0.02,
  },
  btnTop: {
    top: sizes.screenHeight * 0.15,
  },
  btnTop2: {
    top: sizes.screenHeight * 0.25,
  },
  learnMoreBtn: {
    marginTop: sizes.screenHeight * 0.03,
    alignItems: 'center',
  },
  learnMoreText: {
    fontSize: fontSize.h6,
    fontWeight: '500',
    color: colors.btnColor,
    
  },
  letUsText: {
    color: colors.white,
    fontSize: fontSize.h6,
    fontWeight: '300',
    top: sizes.TinyMargin,
  },
});
