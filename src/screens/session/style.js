import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
 container:{
  flex:1,
  justifyContent:'center',
  alignItems:'center',
 },
 but: {
  backgroundColor: colors.secondary,
  height: sizes.screenHeight * 0.06,
  width: sizes.screenWidth * 0.94,
  justifyContent: 'center',
  alignItems: 'center',
  // position: 'absolute',
},
});
