import React, {useState} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import {Text} from 'base';
import {colors, commonStyles, fonts, sizes} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {theme} from 'native-base';
import FastImage from 'react-native-fast-image';
import images from 'images';
import Tooltip from './TooltipComponent';

const TimeLineComponent = () => {
  const [toggleTooltip, setToggleTooltip] = useState(false);
  return (
    <View style={styles.container}>
      <View style={styles.horizontalLine} />
      <View style={styles.dot} />
      <View style={styles.verticalLine} />
      <View style={styles.wrapLabel}>
        <Text style={styles.textLabel}>04:00 20/12/2022</Text>
      </View>
      <View style={styles.content}>
        <View style={styles.wrapBoxContent}>
          <View style={styles.boxHeader}>
            <Text style={styles.formName}>Khởi phát</Text>
            <View style={styles.wrapActionTooltip}>
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => setToggleTooltip(!toggleTooltip)}>
                <MaterialCommunityIcons
                  name="dots-horizontal"
                  size={sizes.SIZE_20}
                  color={colors.COLOR_GREY}
                />
              </TouchableOpacity>
              {toggleTooltip && (
                <View style={styles.boxTooltip}>
                  <Tooltip onPress={code => setToggleTooltip(false)} />
                </View>
              )}
            </View>
          </View>
          <View style={styles.index}>
            <Text style={styles.indexValue}>ASPECTS: 5</Text>
            <Text style={styles.indexValue}>Glassgow: 5</Text>
            <Text style={styles.indexValue}>Liệt mặt: Có</Text>
            <Text style={styles.indexValue}>Liệt nửa người: Không</Text>
            <Text style={styles.indexValue}>NIHSS: 5</Text>
            <Text style={styles.indexValue}>Thất ngôn: Không</Text>
            <View style={styles.wrapImage}>
              <FastImage style={styles.image} source={images.avatars.default} />
              <FastImage style={styles.image} source={images.avatars.default} />
              <FastImage style={styles.image} source={images.avatars.default} />
              <FastImage style={styles.image} source={images.avatars.default} />
            </View>
          </View>
          <Text style={styles.time}>12:10 20/03/2022</Text>
        </View>
        <View style={styles.wrapInfo}>
          <Text style={styles.name}>Nhập bởi Nguyễn Văn Anh</Text>
          <Text style={styles.hospital}>Bệnh viện 105</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    marginHorizontal: sizes.SIZE_20,
    top: sizes.SIZE_10,
  },
  content: {
    marginLeft: wp('10%'),
    marginTop: sizes.SIZE_8,
    marginBottom: sizes.SIZE_18,
  },
  wrapBoxContent: {
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
    padding: sizes.SIZE_7,
    ...theme.shadows[2],
    borderRadius: sizes.SIZE_5,
  },
  boxHeader: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    marginBottom: sizes.SIZE_5,
  },
  formName: {
    fontFamily: fonts.quicksand.FONT_BOLD,
    fontSize: sizes.SIZE_15,
    color: colors.COLOR_NATIVE_BASE_MUTED_700,
  },
  wrapActionTooltip: {
    // position: 'absolute',
    // alignItems: 'flex-end',
    // justifyContent: 'flex-end',
    // right: sizes.ZERO,
  },
  boxTooltip: {
    // position: 'absolute',
  },
  index: {
    marginLeft: sizes.SIZE_10,
    marginBottom: sizes.SIZE_5,
  },
  indexValue: {},
  wrapImage: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'flex-start',
    flexWrap: 'wrap',
    marginTop: sizes.SIZE_8,
    alignItems: 'flex-start',
    width: wp('76%'),
    marginLeft: -wp('3%'),
  },
  image: {
    width: wp('22%'),
    height: wp('22%'),
    marginLeft: wp('3%'),
    marginBottom: wp('3%'),
    borderRadius: sizes.SIZE_5,
  },
  time: {
    fontFamily: fonts.quicksand.FONT_MEDIUM,
    color: colors.COLOR_NATIVE_BASE_MUTED_500,
    alignSelf: 'flex-end',
  },
  wrapInfo: {
    marginLeft: sizes.SIZE_10,
    marginTop: sizes.SIZE_10,
  },
  name: {
    color: colors.COLOR_NATIVE_BASE_DARK_BLUE_700,
    fontFamily: fonts.quicksand.FONT_BOLD_ITALIC,
  },
  hospital: {
    fontFamily: fonts.quicksand.FONT_ITALIC,
    fontSize: sizes.SIZE_12,
    marginTop: sizes.SIZE_3,
  },
  horizontalLine: {
    height: '100%',
    width: sizes.SIZE_1,
    position: 'absolute',
    left: sizes.ZERO,
    backgroundColor: colors.COLOR_NATIVE_BASE_MUTED_400,
  },
  dot: {
    width: sizes.SIZE_12,
    height: sizes.SIZE_12,
    backgroundColor: colors.COLOR_NATIVE_BASE_MUTED_400,
    borderRadius: sizes.SIZE_6,
    position: 'absolute',
    left: -sizes.SIZE_6,
  },
  verticalLine: {
    width: wp('6%'),
    height: sizes.SIZE_1,
    backgroundColor: colors.COLOR_NATIVE_BASE_MUTED_400,
    position: 'absolute',
    top: sizes.SIZE_6,
  },
  wrapLabel: {
    backgroundColor: colors.COLOR_NATIVE_BASE_MUTED_400,
    alignSelf: 'baseline',
    borderRadius: sizes.SIZE_20,
    paddingVertical: sizes.SIZE_3,
    paddingHorizontal: sizes.SIZE_15,
    height: sizes.SIZE_23,
    marginLeft: wp('6%'),
    marginTop: -sizes.SIZE_5,
  },
  textLabel: {
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
    color: colors.COLOR_WHITE,
  },
});

export default TimeLineComponent;
