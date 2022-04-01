import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {ButtonItem, Line, Text} from 'base';
import {colors, commonStyles, fonts, sizes} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const ItemComponent = ({item, onPressItem, totalLength, index}) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <TouchableOpacity
          style={styles.wrapItemInfo}
          activeOpacity={0.8}
          onPress={onPressItem}>
          <View style={styles.wrapName}>
            <Text style={styles.name}>Nguyễn Văn A</Text>
            <Text
              style={[
                styles.noteName,
                index === 2 || index === 5 ? {color: colors.COLOR_RED} : {},
              ]}>
              {index === 2 || index === 5 ? '(Đang theo dõi)' : '(Đã ra viện)'}
            </Text>
          </View>
          <Text style={styles.textInfo}>Nam</Text>
          <Text style={styles.textInfo}>20 tuổi</Text>
          <Text style={styles.textInfo}>Mã bệnh nhân: PID23432</Text>
        </TouchableOpacity>
        <ButtonItem
          customStyle={[
            styles.btn,
            index === 2 || index === 5
              ? {backgroundColor: colors.COLOR_ORANGE}
              : {backgroundColor: colors.COLOR_BLUE},
          ]}
          label={index === 2 || index === 5 ? 'Xem bệnh án' : 'Nhập viện'}
        />
      </View>
      {index < totalLength - 1 && <Line />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
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
  },
  name: {
    fontFamily: fonts.quicksand.FONT_SEMI_BOLD,
    fontSize: sizes.SIZE_14,
  },
  noteName: {
    marginLeft: sizes.SIZE_3,
    fontFamily: fonts.quicksand.FONT_ITALIC,
  },
  textInfo: {
    lineHeight: sizes.SIZE_17,
  },
  btn: {
    alignSelf: 'center',
    width: sizes.SIZE_110,
  },
});

export default ItemComponent;
