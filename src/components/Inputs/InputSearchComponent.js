import React from 'react';
import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Platform,
} from 'react-native';
import {checkVar} from 'src/helpers/funcs';
import {colors, commonStyles, sizes} from 'styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

const InputSearchComponent = ({setTextSearch, textSearch, containerStyle}) => {
  return (
    <View style={[styles.wrapInputSearch, containerStyle]}>
      <TextInput
        value={textSearch}
        onChangeText={text => {
          setTextSearch(text);
        }}
        underlineColorAndroid={'transparent'}
        placeholderTextColor={colors.COLOR_PLACEHOLDER}
        autoCapitalize="none"
        autoComplete="off"
        autoCorrect={false}
        selectionColor={colors.COLOR_GREEN}
        placeholder="Tìm kiếm bệnh nhân"
        style={styles.input}
      />
      {!checkVar.isEmpty(textSearch) && (
        <TouchableOpacity onPress={() => setTextSearch('')} activeOpacity={0.8}>
          <MaterialCommunityIcons
            name="close-circle"
            size={sizes.SIZE_19}
            color={colors.COLOR_PLACEHOLDER}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapInputSearch: {
    borderRadius: sizes.SIZE_20,
    backgroundColor: colors.COLOR_WHITE,
    width: wp('100%'),
    ...commonStyles.flexRowCenter,
    justifyContent: 'space-between',
    paddingRight: sizes.SIZE_10,
  },
  input: {
    paddingLeft: sizes.SIZE_20,
    paddingRight: sizes.SIZE_10,
    ...commonStyles.flex1,
    height: sizes.SIZE_36,
    ...Platform.select({
      android: {
        height: sizes.SIZE_40,
      },
    }),
  },
});

export default InputSearchComponent;
