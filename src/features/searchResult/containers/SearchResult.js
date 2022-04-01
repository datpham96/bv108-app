import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Background, ButtonItem} from 'base';
import {Space, StackHeader} from 'components';
import {colors, commonStyles, sizes} from 'styles';
import styles from './styles';
import {checkVar} from 'src/helpers/funcs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'native-base';
import {Item} from '../components';

const SearchResult = () => {
  const [textSearch, setTextSearch] = useState('');
  return (
    <Background>
      <StackHeader>
        <View style={styles.wrapInputSearch}>
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
            <TouchableOpacity
              onPress={() => setTextSearch('')}
              activeOpacity={0.8}>
              <MaterialCommunityIcons
                name="close-circle"
                size={sizes.SIZE_19}
                color={colors.COLOR_PLACEHOLDER}
              />
            </TouchableOpacity>
          )}
        </View>
      </StackHeader>
      <View style={styles.container}>
        <View style={styles.infoResult}>
          <Text style={styles.textInfoResult}>Kết quả (2)</Text>
        </View>
        <Space />
        <View style={styles.wrapBtnAdd}>
          <ButtonItem
            customStyle={styles.btnAdd}
            customLabelStyle={styles.labelBtnAdd}
            label="Thêm"
          />
        </View>
        <Space />
        <FlatList
          style={commonStyles.flex1}
          contentContainerStyle={styles.contentContainerFlatlist}
          data={[1, 2, 3, 4, 5, 6, 7, 8, 9]}
          renderItem={item => (
            <Item
              item={item.item}
              index={item.index}
              totalLength={[1, 2, 3, 4, 5, 6, 7, 8, 9].length}
            />
          )}
        />
      </View>
    </Background>
  );
};

export default SearchResult;
