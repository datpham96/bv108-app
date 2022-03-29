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

const ButtonInfo: React.FC<Props> = ({
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
    width: '100%',
    backgroundColor: colors.COLOR_GREEN,
    alignSelf: 'baseline',
    height: sizes.SIZE_44,
    ...commonStyles.center,
    borderRadius: sizes.SIZE_22,
    borderColor: colors.COLOR_WHITE,
  },
  text: {
    fontWeight: 'bold',
    color: colors.COLOR_WHITE,
  },
});

export default ButtonInfo;
