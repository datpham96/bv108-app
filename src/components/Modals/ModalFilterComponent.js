import React, {useState} from 'react';
import {Button, ButtonItem, Line, Text} from 'base';
import {
  View,
  StyleSheet,
  Modal,
  TouchableOpacity,
  FlatList,
  VirtualizedList,
  Platform,
} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import metrics from 'metrics';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {BoxFilter} from 'components';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import typeConfig from 'types';
import {ScrollView} from 'native-base';
import ButtonForm from 'src/base/ButtonForm';
import {getStatusBarHeight} from 'react-native-iphone-x-helper';

const STATUS_LIST = typeConfig.listConsulationStatus;
const TIME_KHOI_PHAT_LIST = typeConfig.timeKhoiPhatList;
const DEPARTMENT_LIST = [
  {
    id: 1,
    name: 'BV108',
  },
  {
    id: 2,
    name: 'BV205',
  },
  {
    id: 3,
    name: 'BV Hải Dương',
  },
  {
    id: 4,
    name: 'BV Hưng Yên',
  },
  {
    id: 5,
    name: 'BV Hải Phòng',
  },
];
const STRING_ZERO = '';

const ModalFilterComponent = ({
  visible = false,
  onPressCancel,
  onPressRefresh,
  onPressApply,
}) => {
  const [statusCode, setStatusCode] = useState(STRING_ZERO);
  const [timeKhoiPhatCode, setTimeKhoiPhatCode] = useState(STRING_ZERO);
  const [depId, setDepId] = useState(STRING_ZERO);
  const handleSelectStatus = code => {
    if (code === statusCode) {
      setStatusCode(STRING_ZERO);
      return;
    }
    setStatusCode(code);
  };
  const handleSelectTimeKhoiPhat = code => {
    if (code === timeKhoiPhatCode) {
      setTimeKhoiPhatCode(STRING_ZERO);
      return;
    }
    setTimeKhoiPhatCode(code);
  };
  const handleSelectDep = code => {
    if (code === depId) {
      setDepId(STRING_ZERO);
      return;
    }
    setDepId(code);
  };

  const handleRefresh = () => {
    setStatusCode('');
    setDepId('');
    setTimeKhoiPhatCode('');
  };

  const handleSeeMore = () => {};
  return (
    <Modal
      onRequestClose={onPressCancel}
      animationType="none"
      transparent={true}
      visible={visible}>
      <View style={styles.backgroundModal} />
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.close}
          activeOpacity={0.8}
          onPress={onPressCancel}>
          <MaterialCommunityIcons
            name="close"
            size={sizes.SIZE_26}
            color={colors.COLOR_RED}
          />
        </TouchableOpacity>
        <View style={styles.contentContainer}>
          <Text style={[commonStyles.mainTitle, styles.mainTitle]}>
            Bộ lọc tìm kiếm
          </Text>
          <Line />
          <ScrollView style={styles.wrapContent}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Trạng thái</Text>
              <View style={styles.wrapSectionBox}>
                {STATUS_LIST.map((status, key) => {
                  return (
                    <View key={key}>
                      <BoxFilter
                        isActive={statusCode === status.code}
                        onPress={() => handleSelectStatus(status.code)}
                        label={status.name}
                        containerStyle={styles.sectionBox}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.wrapLine}>
              <Line />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Thời gian khởi phát</Text>
              <View style={styles.wrapSectionBox}>
                {TIME_KHOI_PHAT_LIST.map((status, key) => {
                  return (
                    <View
                      style={[
                        styles.boxTimeKhoiPhat,
                        key === 2 || key === 3
                          ? {marginBottom: sizes.ZERO}
                          : {},
                      ]}
                      key={key}>
                      <BoxFilter
                        isActive={timeKhoiPhatCode === status.code}
                        onPress={() => handleSelectTimeKhoiPhat(status.code)}
                        label={status.name}
                        containerStyle={styles.sectionBox}
                      />
                    </View>
                  );
                })}
              </View>
            </View>
            <View style={styles.wrapLine}>
              <Line />
            </View>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Thời gian khởi phát</Text>
              <View style={styles.wrapSectionBox}>
                {DEPARTMENT_LIST.map((dep, key) => {
                  return (
                    <View
                      style={[
                        styles.boxDep,
                        key === DEPARTMENT_LIST.length - 1 ||
                        key === DEPARTMENT_LIST.length - 2
                          ? {marginBottom: sizes.ZERO}
                          : {},
                      ]}
                      key={key}>
                      <BoxFilter
                        isActive={depId === dep.id}
                        onPress={() => handleSelectDep(dep.id)}
                        label={dep.name}
                        containerStyle={styles.sectionBox}
                      />
                    </View>
                  );
                })}
              </View>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={handleSeeMore}
                style={styles.wrapSeeMore}>
                <Text style={styles.textSeeMore}>Xem thêm</Text>
                <MaterialCommunityIcons
                  name="chevron-down"
                  size={sizes.SIZE_18}
                  color={colors.COLOR_GREEN}
                />
              </TouchableOpacity>
            </View>
          </ScrollView>
          <Line />
          <View style={styles.wrapBtn}>
            <ButtonItem
              onPress={handleRefresh}
              customStyle={styles.btnRefresh}
              customLabelStyle={styles.labelBtnRefresh}
              label="Thiết lập lại"
            />
            <ButtonItem
              onPress={() => {
                onPressApply();
                onPressCancel();
              }}
              customStyle={styles.btnApply}
              customLabelStyle={styles.labelBtnApply}
              label="Áp dụng"
            />
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
    width: metrics.screenWidth,
    ...Platform.select({
      ios: {
        height: metrics.screenHeight,
      },
      android: {
        height: metrics.screenHeight - getStatusBarHeight(),
      },
    }),
    padding: sizes.SIZE_5,
  },
  logoSuccess: {
    width: metrics.screenWidth / sizes.SIZE_8,
    height: metrics.screenWidth / sizes.SIZE_8,
    alignSelf: 'center',
  },
  mainTitle: {
    fontSize: sizes.SIZE_20,
    ...Platform.select({
      ios: {
        marginTop: sizes.SIZE_15,
      },
      android: {
        marginTop: sizes.SIZE_5,
      },
    }),
    fontFamily: fonts.quicksand.FONT_MEDIUM,
  },
  wrapBtn: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    ...commonStyles.flexRowCenter,
    paddingTop: sizes.SIZE_10,
    paddingBottom: sizes.SIZE_5,
  },
  btn: {
    alignSelf: 'center',
  },
  close: {
    position: 'absolute',
    zIndex: sizes.SIZE_1,
    ...Platform.select({
      ios: {
        top: metrics.statusBarHeight,
      },
      android: {
        top: sizes.SIZE_10,
      },
    }),
    alignSelf: 'flex-end',
    right: sizes.SIZE_10,
  },
  wrapContent: {
    padding: sizes.SIZE_10,
  },
  section: {
    width: wp('93%'),
  },
  wrapLine: {
    marginVertical: sizes.SIZE_15,
  },
  sectionTitle: {
    ...commonStyles.titleInput,
    marginBottom: sizes.SIZE_7,
  },
  wrapSectionBox: {
    width: wp('88%'),
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    alignSelf: 'flex-end',
    marginRight: sizes.SIZE_1,
  },
  sectionBox: {
    width: wp('42%'),
    // marginBottom: wp('3%'),
  },
  boxTimeKhoiPhat: {
    marginBottom: wp('4%'),
    alignSelf: 'flex-start',
  },
  boxDep: {
    alignSelf: 'flex-start',
    marginBottom: wp('4%'),
  },
  //flatlist
  columnWrapperFlatlist: {
    marginVertical: sizes.SIZE_5,
    justifyContent: 'space-between',
  },
  //see more
  wrapSeeMore: {
    ...commonStyles.flexRowCenter,
    ...commonStyles.center,
    marginTop: sizes.SIZE_10,
  },
  textSeeMore: {
    color: colors.COLOR_GREEN,
  },
  //button
  btnRefresh: {
    width: wp('25%'),
    backgroundColor: colors.COLOR_WHITE,
    borderColor: colors.COLOR_GREEN,
    borderWidth: sizes.SIZE_1,
  },
  btnApply: {
    width: wp('25%'),
    marginLeft: sizes.SIZE_8,
    borderColor: colors.COLOR_GREEN,
    borderWidth: sizes.SIZE_1,
  },
  labelBtnRefresh: {
    color: colors.COLOR_GREEN,
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
  },
  labelBtnApply: {
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
  },
});

export default ModalFilterComponent;
