/* eslint-disable indent */
import {Text} from 'base';
import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';

export type Props = {
  containerStyle?: any;
  label?: any;
  labelStyle?: any;
  onPress?: any;
  isActive?: boolean;
};

const BoxFilterComponent: React.FC<Props> = ({
  containerStyle,
  label,
  labelStyle,
  onPress,
  isActive = false,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        isActive
          ? {
              backgroundColor: colors.COLOR_WHITE,
              borderColor: colors.COLOR_GREEN,
              borderWidth: sizes.SIZE_1,
            }
          : {},
        containerStyle,
      ]}
      activeOpacity={0.8}>
      {isActive && <View style={styles.triangleMarker} />}
      <Text
        style={[
          styles.label,
          isActive
            ? {
                color: colors.COLOR_GREEN,
                fontFamily: fonts.quicksand.FONT_BOLD,
              }
            : {},
          labelStyle,
        ]}>
        {label}
      </Text>
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
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_200,
  },
  label: {},
  triangleMarker: {
    position: 'absolute',
    top: sizes.ZERO,
    left: sizes.ZERO,
    width: sizes.ZERO,
    height: sizes.ZERO,
    backgroundColor: 'transparent',
    borderStyle: 'solid',
    borderTopWidth: sizes.ZERO,
    borderRightWidth: sizes.ZERO,
    borderBottomWidth: sizes.SIZE_15,
    borderLeftWidth: sizes.SIZE_25,
    borderTopColor: 'transparent',
    borderRightColor: 'transparent',
    borderBottomColor: 'transparent',
    borderLeftColor: colors.COLOR_GREEN,
    zIndex: sizes.ZERO,
  },
});

export default BoxFilterComponent;
