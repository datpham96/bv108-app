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
};

const InputInfo: React.FC<Props> = ({
  customerInput,
  value,
  onChangeValue,
  containerInput,
  props,
  placeholder,
}) => {
  return (
    <View style={[styles.container, containerInput]}>
      {/* <View style={styles.wrapInput}>
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={colors.COLOR_PLACEHOLDER}
          value={value}
          onChangeText={text => onChangeValue(text)}
          style={[styles.input, customerInput]}
          underlineColorAndroid="transparent"
          autoCorrect={false}
          autoComplete="off"
          textContentType="none"
          autoCapitalize="none"
          autoCompleteType={'off'}
          {...props}
        />
      </View> */}
      <Input
        selectionColor={colors.COLOR_NATIVE_BASE_SUCCESS_700}
        style={customerInput}
        fontSize={sizes.SIZE_13}
        placeholder={placeholder}
        height={sizes.SIZE_42 + 'px'}
        autoCapitalize="none"
        autoComplete="off"
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
    // height: metrics.heightInput,
    // backgroundColor: colors.COLOR_WHITE,
    // borderRadius: sizes.SIZE_30,
    // borderColor: colors.COLOR_GREEN,
    // borderWidth: sizes.SIZE_1,
  },
  wrapInput: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: sizes.SIZE_20,
  },
  input: {
    borderRadius: sizes.SIZE_20,
    flex: sizes.SIZE_1,
    backgroundColor: colors.COLOR_WHITE,
    paddingHorizontal: sizes.SIZE_5,
    color: colors.COLOR_BLACK,
    height: sizes.SIZE_42,
    fontSize: sizes.DEFAULT,
  },
});

export default InputInfo;
