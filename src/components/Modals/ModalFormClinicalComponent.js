/* eslint-disable indent */
import React from 'react';
import {Text, Line, Input} from 'base';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import metrics from 'metrics';
import ButtonForm from 'src/base/ButtonForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputDateTime from '../Inputs/InputDateTimeComponent';
import {ScrollView} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ButtonTickBoolean = ({
  onPress,
  label,
  customBtn,
  customBtnLabel,
  active = false,
}) => {
  return (
    <TouchableOpacity
      style={[
        styles.wrapBtnBoolean,
        active
          ? {
              backgroundColor: colors.COLOR_GREEN,
              borderColor: colors.COLOR_GREEN,
            }
          : {},
        customBtn,
      ]}
      activeOpacity={0.8}
      onPress={onPress}>
      <Text
        style={[
          styles.labelBtnBoolean,
          active
            ? {
                color: colors.COLOR_WHITE,
                fontFamily: fonts.quicksand.FONT_BOLD,
              }
            : {},
          customBtnLabel,
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
};

const ModalFormDischargeComponent = ({
  visible = false,
  onPressCancel,
  onPress,
  formName,
  dateValue,
  timeValue,
  onChangeDate,
  onChangeTime,
  NIHSSValue,
  onChangeNIHSSValue,
  GlassgowValue,
  onChangeGlassgowValue,
  ASPECTSValue,
  onChangeASPECTSValue,
  LietNuaNguoiSValue = false,
  onChangeLietNuaNguoiValue,
  LietMatSValue = false,
  onChangeLietMatValue,
  ThatNgonValue = false,
  onChangeThatNgonValue,
}) => {
  return (
    <Modal
      onRequestClose={onPressCancel}
      animationType="none"
      transparent={true}
      visible={visible}>
      <View style={styles.backgroundModal} />
      <KeyboardAwareScrollView
        enableAutomaticScroll={Platform.OS === 'ios'}
        contentContainerStyle={styles.container}>
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
            <ScrollView style={styles.containerForm}>
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
                <Text style={styles.labelDateTime}>NIHSS</Text>
                <View style={styles.inputText}>
                  <Input
                    value={NIHSSValue}
                    onChangeValue={onChangeNIHSSValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Glassgow</Text>
                <View style={styles.inputText}>
                  <Input
                    value={GlassgowValue}
                    onChangeValue={onChangeGlassgowValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>ASPECTS</Text>
                <View style={styles.inputText}>
                  <Input
                    value={ASPECTSValue}
                    onChangeValue={onChangeASPECTSValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Liệt nửa người</Text>
                <View style={styles.wrapTickBoolean}>
                  <ButtonTickBoolean active={LietNuaNguoiSValue} label="Có" />
                  <ButtonTickBoolean
                    active={!LietNuaNguoiSValue}
                    label="Không"
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Liệt mặt</Text>
                <View style={styles.wrapTickBoolean}>
                  <ButtonTickBoolean active={LietMatSValue} label="Có" />
                  <ButtonTickBoolean active={!LietMatSValue} label="Không" />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Thất ngôn</Text>
                <View style={styles.wrapTickBoolean}>
                  <ButtonTickBoolean active={ThatNgonValue} label="Có" />
                  <ButtonTickBoolean active={!ThatNgonValue} label="Không" />
                </View>
              </View>
            </ScrollView>
            <View style={styles.wrapBtn}>
              <ButtonForm onPress={onPress} label="Lưu" />
            </View>
          </View>
        </View>
      </KeyboardAwareScrollView>
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

  inputText: {
    width: '85%',
    alignSelf: 'center',
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
  wrapTickBoolean: {
    width: '85%',
    alignSelf: 'center',
    justifyContent: 'space-between',
    ...commonStyles.flexRowCenter,
  },
  wrapBtnBoolean: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    width: '30%',
    borderRadius: sizes.SIZE_10,
    height: metrics.heightInput - sizes.SIZE_6,
    ...commonStyles.center,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderWidth: sizes.SIZE_1,
  },
  labelBtnBoolean: {},
});

export default ModalFormDischargeComponent;
