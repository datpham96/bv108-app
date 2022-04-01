import React, {useState} from 'react';
import {Background} from 'base';
import {View, FlatList, Text, TouchableOpacity} from 'react-native';
import {
  HeaderSearch,
  ModalFilter,
  ModalHospitalizeNow,
  Space,
} from 'components';
import {Item} from '../components';
import patientList from '../../../data/patientList.json';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {colors, sizes} from 'styles';

const DATA_LIST = patientList;

const Follow = () => {
  const [visibleFilterModal, setVisibleFilterModal] = useState(false);
  const [visibleHospitalizeModal, setVisibleHospitalizeModal] = useState(false);
  const handleFilter = () => {
    setVisibleFilterModal(true);
  };
  const handleHospitalize = () => {
    setVisibleHospitalizeModal(true);
  };
  return (
    <Background>
      <HeaderSearch
        onChangeTextValue={text => console.log(text)}
        onPress={handleHospitalize}
      />
      <View style={styles.wrapTitle}>
        <Text style={styles.title}>Danh sách bệnh nhân đang theo dõi</Text>
        <TouchableOpacity
          style={styles.wrapIconFilter}
          activeOpacity={0.8}
          onPress={handleFilter}>
          <MaterialCommunityIcons
            name="filter-outline"
            size={sizes.SIZE_22}
            color={colors.COLOR_GREEN}
          />
          <Text style={styles.textFilter}>Lọc</Text>
        </TouchableOpacity>
      </View>
      <Space />
      <FlatList
        data={DATA_LIST}
        contentContainerStyle={styles.contentContainerFlatlist}
        keyExtractor={item => item._id}
        renderItem={item => (
          <Item
            item={item.item}
            totalLength={DATA_LIST.length}
            index={item.index}
          />
        )}
      />
      <ModalFilter
        visible={visibleFilterModal}
        onPressApply={() => setVisibleFilterModal(false)}
        onPressCancel={() => setVisibleFilterModal(false)}
      />
      <ModalHospitalizeNow
        onPressCancel={() => setVisibleHospitalizeModal(false)}
        onPress={() => setVisibleHospitalizeModal(false)}
        visible={visibleHospitalizeModal}
      />
    </Background>
  );
};

export default Follow;
