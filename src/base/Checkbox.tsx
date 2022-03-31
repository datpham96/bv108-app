import React from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'base';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, commonStyles, sizes} from 'styles';

export type Props = {
  disabled?: any;
  onPress?: any;
  containerStyle?: any;
  isActive?: any;
  label?: any;
};

const Checkbox: React.FC<Props> = ({
  onPress,
  containerStyle,
  isActive,
  label,
}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.ousideCheckbox,
          {
            borderColor: isActive
              ? colors.COLOR_GREEN
              : colors.COLOR_NATIVE_BASE_MUTED_400,
          },
        ]}>
        {isActive && (
          <MaterialCommunityIcons
            style={styles.icon}
            name="check"
            size={sizes.SIZE_14}
            color={colors.COLOR_GREEN}
          />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const WIDTH_CHECK_BOX = sizes.SIZE_14;
const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowCenter,
  },
  ousideCheckbox: {
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_MUTED_400,
    width: WIDTH_CHECK_BOX,
    height: WIDTH_CHECK_BOX,
    borderRadius: sizes.SIZE_1,
    ...commonStyles.center,
  },
  icon: {
    // marginBottom: sizes.SIZE_2,
  },
  label: {
    marginLeft: sizes.SIZE_5,
  },
});

export default Checkbox;
