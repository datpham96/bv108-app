import {ButtonItem, Line, Text} from 'base';
import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';

const ItemComponent = ({
  item,
  onPressIntem,
  onPressView,
  index,
  totalLength,
}) => {
  return (
    <>
      <TouchableOpacity
        onPress={onPressIntem}
        style={styles.container}
        activeOpacity={0.8}>
        <View style={styles.wrapInfo}>
          <Text style={styles.time}>15/10.2022 09:09</Text>
          <Text style={styles.status}>Đang theo dõi</Text>
        </View>
        <ButtonItem
          onPress={onPressView}
          customLabelStyle={styles.labelBtn}
          customStyle={styles.btn}
          label="Xem bệnh án"
        />
      </TouchableOpacity>
      {index < totalLength - 1 && <Line customStyle={styles.line} />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowCenter,
    paddingHorizontal: sizes.SIZE_15,
    justifyContent: 'space-between',
    paddingVertical: sizes.SIZE_10,
    borderLeftWidth: sizes.SIZE_1,
    borderLeftColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderRightWidth: sizes.SIZE_1,
    borderRightColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
  },
  wrapInfo: {
    ...commonStyles.flex1,
    paddingRight: sizes.SIZE_5,
  },
  time: {
    fontFamily: fonts.quicksand.FONT_MEDIUM,
  },
  status: {
    fontFamily: fonts.quicksand.FONT_BOLD_ITALIC,
    marginTop: sizes.SIZE_3,
  },
  labelBtn: {
    fontSize: sizes.SIZE_10,
    fontFamily: fonts.quicksand.FONT_BOLD,
  },
  btn: {
    backgroundColor: colors.COLOR_ORANGE,
    alignSelf: 'center',
  },
  line: {
    marginHorizontal: sizes.SIZE_15,
  },
  contentContainerFlatlist: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
  },
});

export default ItemComponent;
