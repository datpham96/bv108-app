import {StyleSheet} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
const styles = StyleSheet.create({
  wrapHeader: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    width: wp('90%'),
  },
  nameHeader: {
    fontFamily: fonts.quicksand.FONT_BOLD,
    color: colors.COLOR_WHITE,
    fontSize: sizes.SIZE_15,
  },
  wrapHeaderRight: {
    ...commonStyles.flexRowCenter,
    alignSelf: 'flex-end',
  },
  labelDischargeBtnHeader: {
    color: colors.COLOR_BLACK,
  },
  dischargeBtnHeader: {
    backgroundColor: colors.COLOR_WHITE,
    paddingVertical: sizes.SIZE_5,
  },
  icon: {
    marginHorizontal: sizes.SIZE_15,
  },
  //header down
  wrapHeaderDown: {
    ...commonStyles.flexRowCenter,
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    height: sizes.SIZE_50,
  },
  wrapHeaderDownLeft: {
    width: wp('75%'),
    paddingHorizontal: sizes.SIZE_10,
  },
  wrapTimeHeaderDownLeft: {
    ...commonStyles.flexRowCenter,
    marginBottom: sizes.SIZE_3,
  },
  textTimeHeaderDownLeft: {
    marginLeft: sizes.SIZE_5,
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
    fontSize: sizes.SIZE_14,
  },
  wrapHeaderDownRight: {
    width: wp('25%'),
    borderLeftColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderLeftWidth: sizes.SIZE_1,
    height: '100%',
    ...commonStyles.center,
    ...commonStyles.flexRowCenter,
  },
  textSupportHeaderDownRight: {
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
    fontSize: sizes.SIZE_14,
  },
  //content
  container: {
    ...commonStyles.flex1,
  },
  contentContainerFlatlist: {
    paddingBottom: sizes.SIZE_15,
    paddingTop: sizes.SIZE_7,
  },
  //btn plus
  btnPlus: {
    position: 'absolute',
    bottom: sizes.SIZE_15,
    right: sizes.SIZE_15,
  },
});

export default styles;
