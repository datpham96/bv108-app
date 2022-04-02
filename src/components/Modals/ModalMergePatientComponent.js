import React from 'react';
import {Text, Line, ButtonItem} from 'base';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  Platform,
  FlatList,
} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import metrics from 'metrics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import InputDateTime from '../Inputs/InputDateTimeComponent';
import {InputSearch} from 'components';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

const Item = ({onPressMerge, index}) => {
  return (
    <View style={styles.content}>
      <View style={styles.wrapItemInfo}>
        <View style={styles.wrapName}>
          <Text style={styles.name}>Nguyễn Văn A</Text>
          <Text
            style={[
              styles.noteName,
              index === 2 || index === 5 ? {color: colors.COLOR_ORANGE} : {},
            ]}>
            {index === 2 || index === 5 ? '(Đang theo dõi)' : '(Đã ra viện)'}
          </Text>
        </View>
        <Text style={styles.textInfo}>Mã bệnh nhân: 23423423</Text>
        <Text style={styles.textInfo}>Giới tính: Nam</Text>
        <Text style={styles.textInfo}>Tuổi: 20</Text>
      </View>
      <ButtonItem
        customLabelStyle={styles.labelBtn}
        onPress={onPressMerge}
        customStyle={styles.btn}
        label={'Ghộp bệnh nhân'}
      />
    </View>
  );
};

const ModalMergePatientComponent = ({
  visible = false,
  onPressCancel,
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
            Gộp bệnh nhân đã có
          </Text>
          <Line customStyle={styles.line} />
          <View style={styles.wrapInputSearch}>
            <InputSearch containerStyle={styles.wrapInputSearch} />
          </View>
          <FlatList
            style={styles.containerFlatlist}
            contentContainerStyle={styles.contentContainerFlatlist}
            data={[1, 2, 3, 4, 5, 6, 7, 1, 2, 3, 4, 5, 6, 7]}
            renderItem={item => <Item index={item.index} item={item.item} />}
          />
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
    width: metrics.screenWidth,
    height: metrics.screenHeightNoStatusBarAndBottomSpace,
    paddingTop: sizes.SIZE_10,
  },
  mainTitle: {
    ...commonStyles.titleForm,
    marginBottom: sizes.SIZE_10,
    marginHorizontal: sizes.SIZE_25,
  },
  line: {
    width: '92%',
    alignSelf: 'center',
    marginBottom: sizes.SIZE_10,
  },
  wrapClose: {
    alignSelf: 'flex-end',
    right: sizes.SIZE_10,
  },
  wrapInputSearch: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    width: wp('92%'),
    alignSelf: 'center',
    borderRadius: sizes.SIZE_30,
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_NATIVE_BASE_LIGHT_200,
  },
  //item
  content: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    paddingVertical: sizes.SIZE_10,
    paddingHorizontal: sizes.SIZE_15,
  },
  wrapItemInfo: {
    ...commonStyles.flex1,
    paddingRight: sizes.SIZE_10,
  },
  wrapName: {
    ...commonStyles.flexRowCenter,
    marginBottom: sizes.SIZE_5,
  },
  name: {
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
    fontSize: sizes.SIZE_14,
  },
  noteName: {
    marginLeft: sizes.SIZE_3,
    fontFamily: fonts.quicksand.FONT_BOLD_ITALIC,
  },
  textInfo: {
    lineHeight: sizes.SIZE_17,
  },
  btn: {
    alignSelf: 'center',
    width: sizes.SIZE_110,
    paddingHorizontal: sizes.ZERO,
  },
  labelBtn: {
    fontFamily: fonts.quicksand.FONT_MEDIUM,
    fontSize: sizes.SIZE_11,
    marginBottom: sizes.SIZE_2,
  },
  containerFlatlist: {
    marginTop: sizes.SIZE_10,
  },
  contentContainerFlatlist: {
    paddingBottom: sizes.SIZE_10,
  },
});

export default ModalMergePatientComponent;
