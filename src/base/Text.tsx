import React from 'react';
import {Text as RNText, StyleSheet} from 'react-native';
import {colors, fonts, sizes} from '../config/styles';

export type Props = {
  children?: any;
  style?: any;
  onPress?: any;
  props?: any;
};

const Text: React.FC<Props> = ({style, children, onPress, props}) => {
  return (
    <RNText
      suppressHighlighting={true}
      {...props}
      onPress={onPress}
      style={[styles.text, style]}>
      {children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: sizes.DEFAULT,
    color: colors.COLOR_BLACK,
    fontFamily: fonts.quicksand.FONT_REGULAR,
  },
});

export default Text;
