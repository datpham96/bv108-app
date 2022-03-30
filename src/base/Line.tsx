import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors, sizes} from 'styles';

export type Props = {
  customStyle?: any;
};

const Line: React.FC<Props> = ({customStyle}) => {
  return <View style={[styles.line, customStyle]} />;
};

const styles = StyleSheet.create({
  line: {
    width: '100%',
    height: sizes.SIZE_1,
    backgroundColor: colors.COLOR_NATIVE_BASE_LIGHT_300,
  },
});

export default Line;
