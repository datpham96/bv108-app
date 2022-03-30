import {StyleSheet} from 'react-native';
import fonts from './fonts';
import sizes from './sizes';
import colors from './colors';

const commonStyles = StyleSheet.create({
  flex1: {
    flex: 1,
  },
  mainTitle: {
    // fontFamily: fonts.lexendDeca.FONT_BOLD,
    fontSize: sizes.SIZE_20,
  },
  center: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  flexRowCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  heightInputForm: {
    height: sizes.SIZE_38,
  },
  labelInput: {
    fontFamily: fonts.quicksand.FONT_MEDIUM,
    color: colors.COLOR_BLACK,
    fontSize: sizes.SIZE_14,
  },
  titleForm: {
    fontSize: sizes.SIZE_16,
    textAlign: 'center',
    fontFamily: fonts.quicksand.FONT_BOLD,
  },
});

export default commonStyles;
