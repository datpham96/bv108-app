import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {colors, commonStyles, fonts, sizes} from 'styles';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.SIZE_15,
    paddingVertical: sizes.SIZE_20,
  },
  sectionInfo: {
    flexDirection: 'row',
    height: hp('25%'),
    alignItems: 'center',
  },
  avatar: {
    width: wp('20%'),
    height: wp('20%'),
    resizeMode: 'contain',
    borderRadius: wp('20%') / sizes.SIZE_2,
  },
  wrapTextInfo: {
    marginLeft: sizes.SIZE_10,
  },
  name: {
    fontSize: sizes.SIZE_15,
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
  },
  dep: {
    lineHeight: sizes.SIZE_20,
  },
  phone: {
    lineHeight: sizes.SIZE_20,
  },
  email: {
    lineHeight: sizes.SIZE_20,
  },
  btnEdit: {
    marginTop: sizes.SIZE_5,
  },
  labelBtnEdit: {
    color: colors.COLOR_NATIVE_BASE_MUTED_500,
  },
  wrapActionBtn: {
    marginTop: sizes.SIZE_30,
  },
  btnAction: {
    marginBottom: sizes.SIZE_15,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderColor: colors.COLOR_NATIVE_BASE_MUTED_400,
    borderWidth: sizes.SIZE_1,
  },
  labelBtnAction: {
    color: colors.COLOR_BLACK,
  },
});

export default styles;
