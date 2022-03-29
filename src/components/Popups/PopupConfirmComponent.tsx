import React from 'react';
import {Text, ButtonItem} from 'base';
import {View, StyleSheet, Modal} from 'react-native';
import images from 'images';
import FastImage from 'react-native-fast-image';
import {colors, commonStyles, sizes} from 'styles';
import metrics from 'metrics';

export type Props = {
  visible?: any;
  onPressCancel?: any;
  onPressAgree?: any;
  content?: any;
  labelBtnLeft?: any;
  labelBtnRight?: any;
  srcImage?: any;
  notiLabel?: any;
};

const PopupConfirmComponent: React.FC<Props> = ({
  visible = false,
  onPressCancel,
  onPressAgree,
  content,
  labelBtnLeft = 'Huỷ',
  labelBtnRight = 'Đồng ý',
  notiLabel = 'Thông báo',
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
          <Text style={[commonStyles.mainTitle, styles.mainTitle]}>
            {notiLabel}
          </Text>
          <Text style={styles.content}>{content}</Text>
          <View style={styles.wrapBtn}>
            <ButtonItem
              customStyle={styles.btnLeft}
              onPress={onPressCancel}
              label={labelBtnLeft}
            />
            <ButtonItem
              customStyle={styles.btnRight}
              onPress={onPressAgree}
              label={labelBtnRight}
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
    width: metrics.screenWidth - sizes.SIZE_60,
    borderRadius: sizes.SIZE_15,
    padding: sizes.SIZE_15,
    paddingBottom: sizes.SIZE_30,
    paddingTop: sizes.SIZE_40,
  },
  mainTitle: {
    fontSize: sizes.SIZE_16,
    textAlign: 'center',
  },
  content: {
    textAlign: 'center',
    marginTop: sizes.SIZE_20,
    lineHeight: sizes.SIZE_22,
  },
  wrapBtn: {
    ...commonStyles.flexRowCenter,
    justifyContent: 'center',
    marginTop: sizes.SIZE_30,
  },
  btnLeft: {
    width: '25%',
    alignSelf: 'auto',
    backgroundColor: colors.COLOR_RED,
  },
  btnRight: {
    width: '25%',
    alignSelf: 'auto',
    marginLeft: sizes.SIZE_20,
  },
  label: {},
});

export default PopupConfirmComponent;
