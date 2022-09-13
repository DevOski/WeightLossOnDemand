import {Dimensions, StyleSheet} from 'react-native';

import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imag: {
    height: sizes.screenHeight,
    // marginRight:30,
    width:sizes.screenWidth
  },
  imagsize: {
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.4,
  },
  iconalignment: {
    bottom: sizes.screenHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textlignment: {
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.1,
    paddingRight: sizes.screenWidth * 0.1,
  },
  textFontsize: {
    fontSize: fontSize.h5,
    textAlign: 'center',
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: sizes.screenWidth * 0.04,
    paddingRight: sizes.screenWidth * 0.04,
  },
  footerContainer: {
    top: sizes.screenHeight * 0.2,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.1,
    borderTopColor: colors.black,
    borderTopWidth: sizes.screenWidth * 0.001,
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  signstyle: {
    fontSize: fontSize.h4,
    color: colors.blue,
  },
  pagination: {
    flexDirection: 'row',
    alignItems: 'center',

    justifyContent: 'center',
    position: 'relative',
    bottom: sizes.screenHeight * 0.05,
  },
  dot: {
    height: sizes.screenHeight * 0.02,
    width: sizes.screenWidth * 0.03,
    backgroundColor: colors.gray,
    borderRadius: sizes.screenWidth * 0.05,
    margin: 3,
  },
  imagsizepro1: {
    width: sizes.screenWidth * 0.10,
    height: sizes.screenHeight * 0.10,
    borderRadius:100
  },
  imagsizepro2: {
    width: sizes.screenWidth * 0.15,
    height: sizes.screenHeight * 0.10,
    borderRadius:100
  },
  imagsizepro3: {
    width: sizes.screenWidth * 0.10,
    height: sizes.screenHeight * 0.10,
  },
  flexi: {
    marginTop:sizes.screenHeight*0.05,
    width: sizes.screenWidth,
   
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    justifyContent:"space-evenly"
  },
  imgefour:{
    width:sizes.screenWidth*0.6,
    height:sizes.screenHeight*0.3,
  },
  fo:{
    marginTop:sizes.screenHeight*0.05,
    justifyContent:"center",
    alignItems:"center"
  },
  textlignment2:{
    marginTop:sizes.screenHeight*0.08,
    justifyContent: 'center',
    alignItems: 'center',
    width: sizes.screenWidth,
    paddingLeft: sizes.screenWidth * 0.1,
    paddingRight: sizes.screenWidth * 0.1,
  },
  footerContainer2: {
    top: sizes.screenHeight * 0.15,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.1,
    borderTopColor: colors.black,
    borderTopWidth: sizes.screenWidth * 0.001,
    justifyContent: 'center',
    // backgroundColor:"red"
  },
  scrolwidth:{
    width: sizes.screenWidth,
    // marginRight:50
  },
  imagsizepro5:{
    width:sizes.screenWidth*0.6,
    height:sizes.screenHeight*0.4,
  },
  flexi2:{
    marginTop:sizes.screenHeight*0.09,
    justifyContent:'center',
    alignItems:"center"
  },
  footerContainer3: {
    top: sizes.screenHeight * 0.24,
    width: sizes.screenWidth,
    height: sizes.screenHeight * 0.1,
    borderTopColor: colors.black,
    borderTopWidth: sizes.screenWidth * 0.001,
    justifyContent: 'center',
    // backgroundColor:"red"
  },
});
