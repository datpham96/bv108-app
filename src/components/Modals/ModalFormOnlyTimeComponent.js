import React from 'react';
import {Text, Line} from 'base';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import metrics from 'metrics';
import ButtonForm from 'src/base/ButtonForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputDateTime from '../Inputs/InputDateTimeComponent';

const ModalFormOnlyTimeComponent = ({
  visible = false,
  onPressCancel,
  onPress,
  formName,
  dateValue,
  timeValue,
  onChangeDate,
  onChangeTime,
}) => {
  return (
    <Modal
      onRequestClose={onPressCancel}
      animationType="none"
      transparent={true}
      visible={visible}>
      <View style={styles.backgroundModal} />
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <TouchableOpacity
            activeOpacity={0.8}
            style={styles.wrapClose}
            onPress={onPressCancel}>
            <MaterialCommunityIcons
              name="close"
              size={sizes.SIZE_22}
              color={colors.COLOR_RED}
            />
          </TouchableOpacity>
          <Text style={[commonStyles.mainTitle, styles.mainTitle]}>
            {formName}
          </Text>
          <Line customStyle={styles.line} />
          <View style={styles.containerForm}>
            <View style={styles.wrapDateTime}>
              <Text style={styles.labelDateTime}>Thời gian</Text>
              <InputDateTime
                dateValue={dateValue}
                timeValue={timeValue}
                onChangeTime={onChangeTime}
                onChangeDate={onChangeDate}
              />
            </View>
          </View>
          <View style={styles.wrapBtn}>
            <ButtonForm onPress={onPress} label="Lưu" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backgroundModal: {
    width: metrics.screenWidth,
    height: metrics.screenHeight,
    backgroundColor: colors.COLOR_BLACK,
    position: 'absolute',
    opacity: 0.5,
    zIndex: 0,
  },
  container: {
    ...commonStyles.flex1,
    ...commonStyles.center,
  },
  contentContainer: {
    backgroundColor: colors.COLOR_WHITE,
    width: metrics.screenWidth - sizes.SIZE_20,
    paddingTop: sizes.SIZE_10,
  },
  mainTitle: {
    ...commonStyles.titleForm,
    marginBottom: sizes.SIZE_10,
  },
  line: {
    width: '90%',
    alignSelf: 'center',
  },
  wrapClose: {
    alignSelf: 'flex-end',
    right: sizes.SIZE_10,
  },
  containerForm: {
    paddingVertical: sizes.SIZE_20,
    paddingHorizontal: sizes.SIZE_15,
  },
  wrapDateTime: {},
  labelDateTime: {
    ...commonStyles.labelInput,
    marginBottom: sizes.SIZE_10,
  },
  wrapBtn: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'center',
    marginTop: sizes.SIZE_30,
  },
});

export default ModalFormOnlyTimeComponent;
