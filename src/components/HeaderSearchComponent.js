import React, {useState} from 'react';
import {Text} from 'base';
import {
  View,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Platform,
} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {colors, commonStyles, sizes} from 'styles';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {checkVar} from 'src/helpers/funcs';

const HeaderSearchComponent = ({
  onPress,
  textValue,
  onChangeTextValue,
  onPressClearText,
}) => {
  const [textSearch, setTextSearch] = useState(textValue);
  return (
    <View style={styles.container}>
      <View style={styles.wrapInput}>
        <MaterialIcons
          name="search"
          size={sizes.SIZE_22}
          color={colors.COLOR_GREEN}
        />
        <TextInput
          value={textSearch}
          onChangeText={text => {
            onChangeTextValue(text);
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
          <TouchableOpacity
            onPress={() => setTextSearch('')}
            activeOpacity={0.8}>
            <MaterialCommunityIcons
              name="close-circle"
              size={sizes.SIZE_16}
              color={colors.COLOR_PLACEHOLDER}
            />
          </TouchableOpacity>
        )}
      </View>
      <TouchableOpacity
        style={styles.btn}
        activeOpacity={0.8}
        onPress={onPress}>
        <MaterialCommunityIcons
          name="plus-circle"
          color={colors.COLOR_GREEN}
          size={sizes.SIZE_20}
        />
        <Text style={styles.labelBtn}>Nhập viện</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.COLOR_GREEN,
    ...commonStyles.flexRowCenter,
    height: sizes.SIZE_50,
    justifyContent: 'space-between',
    paddingHorizontal: sizes.SIZE_10,
  },
  wrapInput: {
    width: wp('68%'),
    backgroundColor: colors.COLOR_WHITE,
    height: sizes.SIZE_32,
    ...commonStyles.flexRowCenter,
    paddingHorizontal: sizes.SIZE_5,
  },
  input: {
    ...commonStyles.flex1,
    height: sizes.SIZE_32,
    ...Platform.select({
      android: {
        height: sizes.SIZE_40,
      },
    }),
  },
  btn: {
    backgroundColor: colors.COLOR_WHITE,
    width: wp('25%'),
    ...commonStyles.flexRowCenter,
    height: sizes.SIZE_32,
    ...commonStyles.center,
  },
  labelBtn: {
    marginLeft: sizes.SIZE_5,
    fontSize: sizes.SIZE_12,
  },
});

export default HeaderSearchComponent;
