import React, {Children} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, commonStyles, sizes} from 'styles';
import * as RootNavigation from 'RootNavigation';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const StackHeaderComponent = ({children}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => RootNavigation.goBack()}
        style={styles.icon}>
        <MaterialCommunityIcons
          name="chevron-left"
          size={sizes.SIZE_32}
          color={colors.COLOR_WHITE}
        />
      </TouchableOpacity>
      <View>{children}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_GREEN,
    height: sizes.SIZE_50,
    justifyContent: 'flex-start',
    ...commonStyles.flexRowCenter,
  },
  icon: {
    width: wp('10%'),
  },
});

export default StackHeaderComponent;
