import React, {useState} from 'react';
import {Platform} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {colors, commonStyles, sizes} from 'styles';
import metrics from 'metrics';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

export type Props = {
  listData?: any;
  placeholder?: any;
  onDonePress?: any;
  selectedValue?: any;
};

const InputSelectComponent: React.FC<Props> = ({
  listData,
  placeholder,
  onDonePress,
  selectedValue = '',
}) => {
  const [value, setValue] = useState(selectedValue);
  return (
    <RNPickerSelect
      useNativeAndroidPickerStyle={false}
      placeholder={{
        label: placeholder,
        value: '',
      }}
      value={value}
      onValueChange={val => {
        setValue(val);
        if (Platform.OS === 'android') {
          onDonePress(val);
        }
      }}
      items={listData}
      doneText="Xác nhận"
      onDonePress={() => onDonePress(value)}
      fixAndroidTouchableBug={true}
      Icon={() => {
        return (
          <FontAwesome
            color={colors.COLOR_BLACK}
            size={sizes.SIZE_20}
            name="angle-down"
          />
        );
      }}
      style={{
        done: {
          fontSize: sizes.DEFAULT,
        },
        doneDepressed: {
          fontSize: sizes.DEFAULT,
        },
        inputIOS: {
          color: colors.COLOR_BLACK,
          backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
          height: metrics.heightInput,
          borderRadius: sizes.SIZE_30,
          paddingHorizontal: sizes.SIZE_20,
          borderWidth: sizes.SIZE_1,
          borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
          fontSize: sizes.DEFAULT,
          textAlign: 'center',
        },
        inputAndroid: {
          color: colors.COLOR_BLACK,
          backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
          height: metrics.heightInput - sizes.SIZE_2,
          borderRadius: sizes.SIZE_30,
          paddingHorizontal: sizes.SIZE_20,
          borderWidth: sizes.SIZE_1,
          borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
          fontSize: sizes.DEFAULT,
          textAlign: 'center',
        },
        placeholder: {
          color: colors.COLOR_PLACEHOLDER,
          fontSize: sizes.DEFAULT,
        },
        iconContainer: {
          alignItems: 'center',
          justifyContent: 'center',
          height: metrics.heightInput,
          marginRight: sizes.SIZE_15,
        },
      }}
    />
  );
};

export default InputSelectComponent;
