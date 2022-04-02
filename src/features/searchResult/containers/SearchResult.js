import React, {useState} from 'react';
import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import {Background, ButtonItem} from 'base';
import {
  ModalFormOnlyTime,
  ModalHospitalizeNow,
  Space,
  StackHeader,
} from 'components';
import {colors, commonStyles, sizes} from 'styles';
import styles from './styles';
import {checkVar} from 'src/helpers/funcs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {FlatList} from 'native-base';
import {Item} from '../components';
import * as RootNavigation from 'RootNavigation';
import navigationTypes from 'navigationTypes';

const SearchResult = () => {
  const [textSearch, setTextSearch] = useState('');
  const [visibleHospitalizeModal, setVisibleHospitalizeModal] = useState(false);
  const [visibleAddPatientModal, setVisibleAddPatientModal] = useState(false);

  const handleDetailItem = item => {};
  const handleHospitalize = () => {
    setVisibleHospitalizeModal(true);
  };
  const handleViewConsulation = () => {
    RootNavigation.navigate(navigationTypes.medicalRecordDetail.screen);
  };
  const handleAddPatient = () => {
    setVisibleAddPatientModal(true);
  };
  return (
    <Background>
      <ModalHospitalizeNow
        onPress={() => setVisibleAddPatientModal(false)}
        visible={visibleAddPatientModal}
        onPressCancel={() => setVisibleAddPatientModal(false)}
      />
      <ModalFormOnlyTime
        formName="Nhập viện"
        visible={visibleHospitalizeModal}
        onPress={() => setVisibleHospitalizeModal(false)}
        onPressCancel={() => setVisibleHospitalizeModal(false)}
      />
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
            onPress={handleAddPatient}
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
              onPressItem={() => handleDetailItem(item)}
              onPressHospitalize={handleHospitalize}
              onPressViewConsulation={handleViewConsulation}
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
