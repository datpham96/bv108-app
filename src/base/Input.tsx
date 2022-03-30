import React from 'react';
import {View, StyleSheet, TextInput, Image} from 'react-native';
import {colors, sizes} from 'styles';
import metrics from 'metrics';
import {Box, Input} from 'native-base';

export type Props = {
  customerInput?: any;
  value?: any;
  onChangeValue?: any;
  containerInput?: any;
  props?: any;
  placeholder?: any;
  form?: boolean;
};

const InputBase: React.FC<Props> = ({
  customerInput,
  value,
  onChangeValue,
  containerInput,
  placeholder,
  form = false,
  props,
}) => {
  return (
    <View style={[styles.container, containerInput]}>
      <Input
        {...props}
        value={value}
        onChangeText={onChangeValue}
        selectionColor={colors.COLOR_NATIVE_BASE_SUCCESS_700}
        style={customerInput}
        fontSize={sizes.SIZE_13}
        placeholder={placeholder}
        height={form ? sizes.SIZE_38 + 'px' : sizes.SIZE_42 + 'px'}
        autoCapitalize="none"
        autoComplete="off"
        backgroundColor={colors.COLOR_NATIVE_BASE_LIGHT_100}
        autoCorrect={false}
        px={sizes.SIZE_20 + 'px'}
        rounded={sizes.SIZE_20 + 'px'}
        w="100%"
        borderColor={colors.COLOR_NATIVE_BASE_LIGHT_300}
        _focus={{
          borderColor: colors.COLOR_NATIVE_BASE_SUCCESS_700,
          color: colors.COLOR_BLACK,
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
});

export default InputBase;
