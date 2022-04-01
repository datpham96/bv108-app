import {StyleSheet} from 'react-native';
import {colors, fonts, sizes, commonStyles} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: sizes.SIZE_15,
    paddingTop: sizes.SIZE_20,
  },
  containerInput: {
    marginBottom: sizes.SIZE_15,
  },
  labelInput: {
    ...commonStyles.labelInput,
    marginBottom: sizes.SIZE_7,
  },
  wrapInput: {
    width: '85%',
    alignSelf: 'center',
  },
  btn: {
    width: wp('40%'),
    alignSelf: 'center',
    marginTop: sizes.SIZE_30,
  },
});

export default styles;
