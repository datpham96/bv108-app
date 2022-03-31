/* eslint-disable indent */
import React, {useState} from 'react';
import {Text, Line, Input, Checkbox} from 'base';
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
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const ModalFormOnlyTimeComponent = ({
  visible = false,
  onPressCancel,
  onPress,
  nameValue,
  onChangeNameValue,
}) => {
  const [isAutoName, setIsAutoName] = useState(false);
  const [isBirthday, setIsBirthday] = useState(false);
  const [gender, setGender] = useState(false);
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
              Nhập viện
            </Text>
            <Line customStyle={styles.line} />
            <Text style={styles.titleHospitalize}>
              Thêm mới và nhập viện cho bệnh nhân
            </Text>
            <View style={styles.containerForm}>
              <View style={styles.wrapInput}>
                <Text style={styles.labelInput}>Tên</Text>
                <View style={styles.inputText}>
                  <Input
                    value={nameValue}
                    onChangeValue={onChangeNameValue}
                    placeholder="Tên"
                    form
                  />
                  <Checkbox
                    isActive={isAutoName}
                    onPress={() => setIsAutoName(!isAutoName)}
                    containerStyle={styles.checkbox}
                    label="Tạo tên tự động"
                  />
                </View>
              </View>
              <View style={styles.wrapInput}>
                <Text style={styles.labelInput}>Giới tính</Text>
                <View style={styles.inputText}>
                  <View style={styles.wrapBoxGender}>
                    <TouchableOpacity
                      style={[
                        styles.btnGenderLeft,
                        gender
                          ? {
                              borderColor: colors.COLOR_GREEN,
                            }
                          : {
                              borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
                            },
                      ]}
                      activeOpacity={0.8}
                      onPress={() => setGender(true)}>
                      <Text
                        style={[
                          styles.labelBtnGender,
                          gender
                            ? {
                                color: colors.COLOR_GREEN,
                                fontFamily: fonts.quicksand.FONT_BOLD,
                              }
                            : {},
                        ]}>
                        Nam
                      </Text>
                    </TouchableOpacity>
                    <View style={styles.lineVertical} />
                    <TouchableOpacity
                      style={[
                        styles.btnGenderRight,
                        !gender
                          ? {
                              borderColor: colors.COLOR_GREEN,
                            }
                          : {},
                      ]}
                      activeOpacity={0.8}
                      onPress={() => setGender(false)}>
                      <Text
                        style={[
                          styles.labelBtnGender,
                          !gender
                            ? {
                                color: colors.COLOR_GREEN,
                                fontFamily: fonts.quicksand.FONT_BOLD,
                              }
                            : {},
                        ]}>
                        Nữ
                      </Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={styles.wrapInput}>
                <Text style={styles.labelInput}>Năm sinh</Text>
                <View style={styles.inputText}>
                  <Input
                    disabled={isBirthday}
                    value={nameValue}
                    onChangeValue={onChangeNameValue}
                    placeholder="Năm sinh"
                    form
                  />
                  <Checkbox
                    isActive={isBirthday}
                    onPress={() => setIsBirthday(!isBirthday)}
                    containerStyle={styles.checkbox}
                    label="Chưa rõ năm sinh"
                  />
                </View>
              </View>
              <View style={styles.wrapInput}>
                <Text style={styles.labelInput}>Tuổi</Text>
                <View style={styles.inputText}>
                  <Input
                    disabled={!isBirthday}
                    value={nameValue}
                    onChangeValue={onChangeNameValue}
                    placeholder="Tuổi"
                    form
                  />
                </View>
              </View>
            </View>
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
  titleHospitalize: {
    textAlign: 'center',
    marginTop: sizes.SIZE_10,
    fontFamily: fonts.quicksand.FONT_MEDIUM,
    fontSize: sizes.SIZE_14,
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
  wrapInput: {
    marginBottom: sizes.SIZE_10,
  },
  inputInput: {
    width: '85%',
    alignSelf: 'center',
  },
  labelInput: {
    ...commonStyles.labelInput,
    marginBottom: sizes.SIZE_7,
  },
  wrapBtn: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'center',
    marginTop: sizes.SIZE_30,
  },
  inputText: {
    width: '85%',
    alignSelf: 'center',
  },
  wrapBoxGender: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    borderRadius: sizes.SIZE_20,
    ...commonStyles.heightInputForm,
    // borderWidth: sizes.SIZE_1,
    // borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
  },
  btnGenderLeft: {
    width: '50%',
    ...commonStyles.center,
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    // borderRightWidth: sizes.ZERO,
    ...commonStyles.heightInputForm,
    borderTopLeftRadius: sizes.SIZE_20,
    borderBottomLeftRadius: sizes.SIZE_20,
  },
  btnGenderRight: {
    width: '50%',
    ...commonStyles.center,
    borderWidth: sizes.SIZE_1,
    // borderLeftWidth: sizes.ZERO,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    ...commonStyles.heightInputForm,
    borderTopRightRadius: sizes.SIZE_20,
    borderBottomRightRadius: sizes.SIZE_20,
  },
  labelBtnGender: {
    fontFamily: fonts.quicksand.FONT_MEDIUM,
  },
  lineVertical: {
    width: sizes.SIZE_1,
    ...commonStyles.heightInputForm,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
  },
  checkbox: {
    marginLeft: sizes.SIZE_15,
    marginTop: sizes.SIZE_5,
  },
});

export default ModalFormOnlyTimeComponent;
