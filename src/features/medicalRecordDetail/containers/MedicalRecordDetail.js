import React, {useState} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import {colors, sizes} from 'styles';
import {Background, ButtonItem, Text} from 'base';
import styles from './styles';
import {
  ModalFormAssign,
  ModalFormClinical,
  ModalFormDiagnostic,
  ModalFormDischarge,
  ModalFormHospitalTransfer,
  ModalFormList,
  ModalFormOnlyTime,
  ModalFormSubClinical,
  StackHeader,
  TimeLine,
} from 'components';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import configTypes from 'types';

const FORM_CODE = {};
configTypes.formList.map(item => {
  FORM_CODE[item.code] = item;
});

const MedicalRecordDetail = () => {
  //modal form chi co time
  const [visibleFormOnlyTimeModal, setVisibleFormOnlyTimeModal] =
    useState(false);
  //modal danh sach click form
  const [visibleFormListModal, setVisibleFormListModal] = useState(false);
  //modal form ra vien
  const [visibleFormDischargeModal, setVisibleFormDischargeModal] =
    useState(false);
  //modal form chan doan hinh anh
  const [visibleFormDiagnosticModal, setVisibleFormDiagnosticModal] =
    useState(false);
  //modal form chuyen vien
  const [
    visibleFormHospitalizeTransferModal,
    setVisibleFormHospitalizeTransferModal,
  ] = useState(false);
  //modal form lam sang
  const [visibleFormClinicalModal, setVisibleFormClinicalModal] =
    useState(false);
  //modal form can lam sang
  const [visibleFormSubClinicalModal, setVisibleFormSubClinicalModal] =
    useState(false);
  //modal form chi dinh
  const [visibleFormAssignModal, setVisibleFormAssignModal] = useState(false);
  const [labelFormOnlyTime, setLabelFormOnlyTime] = useState('');

  //value form lam sang
  const [lietNuaNguoi, setLietNuaNguoi] = useState(false);
  const [lietMat, setLietMat] = useState(false);
  const [thatNgon, setThatNgon] = useState(false);

  const handleRedirectSupport = () => {};
  const handlePlus = () => {
    setVisibleFormListModal(true);
  };
  const handleDischarge = () => {
    setVisibleFormDischargeModal(true);
  };
  const handleClickForm = code => {
    switch (code) {
      case 'KhoiPhat':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'NhapVien':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'TaiThongMachMau':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'HoiChan':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'HetTheoDoi':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'TieuSoiHuyet':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'LayHuyetKhoiBangDungCuCoHoc':
        setLabelFormOnlyTime(FORM_CODE[code].name);
        setVisibleFormOnlyTimeModal(true);
        break;
      case 'ChanDoanHinhAnh':
        setVisibleFormDiagnosticModal(true);
        break;
      case 'LamSang':
        setVisibleFormClinicalModal(true);
        break;
      case 'CanLamSang':
        setVisibleFormSubClinicalModal(true);
        break;
      case 'ChuyenVien':
        setVisibleFormHospitalizeTransferModal(true);
        break;
      case 'ChiDinh':
        setVisibleFormAssignModal(true);
        break;
    }
  };
  return (
    <Background>
      <ModalFormClinical
        LietMatValue={lietMat}
        LietNuaNguoiValue={lietNuaNguoi}
        ThatNgonValue={thatNgon}
        onChangeLietMatValue={() => setLietMat(!lietMat)}
        onChangeThatNgonValue={() => setThatNgon(!thatNgon)}
        onChangeLietNuaNguoiValue={() => setLietNuaNguoi(!lietNuaNguoi)}
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        formName="Lâm sàng"
        visible={visibleFormClinicalModal}
        onPressCancel={() => setVisibleFormClinicalModal(false)}
        onPress={() => setVisibleFormClinicalModal(false)}
      />
      <ModalFormSubClinical
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        formName="Cận lâm sàng"
        visible={visibleFormSubClinicalModal}
        onPressCancel={() => setVisibleFormSubClinicalModal(false)}
        onPress={() => setVisibleFormSubClinicalModal(false)}
      />
      <ModalFormHospitalTransfer
        onChangeHostpitalTransfer={code => console.log(code)}
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        formName="Chuyển viện"
        visible={visibleFormHospitalizeTransferModal}
        onPressCancel={() => setVisibleFormHospitalizeTransferModal(false)}
        onPress={() => setVisibleFormHospitalizeTransferModal(false)}
      />
      <ModalFormAssign
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        onChangeAssign={code => console.log(code)}
        formName="Chỉ định"
        visible={visibleFormAssignModal}
        onPressCancel={() => setVisibleFormAssignModal(false)}
        onPress={() => setVisibleFormAssignModal(false)}
      />
      <ModalFormDiagnostic
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        formName="Chẩn đoán hình ảnh"
        visible={visibleFormDiagnosticModal}
        onPress={() => setVisibleFormDiagnosticModal(false)}
        onPressCancel={() => setVisibleFormDiagnosticModal(false)}
      />
      <ModalFormOnlyTime
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        onPress={() => setVisibleFormOnlyTimeModal(false)}
        formName={labelFormOnlyTime}
        visible={visibleFormOnlyTimeModal}
        onPressCancel={() => setVisibleFormOnlyTimeModal(false)}
      />
      <ModalFormDischarge
        onChangeDate={() => console.log(11)}
        onChangeTime={() => console.log(11)}
        formName="Ra viện"
        visible={visibleFormDischargeModal}
        onPress={() => setVisibleFormDischargeModal(false)}
        onPressCancel={() => setVisibleFormDischargeModal(false)}
      />
      <ModalFormList
        formList={configTypes.formList}
        visible={visibleFormListModal}
        onPress={code => handleClickForm(code)}
        onPressCancel={() => setVisibleFormListModal(false)}
      />
      <StackHeader>
        <View style={styles.wrapHeader}>
          <Text
            props={{
              numberOfLines: sizes.SIZE_1,
            }}
            style={styles.nameHeader}>
            Nguyễn Văn A
          </Text>
          <View style={styles.wrapHeaderRight}>
            <ButtonItem
              onPress={handleDischarge}
              customLabelStyle={styles.labelDischargeBtnHeader}
              customStyle={styles.dischargeBtnHeader}
              label="Ra viện"
            />
            <TouchableOpacity
              style={styles.icon}
              activeOpacity={0.8}
              onPress={() => console.log(324)}>
              <MaterialCommunityIcons
                name="information-outline"
                size={sizes.SIZE_23}
                color={colors.COLOR_WHITE}
              />
            </TouchableOpacity>
          </View>
        </View>
      </StackHeader>
      <View style={styles.wrapHeaderDown}>
        <View style={styles.wrapHeaderDownLeft}>
          <View style={styles.wrapTimeHeaderDownLeft}>
            <MaterialCommunityIcons
              name="tag"
              color={colors.COLOR_ORANGE}
              size={sizes.SIZE_18}
            />
            <Text style={styles.textTimeHeaderDownLeft}>4 giờ 30 phút</Text>
          </View>
          <Text>Bệnh viện 103</Text>
        </View>
        <TouchableOpacity
          onPress={handleRedirectSupport}
          activeOpacity={0.8}
          style={styles.wrapHeaderDownRight}>
          <Text style={styles.textSupportHeaderDownRight}>Hỗ trợ</Text>
          <MaterialCommunityIcons
            name="chevron-double-right"
            size={sizes.SIZE_17}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.container}>
        <FlatList
          contentContainerStyle={styles.contentContainerFlatlist}
          data={[1, 2, 3, 4, 5, 6, 7]}
          renderItem={({item}) => <TimeLine />}
        />
      </View>
      <TouchableOpacity
        activeOpacity={0.8}
        style={styles.btnPlus}
        onPress={handlePlus}>
        <MaterialCommunityIcons
          name="plus-circle"
          size={wp('10%')}
          color={colors.COLOR_GREEN}
        />
      </TouchableOpacity>
    </Background>
  );
};

export default MedicalRecordDetail;
