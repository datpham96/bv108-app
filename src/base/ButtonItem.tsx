import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Text from './Text';
import {colors, commonStyles, sizes} from '../config/styles';

export type Props = {
  onPress?: any;
  label?: any;
  customStyle?: any;
  customLabelStyle?: any;
};

const ButtonItem: React.FC<Props> = ({
  onPress,
  label,
  customStyle,
  customLabelStyle,
}) => {
  return (
    <TouchableOpacity
      style={[styles.container, customStyle]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text style={[styles.text, customLabelStyle]}>{label}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_GREEN,
    ...commonStyles.center,
    borderColor: colors.COLOR_WHITE,
    alignSelf: 'baseline',
    paddingVertical: sizes.SIZE_7,
    paddingHorizontal: sizes.SIZE_12,
    borderRadius: sizes.SIZE_3,
  },
  text: {
    color: colors.COLOR_WHITE,
  },
});

export default ButtonItem;
