import React from 'react';
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

const InputInfoForm: React.FC<Props> = ({
  customerInput,
  value,
  onChangeValue,
  containerInput,
  props,
  placeholder,
}) => {
  return (
    <View style={[styles.container, containerInput]}>
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
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    ...commonStyles.heightInputForm,

    borderRadius: sizes.SIZE_30,
    borderColor: colors.COLOR_GREY,
    borderWidth: sizes.SIZE_1,
  },
  input: {
    borderRadius: sizes.SIZE_20,
    flex: sizes.SIZE_1,
    backgroundColor: colors.COLOR_WHITE_GREY,
    paddingHorizontal: sizes.SIZE_20,
    color: colors.COLOR_BLACK,
    ...commonStyles.heightInputForm,
    fontSize: sizes.DEFAULT,
  },
});

export default InputInfoForm;
