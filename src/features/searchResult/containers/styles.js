import {StyleSheet, Platform} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  wrapInputSearch: {
    borderRadius: sizes.SIZE_20,
    backgroundColor: colors.COLOR_WHITE,
    width: wp('85%'),
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    paddingRight: sizes.SIZE_10,
  },
  input: {
    paddingLeft: sizes.SIZE_20,
    paddingRight: sizes.SIZE_10,
    ...commonStyles.flex1,
    height: sizes.SIZE_36,
    ...Platform.select({
      android: {
        height: sizes.SIZE_40,
      },
    }),
  },
  container: {
    ...commonStyles.flex1,
  },
  infoResult: {
    paddingVertical: sizes.SIZE_10,
    paddingHorizontal: sizes.SIZE_15,
  },
  textInfoResult: {
    fontFamily: fonts.quicksand.FONT_BOLD,
    fontSize: sizes.SIZE_15,
  },
  //btn add
  wrapBtnAdd: {
    ...commonStyles.center,
    paddingVertical: sizes.SIZE_8,
  },
  btnAdd: {
    alignSelf: 'center',
    borderRadius: sizes.SIZE_20,
    paddingHorizontal: sizes.SIZE_25,
    backgroundColor: colors.COLOR_RED,
  },
  labelBtnAdd: {
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
  },
  contentContainerFlatlist: {
    paddingVertical: sizes.SIZE_10,
  },
});

export default styles;
