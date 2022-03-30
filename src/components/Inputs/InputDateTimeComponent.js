import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text} from 'base';
import {colors, commonStyles, sizes} from 'styles';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import moment from 'moment';
import {useDarkMode} from 'react-native-dark-mode';

const TYPE_DATE = 'date';
const TYPE_TIME = 'time';

const InputDateTimeComponent = ({
  containerStyle,
  dateValue = moment().format('DD/MM/YYYY'),
  onChangeDate,
  timeValue = moment().format('HH:mm'),
  onChangeTime,
}) => {
  const isDarkMode = useDarkMode();
  const [isDatePickerVisible, setDatePickerVisibility] = React.useState(false);
  const [date, setDate] = React.useState(dateValue);
  const [time, setTime] = React.useState(timeValue);
  const [typeDateTime, setTypeDateTime] = React.useState(TYPE_DATE);

  const showDatePicker = type => {
    if (type === TYPE_DATE) {
      setTypeDateTime(TYPE_DATE);
    } else {
      setTypeDateTime(TYPE_TIME);
    }
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    if (typeDateTime === TYPE_DATE) {
      onChangeDate(moment(date).format('DD/MM/YYYY'));
      setDate(moment(date).format('DD/MM/YYYY'));
    } else {
      onChangeTime(moment(date).format('HH:mm'));
      setTime(moment(date).format('HH:mm'));
    }
    hideDatePicker();
  };
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity
        onPress={() => showDatePicker(TYPE_DATE)}
        activeOpacity={0.8}>
        <Text style={styles.labelDatetime}>{date}</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => showDatePicker(TYPE_TIME)}
        activeOpacity={0.8}>
        <Text style={styles.labelDatetime}>{time}</Text>
      </TouchableOpacity>
      <DateTimePickerModal
        locale="vi_vn"
        isVisible={isDatePickerVisible}
        mode={typeDateTime}
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
        display={'spinner'}
        isDarkModeEnabled={isDarkMode}
        cancelTextIOS="Huỷ"
        confirmTextIOS="Đồng ý"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.heightInputForm,
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    borderRadius: sizes.SIZE_22,
    paddingHorizontal: sizes.SIZE_20,
    justifyContent: 'space-around',
    ...commonStyles.flexRowCenter,
  },
  labelDatetime: {
    fontWeight: 'bold',
    color: '#333',
    textDecorationColor: '#333',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

export default InputDateTimeComponent;
