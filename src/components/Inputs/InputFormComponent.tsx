import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import {colors, commonStyles, sizes} from 'styles';

export type Props = {
  customerInput?: any;
  value?: any;
  onChangeValue?: any;
  containerInput?: any;
  props?: any;
  placeholder?: any;
};

const InputFormComponent: React.FC<Props> = ({
  customerInput,
  value,
  onChangeValue,
  containerInput,
  props,
  placeholder,
}) => {
  const [isFocus, setIsFocus] = useState(false);
  return (
    <View
      style={[
        styles.container,
        {
          borderColor: isFocus
            ? colors.COLOR_GREEN
            : colors.COLOR_NATIVE_BASE_LIGHT_300,
        },
        containerInput,
      ]}>
      <TextInput
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...commonStyles.heightInputForm,

    borderRadius: sizes.SIZE_30,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderWidth: 1,
  },
  input: {
    borderRadius: sizes.SIZE_20,
    flex: sizes.SIZE_1,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    paddingHorizontal: sizes.SIZE_20,
    color: colors.COLOR_BLACK,
    ...commonStyles.heightInputForm,
    fontSize: sizes.DEFAULT,
  },
});

export default InputFormComponent;
