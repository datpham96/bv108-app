import {StyleSheet} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  wrapheader: {
    width: wp('90%'),
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
  },
  wrapHeaderRight: {
    height: sizes.SIZE_50,
    ...commonStyles.flexRowCenter,
    justifyContent: 'center',
    width: sizes.SIZE_80,
  },
  textMerge: {
    color: colors.COLOR_WHITE,
    fontFamily: fonts.quicksand.FONT_BOLD,
    fontSize: sizes.SIZE_12,
    marginLeft: sizes.SIZE_2,
    marginBottom: sizes.SIZE_2,
  },
  container: {
    padding: sizes.SIZE_10,
    ...commonStyles.flex1,
  },
  wrapInfo: {
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    padding: sizes.SIZE_10,
  },
  labelInfo: {
    fontSize: sizes.SIZE_15,
    fontFamily: fonts.quicksand.FONT_BOLD,
  },
  lineInfo: {
    marginTop: sizes.SIZE_5,
  },
  wrapContentInfo: {
    paddingHorizontal: sizes.SIZE_15,
    marginTop: sizes.SIZE_10,
    paddingBottom: sizes.SIZE_15,
  },
  wrapTextInfo: {
    ...commonStyles.flexRowCenter,
  },
  lableTextInfo: {
    fontFamily: fonts.quicksand.FONT_BOLD,
  },
  valueTextInfo: {
    marginLeft: sizes.SIZE_5,
    lineHeight: sizes.SIZE_20,
  },
  //list
  headerList: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    borderTopWidth: sizes.SIZE_1,
    borderTopColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderRightWidth: sizes.SIZE_1,
    borderRightColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderLeftColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderLeftWidth: sizes.SIZE_1,
    paddingTop: sizes.SIZE_10,
    paddingHorizontal: sizes.SIZE_10,
    marginTop: sizes.SIZE_10,
  },
  labelList: {
    fontFamily: fonts.quicksand.FONT_BOLD,
    fontSize: sizes.SIZE_15,
  },
  lineList: {
    marginTop: sizes.SIZE_5,
  },
  contentContainerFlatlist: {
    // backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    // borderLeftWidth: sizes.SIZE_1,
    // borderLeftColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    // borderRightWidth: sizes.SIZE_1,
    // borderRightColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    // borderBottomColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    // borderBottomWidth: sizes.SIZE_1,
  },
  containerFlatlist: {
    ...commonStyles.flex1,
  },
});

export default styles;
