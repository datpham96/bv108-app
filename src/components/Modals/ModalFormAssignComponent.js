/* eslint-disable indent */
import React, {useState} from 'react';
import {Text, Line} from 'base';
import {View, StyleSheet, Modal, TouchableOpacity} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import metrics from 'metrics';
import ButtonForm from 'src/base/ButtonForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputDateTime from '../Inputs/InputDateTimeComponent';
import {BoxSelect} from 'components';
import configTypes from 'types';

const ModalFormOnlyTimeComponent = ({
  visible = false,
  onPressCancel,
  onPress,
  formName,
  dateValue,
  timeValue,
  onChangeDate,
  onChangeTime,
  onChangeAssign,
}) => {
  const [activeAssign, setActiveAssign] = useState('');
  const onPressAssign = code => {
    if (code === activeAssign) {
      setActiveAssign('');
      onChangeAssign('');
      return;
    }
    setActiveAssign(code);
    onChangeAssign(code);
  };

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
                containerStyle={styles.inputDateTime}
                dateValue={dateValue}
                timeValue={timeValue}
                onChangeTime={onChangeTime}
                onChangeDate={onChangeDate}
              />
            </View>
            <View style={styles.wrapDateTime}>
              <Text style={styles.labelDateTime}>Chỉ định</Text>
              {configTypes.form.ChiDinh.options.map((item, key) => {
                return (
                  <View
                    style={[
                      styles.boxSelect,
                      configTypes.form.ChiDinh.options.length - 1 === key
                        ? {marginBottom: sizes.ZERO}
                        : {},
                    ]}
                    key={item.code}>
                    <BoxSelect
                      onPress={() => onPressAssign(item.code)}
                      containerStyle={[
                        activeAssign === item.code
                          ? {
                              backgroundColor: colors.COLOR_GREEN,
                              borderColor: colors.COLOR_GREEN,
                            }
                          : {
                              backgroundColor:
                                colors.COLOR_NATIVE_BASE_LIGHT_100,
                            },
                      ]}
                      labelStyle={[
                        activeAssign === item.code
                          ? {
                              color: colors.COLOR_WHITE,
                              fontFamily: fonts.quicksand.FONT_BOLD,
                            }
                          : {
                              color: colors.COLOR_BLACK,
                            },
                      ]}
                      label={item.name}
                    />
                  </View>
                );
              })}
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
    width: '92%',
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
  wrapDateTime: {
    marginBottom: sizes.SIZE_15,
  },
  inputDateTime: {
    width: '85%',
    alignSelf: 'center',
  },
  labelDateTime: {
    ...commonStyles.labelInput,
    marginBottom: sizes.SIZE_7,
  },
  boxSelect: {
    width: '85%',
    alignSelf: 'center',
    marginBottom: sizes.SIZE_10,
  },
  wrapBtn: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'center',
    // marginTop: sizes.SIZE_30,
    marginBottom: -sizes.SIZE_1,
  },
});

export default ModalFormOnlyTimeComponent;
