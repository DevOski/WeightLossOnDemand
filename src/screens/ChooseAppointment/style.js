import {Dimensions, StyleSheet} from 'react-native';
import {height, width} from 'react-native-dimension';
import {colors, fontFamily, fontSize, sizes} from '../../services';

export const styles = StyleSheet.create({
  color: {
    backgroundColor: '#fafafa',
    height: sizes.screenHeight,
  },
  padding: {
    padding: sizes.baseMargin,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  view: {
    padding: sizes.TinyMargin,
    height: sizes.screenHeight * 0.045,
    width: sizes.screenWidth * 0.4,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selected: {
    backgroundColor: 'rgb(235, 39, 58)',
  },
  border: {
    flexDirection: 'row',
    borderWidth: 2,
    borderColor: colors.secondary,
    borderRadius: sizes.TinyMargin,
  },
  whiteText: {
    fontFamily: fontFamily.appTextLight,
    color: colors.white,
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  text: {
    fontFamily: fontFamily.appTextLight,
    color: colors.secondary,
    fontWeight: '700',
    fontSize: fontSize.medium,
  },
  calendar: {
    borderColor: colors.primary,
    borderWidth: 1,
    calendarBackground: '#fafafa',
    textSectionTitleColor: '#b6c1cd',
    textSectionTitleDisabledColor: '#d9e1e8',
    selectedDayBackgroundColor: colors.secondary,
    selectedDayTextColor: 'white',
    todayTextColor: colors.secondary,
    dayTextColor: '#2d4150',
    textDisabledColor: '#d9e1e8',
    arrowColor: colors.secondary,
    disabledArrowColor: colors.primary,
    monthTextColor: colors.primary,
    indicatorColor: colors.primary,
    textDayFontFamily: fontFamily.appTextLight,
    textMonthFontFamily: fontFamily.appTextLight,
    textDayHeaderFontFamily: fontFamily.appTextMedium,
    textDayFontWeight: '300',
    textMonthFontWeight: 'bold',
    textDayHeaderFontWeight: '300',
    textDayFontSize: 16,
    textMonthFontSize: 16,
    textDayHeaderFontSize: 16,
    textTransform: 'uppercase',
  },
  paddingTop: {
    paddingTop: sizes.screenHeight * 0.02,
  },
  text2: {
    color: colors.disabledBg2,
    fontFamily: fontFamily.appTextMedium,
    fontSize: fontSize.medium,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  card: {
    backgroundColor: colors.white,
    padding: sizes.screenHeight * 0.007,
    // height:,
    marginBottom: sizes.TinyMargin,
    alignSelf: 'center',
    width: sizes.screenWidth,
    borderBottomWidth: 1,
    borderBottomColor: colors.disabledBg,
    borderLeftWidth: 5,
    borderLeftColor: colors.secondary,
  },
  cardText: {
    color: colors.primary,
    fontSize: fontSize.h6,
    paddingLeft: sizes.baseMargin,
    fontFamily: fontFamily.appTextMedium,
  },
  symbol: {
    color: colors.secondary,
    fontSize: fontSize.h4,
    bottom: 1,
    paddingRight: sizes.screenWidth * 0.02,
  },
  height: {height: sizes.screenHeight * 0.29},
  
});
