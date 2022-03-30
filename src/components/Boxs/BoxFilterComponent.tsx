import {Text} from 'base';
import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {colors, commonStyles, sizes} from 'styles';

export type Props = {
  containerStyle?: any;
  label?: any;
  labelStyle?: any;
  onPress?: any;
};

const BoxSearchComponent: React.FC<Props> = ({
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
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_200,
    width: '100%',
    ...commonStyles.center,
    paddingVertical: sizes.SIZE_10,
    paddingHorizontal: sizes.SIZE_15,
  },
  label: {},
});

export default BoxSearchComponent;
