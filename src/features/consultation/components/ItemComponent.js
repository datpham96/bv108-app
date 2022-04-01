import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Line, Text} from 'base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {sizes, fonts, commonStyles, colors} from 'styles';
const ItemComponent = ({onPress, item, index, totalLength}) => {
  return (
    <View
      style={[styles.container, index === 0 ? {marginTop: sizes.ZERO} : {}]}>
      <TouchableOpacity
        style={styles.containerContent}
        activeOpacity={0.8}
        onPress={onPress}>
        <View style={styles.wrapName}>
          <Text style={styles.name}>
            {item?.patientInfo?.patientInfo?.name}
          </Text>
          <Text style={styles.time}>4 giờ 30 phút</Text>
        </View>
        <View style={styles.wrapDep}>
          <Text style={styles.nameDep}>Mã bệnh nhân: PID2343</Text>
        </View>
        <Text style={styles.formName}>BS bệnh viện: Chỉ định bệnh nhân</Text>
      </TouchableOpacity>
      {index < totalLength - 1 && <Line customStyle={styles.line} />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: sizes.SIZE_10,
  },
  containerContent: {
    paddingHorizontal: sizes.SIZE_15,
  },
  wrapName: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
  },
  name: {
    fontSize: sizes.SIZE_14,
    fontFamily: fonts.quicksand.FONT_BOLD,
    ...commonStyles.flex1,
    paddingRight: sizes.SIZE_5,
  },
  time: {
    fontSize: sizes.SIZE_12,
    fontFamily: fonts.quicksand.FONT_MEDIUM,
  },
  wrapDep: {
    ...commonStyles.flexRowCenter,
    marginTop: sizes.SIZE_3,
  },
  nameDep: {
    fontFamily: fonts.quicksand.FONT_MEDIUM,
    marginTop: sizes.SIZE_3,
  },
  formName: {
    marginTop: sizes.SIZE_3,
  },
  line: {
    marginTop: sizes.SIZE_10,
  },
});

export default ItemComponent;
