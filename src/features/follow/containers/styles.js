import metrics from 'metrics';
import {StyleSheet} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';

const styles = StyleSheet.create({
  container: {},
  contentContainerFlatlist: {
    paddingVertical: sizes.SIZE_10,
  },
  wrapTitle: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    paddingHorizontal: sizes.SIZE_15,
    paddingVertical: sizes.SIZE_12,
  },
  title: {
    fontFamily: fonts.quicksand.FONT_BOLD,
    fontSize: sizes.SIZE_15,
  },
  wrapIconFilter: {
    ...commonStyles.flexRowCenter,
  },
  textFilter: {
    fontSize: sizes.SIZE_10,
    marginBottom: -sizes.SIZE_5,
    marginLeft: -sizes.SIZE_3,
    color: colors.COLOR_GREEN,
  },
});

export default styles;
