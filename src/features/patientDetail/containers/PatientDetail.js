import React, {useState} from 'react';
import {TouchableOpacity, View, Text, FlatList} from 'react-native';
import {Background, InputInfo, Line} from 'base';
import styles from './styles';
import {ModalMergePatient, StackHeader} from 'components';
import {colors, commonStyles, sizes} from 'styles';
import navigationTypes from 'navigationTypes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Item} from '../components';

const PatientDetail = () => {
  const [visibleMergeModal, setVisibleMergeModal] = useState(false);
  const handleMerge = () => {
    console.log(23423);
    setVisibleMergeModal(true);
  };
  return (
    <Background>
      <ModalMergePatient
        visible={visibleMergeModal}
        onPressCancel={() => setVisibleMergeModal(false)}
      />
      <StackHeader>
        <View style={styles.wrapheader}>
          <Text style={commonStyles.nameStack}>
            {navigationTypes.patientDetail.name}
          </Text>
          <TouchableOpacity
            onPress={handleMerge}
            activeOpacity={0.8}
            style={styles.wrapHeaderRight}>
            <MaterialCommunityIcons
              name="table-merge-cells"
              color={colors.COLOR_WHITE}
              size={sizes.SIZE_22}
            />
            <Text style={styles.textMerge}>Gộp</Text>
          </TouchableOpacity>
        </View>
      </StackHeader>
      <View style={styles.container}>
        <FlatList
          ListHeaderComponent={
            <>
              <View style={styles.wrapInfo}>
                <Text style={styles.labelInfo}>Thông tin chung</Text>
                <Line customStyle={styles.lineInfo} />
                <View style={styles.wrapContentInfo}>
                  <View style={styles.wrapTextInfo}>
                    <Text style={styles.lableTextInfo}>Họ tên:</Text>
                    <Text style={styles.valueTextInfo}>Nguyễn Văn A</Text>
                  </View>
                  <View style={styles.wrapTextInfo}>
                    <Text style={styles.lableTextInfo}>Giới tính:</Text>
                    <Text style={styles.valueTextInfo}>Nam</Text>
                  </View>
                  <View style={styles.wrapTextInfo}>
                    <Text style={styles.lableTextInfo}>Năm sinh:</Text>
                    <Text style={styles.valueTextInfo}>1999</Text>
                  </View>
                  <View style={styles.wrapTextInfo}>
                    <Text style={styles.lableTextInfo}>Mã bệnh nhân:</Text>
                    <Text style={styles.valueTextInfo}>23423</Text>
                  </View>
                </View>
              </View>
              <View style={styles.headerList}>
                <Text style={styles.labelList}>Danh sách khám bệnh</Text>
                <Line customStyle={styles.lineList} />
              </View>
            </>
          }
          style={styles.containerFlatlist}
          contentContainerStyle={styles.contentContainerFlatlist}
          data={[1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7]}
          renderItem={item => (
            <Item
              item={item.item}
              index={item.index}
              totalLength={[1, 2, 4, 5, 6, 7, 1, 2, 4, 5, 6, 7].length}
            />
          )}
        />
      </View>
    </Background>
  );
};

export default PatientDetail;
