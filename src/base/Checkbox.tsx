import React from 'react';
import {View, StyleSheet} from 'react-native';
import {Text} from 'base';
import {TouchableOpacity} from 'react-native-gesture-handler';
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
  disabled,
  onPress,
  containerStyle,
  isActive,
  label,
}) => {
  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.6}
      onPress={onPress}
      style={[styles.container, containerStyle]}>
      <View
        style={[
          styles.ousideCheckbox,
          //   {backgroundColor: isActive ? colors.COLOR_GREEN : colors.COLOR_WHITE},
        ]}>
        {isActive && (
          <MaterialCommunityIcons
            name="check"
            size={sizes.SIZE_16}
            color={colors.COLOR_GREEN}
          />
        )}
      </View>
      <Text style={styles.label}>{label}</Text>
    </TouchableOpacity>
  );
};

const WIDTH_CHECK_BOX = sizes.SIZE_18;
const styles = StyleSheet.create({
  container: {
    ...commonStyles.flexRowCenter,
  },
  ousideCheckbox: {
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_GREY,
    width: WIDTH_CHECK_BOX,
    height: WIDTH_CHECK_BOX,
    borderRadius: sizes.SIZE_1,
    ...commonStyles.center,
  },
  label: {
    marginLeft: sizes.SIZE_5,
  },
});

export default Checkbox;
