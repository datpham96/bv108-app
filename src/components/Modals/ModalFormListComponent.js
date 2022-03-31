import React from 'react';
import {Text, Line} from 'base';
import {View, StyleSheet, Modal, ScrollView} from 'react-native';
import {colors, commonStyles, fonts, sizes} from 'styles';
import metrics from 'metrics';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {TouchableOpacity} from 'react-native-gesture-handler';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const ModalFormListComponent = ({
  visible = false,
  onPressCancel,
  formList = [],
  onPress,
}) => {
  return (
    <Modal
      onRequestClose={onPressCancel}
      animationType="none"
      transparent={true}
      visible={visible}>
      <View style={styles.backgroundModal} />
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
      <View style={styles.container}>
        <View style={styles.contentContainer}>
          <ScrollView>
            {formList.map((item, key) => {
              return (
                <View>
                  <TouchableOpacity
                    style={styles.wrapItem}
                    activeOpacity={0.8}
                    onPress={() => {
                      onPress(item.code);
                      onPressCancel();
                    }}>
                    <Text style={styles.itemName}>{item.name}</Text>
                  </TouchableOpacity>
                  {formList.length > key && <Line />}
                </View>
              );
            })}
          </ScrollView>
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
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  contentContainer: {
    backgroundColor: colors.COLOR_WHITE,
    width: wp('60%'),
    maxHeight: metrics.screenHeightNoStatusBarAndBottomSpace,
  },
  wrapItem: {
    ...commonStyles.center,
    paddingVertical: sizes.SIZE_20,
  },
  itemName: {
    fontSize: sizes.DEFAULT,
    fontFamily: fonts.quicksand.FONT_MEDIUM,
  },
  close: {
    marginTop: metrics.statusBarHeight + sizes.SIZE_5,
    alignSelf: 'flex-end',
    marginRight: sizes.SIZE_10,
  },
});

export default ModalFormListComponent;
