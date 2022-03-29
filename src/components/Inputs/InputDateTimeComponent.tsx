import React from 'react';
import {TouchableOpacity, View, StyleSheet} from 'react-native';
import {Text} from 'base';
import {colors, commonStyles, sizes} from 'styles';

export type Props = {
  containerStyle?: any;
};

const InputDateTimeComponent: React.FC<Props> = ({containerStyle}) => {
  return (
    <View style={[styles.container, containerStyle]}>
      <TouchableOpacity onPress={() => console.log(1111)} activeOpacity={0.8}>
        <Text style={styles.labelDatetime}>10/10/2022</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => console.log(222)} activeOpacity={0.8}>
        <Text style={styles.labelDatetime}>10/10/2022</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...commonStyles.heightInputForm,
    borderWidth: sizes.SIZE_1,
    borderColor: colors.COLOR_GREY,
    backgroundColor: colors.COLOR_WHITE_GREY,
    borderRadius: sizes.SIZE_22,
    paddingHorizontal: sizes.SIZE_20,
    justifyContent: 'space-around',
    ...commonStyles.flexRowCenter,
  },
  labelDatetime: {
    fontWeight: 'bold',
    color: '#333',
    textDecorationColor: '#333',
    textDecorationStyle: 'solid',
    textDecorationLine: 'underline',
  },
});

export default InputDateTimeComponent;
