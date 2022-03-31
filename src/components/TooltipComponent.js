import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Line, Text} from 'base';
import {sizes, colors, commonStyles} from 'styles';

const EDIT = 'EDIT';
const DELETE = 'DELETE';
const TooltipComponent = ({onPress}) => {
  return (
    <View style={styles.container}>
      <View style={styles.triangleMarker} />
      <View style={styles.wrapAction}>
        <TouchableOpacity
          style={styles.touchItem}
          activeOpacity={0.8}
          onPress={() => {
            onPress(EDIT);
            console.log(23423);
          }}>
          <Text style={styles.labelAction}>Sửa</Text>
        </TouchableOpacity>
        <View style={styles.wrapLine}>
          <Line />
        </View>
        <TouchableOpacity
          style={styles.touchItem}
          activeOpacity={0.8}
          onPress={() => {
            console.log(1111);
            onPress(DELETE);
          }}>
          <Text style={styles.labelAction}>Xoá</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_WHITE,
    paddingVertical: sizes.SIZE_5,
    // paddingHorizontal: sizes.SIZE_10,
    borderRadius: sizes.SIZE_3,
    position: 'absolute',
  },
  wrapLine: {
    marginVertical: sizes.SIZE_5,
    marginHorizontal: sizes.SIZE_3,
  },
  wrapAction: {},
  touchItem: {
    width: sizes.SIZE_45,
    height: sizes.SIZE_20,
    ...commonStyles.center,
  },
  labelAction: {},
  triangleMarker: {
    width: sizes.ZERO,
    height: sizes.ZERO,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: sizes.ZERO,
    borderRightWidth: sizes.SIZE_8,
    borderBottomWidth: sizes.SIZE_8,
    borderLeftWidth: sizes.SIZE_8,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: colors.COLOR_WHITE,
    borderLeftColor: 'transparent',
    position: 'absolute',
    top: -sizes.SIZE_8,
    left: sizes.SIZE_3,
  },
});

export default TooltipComponent;
