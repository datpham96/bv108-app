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
    marginBottom: sizes.SIZE_10,
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
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
    color: colors.COLOR_BLACK,
    fontSize: sizes.SIZE_14,
  },
  titleForm: {
    fontSize: sizes.SIZE_16,
    textAlign: 'center',
    fontFamily: fonts.quicksand.FONT_BOLD,
  },
  titleInput: {
    fontSize: sizes.SIZE_14,
    fontFamily: fonts.quicksand.FONT_MEDIUM,
  },
});

export default commonStyles;
