import React from 'react';
import {Background, Input, Button, Checkbox, ButtonItem} from 'base';
import {SafeAreaView, View, Text} from 'react-native';
import {
  BoxFilter,
  InputDateTime,
  ModalFormOnlyTime,
  PopupConfirm,
  InputForm,
  InputSelect,
  ModalFormAssign,
  ModalFormHospitalTransfer,
  ModalFormDischarge,
  ModalFormClinical,
  ModalFormSubClinical,
  ModalFormDiagnostic,
  ModalFormList,
  ModalFilter,
} from 'components';
import ButtonForm from 'src/base/ButtonForm';
import configTypes from 'types';

const FORM_LIST = configTypes.formList;

const Follow = () => {
  const [isCheckbox, setIsCheckbox] = React.useState(false);
  return (
    <Background>
      <View>
        <Text>Follow</Text>
        <Input placeholder="d23523" />
        <Button label="Đăng nhập" />
        <BoxFilter label="Đang theo dõi" />
        <ButtonForm label="Đang theo dõi" />
        <Checkbox
          label="Chưa rõ năm sinh"
          isActive={isCheckbox}
          onPress={() => setIsCheckbox(!isCheckbox)}
        />
        <ButtonItem label="Đồng ý" />
        {/* <PopupConfirm
          content="Bạn có chắc chắn gộp bệnh nhân"
          onPressCancel={() => setIsCheckbox(false)}
          visible={isCheckbox}
        /> */}
        <InputDateTime
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
        />
        <InputForm placeholder="Nhập kết quả" />
        <InputSelect
          onDonePress={() => console.log(343)}
          selectedValue={1}
          placeholder="Chọn"
          listData={[
            {
              label: 'Nam',
              value: 1,
            },
            {
              label: 'Nữ',
              value: 2,
            },
          ]}
        />
        {/* <ModalFormAssign
          onChangeAssign={item => console.log(item)}
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
          formName="Chỉ định"
          visible={isCheckbox}
          onPressCancel={() => {
            setIsCheckbox(false);
            console.log(12424);
          }}
        /> */}
        {/* <ModalFormDischarge
          onChangeAssign={item => console.log(item)}
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
          formName="Chuyển viện"
          visible={isCheckbox}
          onPressCancel={() => {
            setIsCheckbox(false);
            console.log(12424);
          }}
        /> */}
        {/* <ModalFormClinical
          onChangeAssign={item => console.log(item)}
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
          formName="Lâm sàng"
          visible={isCheckbox}
          onPressCancel={() => {
            setIsCheckbox(false);
            console.log(12424);
          }}
        /> */}
        {/* <ModalFormSubClinical
          onChangeAssign={item => console.log(item)}
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
          formName="Cận lâm sàng"
          visible={isCheckbox}
          onPressCancel={() => {
            setIsCheckbox(false);
            console.log(12424);
          }}
        /> */}
        {/* <ModalFormDiagnostic
          onChangeAssign={item => console.log(item)}
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
          formName="Chuẩn đoán hình ảnh"
          visible={isCheckbox}
          onPressCancel={() => {
            setIsCheckbox(false);
            console.log(12424);
          }}
        /> */}
        {/* <ModalFormList
          onPressCancel={() => setIsCheckbox(false)}
          visible={isCheckbox}
          formList={FORM_LIST}
          onPress={code => console.log(code)}
        /> */}
        <ModalFilter
          onPressApply={() => console.log(1111)}
          onPressRefresh={() => console.log(222)}
          onPressCancel={() => setIsCheckbox(false)}
          visible={isCheckbox}
        />
      </View>
    </Background>
  );
};

export default Follow;
