import {Text} from 'base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {colors, commonStyles, sizes} from 'styles';

export type Props = {
  containerStyle?: any;
  label?: any;
  labelStyle?: any;
  onPress?: any;
};

const BoxSelectComponent: React.FC<Props> = ({
  containerStyle,
  label,
  labelStyle,
  onPress,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, containerStyle]}
      activeOpacity={0.8}>
      <Text style={[styles.label, labelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    borderRadius: sizes.SIZE_20,
    ...commonStyles.heightInputForm,
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    width: '100%',
    ...commonStyles.center,
    paddingVertical: sizes.SIZE_10,
    paddingHorizontal: sizes.SIZE_15,
  },
  label: {},
});

export default BoxSelectComponent;
