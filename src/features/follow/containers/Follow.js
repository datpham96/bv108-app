import React from 'react';
import {
  Background,
  InputInfo,
  ButtonInfo,
  Checkbox,
  ButtonItem,
  InputInfoForm,
} from 'base';
import {SafeAreaView, View, Text} from 'react-native';
import {BoxFilter, InputDateTime, PopupConfirm} from 'components';
import ButtonForm from 'src/base/ButtonForm';

const Follow = () => {
  const [isCheckbox, setIsCheckbox] = React.useState(false);
  return (
    <Background>
      <View>
        <Text>Follow</Text>
        <InputInfo placeholder="d23523" />
        <ButtonInfo label="Đăng nhập" />
        <BoxFilter label="Đang theo dõi" />
        <ButtonForm label="Đang theo dõi" />
        <Checkbox
          label="Chưa rõ năm sinh"
          isActive={isCheckbox}
          onPress={() => setIsCheckbox(!isCheckbox)}
        />
        <ButtonItem label="Đồng ý" />
        <PopupConfirm
          content="Bạn có chắc chắn gộp bệnh nhân"
          onPressCancel={() => setIsCheckbox(false)}
          visible={isCheckbox}
        />
        <InputDateTime />
        <InputInfoForm placeholder="Nhập kết quả" />
      </View>
    </Background>
  );
};

export default Follow;
