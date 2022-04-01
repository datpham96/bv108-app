import React, {useState} from 'react';
import {Text, Line, Input} from 'base';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
  Image,
  StatusBar,
} from 'react-native';
import {colors, commonStyles, sizes} from 'styles';
import metrics from 'metrics';
import ButtonForm from 'src/base/ButtonForm';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputDateTime from '../Inputs/InputDateTimeComponent';
import {ScrollView} from 'native-base';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {getBottomSpace, getStatusBarHeight} from 'react-native-iphone-x-helper';
import {launchImageLibrary, launchCamera} from 'react-native-image-picker';
import ModalBottomSheet from '../Modals/ModalBottomSheetComponent';
import lodash from 'lodash';

const options = {
  quality: 0.5,
  includeBase64: true,
};

const ImageMask = ({onPress}) => {
  return (
    <TouchableOpacity
      style={styles.wrapMask}
      activeOpacity={0.8}
      onPress={onPress}>
      <MaterialCommunityIcons
        name="folder-upload-outline"
        color={colors.COLOR_BLACK}
        size={sizes.SIZE_24}
      />
      <Text style={styles.labelMask}>Tải ảnh</Text>
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
  GlucoseValue,
  onChangeGlucoseValue,
  UreValue,
  onChangeUreValue,
  CreatininValue,
  onChangeCreatininValue,
  INRValue,
  onChangeINRValue,
  RungNhiValue,
  onChangeRungNhiValue,
}) => {
  const [visibleImagePicker, setVisibleImagePicker] = useState(false);
  const [previewListImages, setPreviewListImages] = useState([]);
  const handleOpenCamera = () => {
    options.mediaType = 'photo';
    launchCamera(options, response => {
      if (response && response?.assets) {
        let item = response.assets?.[0];
        let dataFirstBase64 = 'data:' + item.type + ';base64,';
        let formatData = dataFirstBase64 + item.base64;
        setPreviewListImages([...previewListImages, {uri: item.uri}]);
      }
    });
  };

  const handleOpenLibrary = () => {
    setVisibleImagePicker(false);
    options.mediaType = 'photo';
    launchImageLibrary(options, response => {
      if (response && response?.assets) {
        let item = response.assets?.[0];
        let dataFirstBase64 = 'data:' + item.type + ';base64,';
        let formatData = dataFirstBase64 + item.base64;
        setPreviewListImages([...previewListImages, {uri: item.uri}]);
      }
    });
  };

  const handleRemoveImage = item => {
    setPreviewListImages(
      lodash.filter(previewListImages, o => {
        return o.uri !== item.uri;
      }),
    );
  };

  const handleOpenBottomSheetImagePicker = () => {
    //check permission camera
    // requestMultiple([PERMISSIONS.IOS.CAMERA, PERMISSIONS.ANDROID.CAMERA]).then(
    //   result => {
    //     if (
    //       result[PERMISSIONS.IOS.CAMERA] === RESULTS.BLOCKED ||
    //       result[PERMISSIONS.IOS.CAMERA] === RESULTS.DENIED ||
    //       result[PERMISSIONS.ANDROID.CAMERA] === RESULTS.BLOCKED ||
    //       result[PERMISSIONS.ANDROID.CAMERA] === RESULTS.DENIED
    //     ) {
    //       setVisiblePermissionCamera(true);
    //     }
    //     if (
    //       result[PERMISSIONS.IOS.CAMERA] === RESULTS.GRANTED ||
    //       result[PERMISSIONS.ANDROID.CAMERA] === RESULTS.GRANTED
    //     ) {
    //       setVisibleImagePicker(true);
    //       setVisiblePermissionCamera(false);
    //     }
    //   },
    // );
    setVisibleImagePicker(true);
  };
  return (
    <Modal
      onRequestClose={onPressCancel}
      animationType="none"
      transparent={true}
      visible={visible}>
      <StatusBar hidden />
      <View style={styles.backgroundModal} />
      <ModalBottomSheet
        onPressOne={() => {
          setVisibleImagePicker(false);
          setTimeout(() => {
            handleOpenCamera();
          }, 200);
        }}
        onPressTwo={() => {
          setVisibleImagePicker(false);
          setTimeout(() => {
            handleOpenLibrary();
          }, 200);
        }}
        onPressCancel={() => setVisibleImagePicker(false)}
        visible={visibleImagePicker}
        onPressClose={() => setVisibleImagePicker(false)}
      />
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
                <Text style={styles.labelDateTime}>Glucose</Text>
                <View style={styles.inputText}>
                  <Input
                    value={GlucoseValue}
                    onChangeValue={onChangeGlucoseValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Ure</Text>
                <View style={styles.inputText}>
                  <Input
                    value={UreValue}
                    onChangeValue={onChangeUreValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Creatinin</Text>
                <View style={styles.inputText}>
                  <Input
                    value={CreatininValue}
                    onChangeValue={onChangeCreatininValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>INR</Text>
                <View style={styles.inputText}>
                  <Input
                    value={INRValue}
                    onChangeValue={onChangeINRValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Rung nhĩ</Text>
                <View style={styles.inputText}>
                  <Input
                    value={RungNhiValue}
                    onChangeValue={onChangeRungNhiValue}
                    placeholder="Nhập kết quả"
                    form={true}
                  />
                </View>
              </View>
              <View style={styles.wrapDateTime}>
                <Text style={styles.labelDateTime}>Ảnh chụp</Text>
                <View style={styles.wrapAnhChup}>
                  <ImageMask onPress={handleOpenBottomSheetImagePicker} />
                  {previewListImages.map((item, key) => {
                    return (
                      <View key={key} styles={styles.wrapPreviewImage}>
                        <Image style={styles.previewImage} source={item} />
                        <TouchableOpacity
                          style={styles.iconClose}
                          activeOpacity={0.8}
                          onPress={() => handleRemoveImage(item)}>
                          <MaterialCommunityIcons
                            name="close-circle"
                            size={sizes.SIZE_22}
                            color={colors.COLOR_RED}
                          />
                        </TouchableOpacity>
                      </View>
                    );
                  })}
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
    justifyContent: 'center',
  },
  contentContainer: {
    backgroundColor: colors.COLOR_WHITE,
    width: metrics.screenWidth - sizes.SIZE_20,
    paddingTop: sizes.SIZE_10,
    maxHeight: metrics.screenHeight - getStatusBarHeight() - getBottomSpace(),
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
  wrapAnhChup: {
    width: wp('78%'),
    alignSelf: 'center',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    ...commonStyles.flexRowCenter,
  },
  wrapMask: {
    width: wp('22%'),
    height: wp('22%'),
    ...commonStyles.center,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
    borderWidth: sizes.SIZE_1,
    borderStyle: 'dashed',
    marginBottom: wp('5%'),
    marginLeft: wp('3%'),
    alignSelf: 'flex-start',
  },
  labelMask: {
    fontSize: sizes.SIZE_11,
  },
  wrapPreviewImage: {
    width: wp('22%'),
    height: wp('22%'),
    ...commonStyles.center,
  },
  previewImage: {
    width: wp('22%'),
    height: wp('22%'),
    marginLeft: wp('3%'),
    marginBottom: wp('5%'),
  },
  iconClose: {
    position: 'absolute',
    top: -sizes.SIZE_10,
    right: -sizes.SIZE_5,
    backgroundColor: colors.COLOR_WHITE,
    borderRadius: sizes.SIZE_20,
    ...commonStyles.center,
  },
});

export default ModalFormDischargeComponent;
