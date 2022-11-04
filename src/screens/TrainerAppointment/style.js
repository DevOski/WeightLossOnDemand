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
    right: sizes.screenWidth * 0.01,
  },
  icon: {
    height: sizes.screenHeight * 0.062,
    width: sizes.screenWidth * 0.13,
  },
  heading: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.secondary,
    fontFamily: fontFamily.appTextHeading,
    left: sizes.screenWidth * 0.008,
  },
  welcomeText: {
    fontSize: fontSize.h6,
    color: colors.black,
    fontFamily: fontFamily.appTextRegular,
    fontWeight: '300',
    left: sizes.screenWidth * 0.008,
  },
  settingIcon: {
    height: sizes.screenHeight * 0.09,
    width: sizes.screenWidth * 0.1,
    right: sizes.screenWidth * 0.05,
  },
  transparentView: {
    width: sizes.screenWidth * 0.4,
  },
  dotActive: {
    margin: 3,
    color: colors.secondary,
  },
  dot: {
    margin: 3,
    color: colors.secondary,
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
    height: sizes.screenHeight * 0.72,
    width: sizes.screenWidth * 0.9,
    backgroundColor: colors.white,
    marginBottom: sizes.TinyMargin,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.04,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardView2: {
    width: sizes.screenWidth * 0.9,
    marginRight: sizes.screenWidth * 0.02,
    marginLeft: sizes.screenWidth * 0.04,
  },
  bg: {
    height: sizes.screenHeight * 0.72,
    width: sizes.screenWidth * 0.9,
  },
  playBtn: {
    top: sizes.screenHeight * 0.3,
    alignSelf: 'center',
    backgroundColor: 'rgba(255, 255, 247,0.3)',
    height: sizes.screenHeight * 0.11,
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
    top: sizes.screenHeight * 0.4,
    paddingBottom: 0,
  },
  learnMoreView: {
    top: sizes.screenHeight * 0.39,
    padding: sizes.baseMargin,
  },
  semiTextView: {
    padding: sizes.baseMargin,
    top: sizes.screenHeight * 0.42,
  },
  text: {
    color: colors.white,
    fontSize: fontSize.h5,
    fontWeight: '600',
    width: sizes.screenWidth * 0.7,
    fontFamily: fontFamily.appTextHeading,
  },
  text2: {
    color: colors.white,
    fontSize: fontSize.h5,
    fontWeight: '600',
    width: sizes.screenWidth * 0.6,
    fontFamily: fontFamily.appTextHeading,
  },
  semiText: {
    color: colors.secondary,
    fontWeight: 'bold',
    fontSize: fontSize.h6,
    fontFamily: fontFamily.appTextRegular,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
  },
  providerText: {
    paddingTop: sizes.screenHeight * 0.015,
    paddingBottom: sizes.screenHeight * 0.02,
    fontSize: fontSize.medium,
    color: colors.black,
    width: sizes.screenWidth * 0.6,
    fontFamily: fontFamily.appTextLight,
  },
  top: {
    paddingTop: sizes.TinyMargin,
  },
  addIcon: {
    color: colors.secondary,
    fontWeight: 'bold',
    paddingBottom: sizes.screenHeight * 0.02,
  },
  addText: {
    color: colors.black,
    fontSize: fontSize.h6,
    fontWeight: '400',
    paddingBottom: sizes.screenHeight * 0.02,
    paddingLeft: sizes.screenWidth * 0.015,
    fontFamily: fontFamily.appTextRegular,
  },
  btnTop: {
    top: sizes.screenHeight * 0.13,
  },
  btnTop2: {
    top: sizes.screenHeight * 0.23,
  },
  learnMoreBtn: {
    marginTop: sizes.screenHeight * 0.02,
    alignItems: 'center',
  },
  learnMoreText: {
    fontSize: fontSize.h6,
    fontWeight: 'bold',
    color: colors.secondary,
    fontFamily: fontFamily.appTextHeading,
  },
  letUsText: {
    color: colors.white,
    fontSize: fontSize.h6,
    top: sizes.TinyMargin,
    width: sizes.screenWidth * 0.6,
    fontFamily: fontFamily.appTextLight,
  },
  providerImg: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.15,
  },
  paddingLeft: {
    padding: sizes.TinyMargin,
    paddingTop: sizes.screenHeight * 0.02,
    paddingBottom: 0,
  },
  providerHead: {
    fontSize: fontSize.h6,
    color: colors.secondary,
    fontFamily: fontFamily.appTextHeading,
    left: sizes.screenWidth * 0.03,
  },
  providerProfession: {
    fontWeight: '400',
    color: colors.black,
    fontSize: fontSize.h6,
    left: sizes.screenWidth * 0.03,
    fontFamily: fontFamily.appTextRegular,
  },
  providerImg2: {
    height: sizes.screenHeight * 0.08,
    width: sizes.screenWidth * 0.17,
  },
  paddingBottom: {
    paddingBottom: sizes.screenHeight * 0.1,
  },

  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.01,
    marginBottom: sizes.TinyMargin,
    alignSelf: 'center',
    width: sizes.screenWidth * 0.9,
    borderWidth: 1,
    borderColor: colors.disabledBg,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 1,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
    paddingRight: sizes.TinyMargin,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.medium,
    paddingLeft: sizes.baseMargin,
    fontFamily: fontFamily.appTextRegular,
  },
  paddingBottom2: {
    paddingBottom: sizes.screenHeight * 0.12,
  },
  // seeBtn:{
  //   marginTop:sizes.screenHeight * 0.18
  // }
});
