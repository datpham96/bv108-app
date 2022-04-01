import React from 'react';
import {View, StyleSheet} from 'react-native';
import {sizes, colors} from 'styles';
import metrics from 'metrics';

const SpaceComponent = ({sizeVertical = sizes.SIZE_6}) => {
  return <View style={[styles.space, {height: sizeVertical}]} />;
};

const styles = StyleSheet.create({
  space: {
    width: metrics.screenWidth,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_100,
  },
});

export default SpaceComponent;
