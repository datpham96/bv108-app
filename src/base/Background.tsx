import React from 'react';
import {StyleSheet, StatusBar, SafeAreaView} from 'react-native';
import {colors, commonStyles, sizes} from '../config/styles';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

export type Props = {
  bin?: boolean;
  bout?: boolean;
  children?: any;
  customContainer?: any;
  customerBackgroundImage?: any;
  isKeyboard?: any;
  bottomTab?: any;
};

const Background: React.FC<Props> = ({
  children,
  customContainer,
  isKeyboard,
}) => {
  return (
    <SafeAreaView style={[styles.container, customContainer]}>
      <StatusBar animated={true} barStyle={'dark-content'} />
      {isKeyboard ? (
        <KeyboardAwareScrollView
          enableOnAndroid={true}
          extraScrollHeight={sizes.SIZE_20}>
          {children}
        </KeyboardAwareScrollView>
      ) : (
        children
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.flex1,
    backgroundColor: colors.COLOR_WHITE,
  },
});

export default Background;
