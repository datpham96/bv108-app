import {StyleSheet} from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {commonStyles, sizes} from 'styles';

const styles = StyleSheet.create({
  container: {},
  wrapLogo: {
    width: wp('100%'),
    height: hp('30%'),
    ...commonStyles.center,
  },
  logo: {
    width: wp('25%'),
    height: wp('25%'),
    borderRadius: wp('30%') / 2,
  },
  wrapInputContent: {
    height: hp('60%'),
    paddingHorizontal: sizes.SIZE_30,
    // ...commonStyles.center,
    // backgroundColor: 'red',
  },
  //   wrapInputContent: {},
  wrapVersion: {
    height: hp('10%'),
    ...commonStyles.center,
  },
  containerInput: {
    marginTop: sizes.SIZE_15,
  },
  btnLogin: {
    marginTop: sizes.SIZE_40,
  },
});

export default styles;
