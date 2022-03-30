import React from 'react';
import {
  Background,
  Input,
  Button,
  Checkbox,
  ButtonItem,
  InputInfoForm,
} from 'base';
import {SafeAreaView, View, Text} from 'react-native';
import {
  BoxFilter,
  InputDateTime,
  ModalFormOnlyTime,
  PopupConfirm,
} from 'components';
import ButtonForm from 'src/base/ButtonForm';

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
        <InputInfoForm placeholder="Nhập kết quả" />
        <ModalFormOnlyTime
          onChangeDate={date => console.log(date)}
          onChangeTime={time => console.log(time)}
          formName="Khởi phát"
          visible={isCheckbox}
          onPressCancel={() => {
            setIsCheckbox(false);
            console.log(12424);
          }}
        />
      </View>
    </Background>
  );
};

export default Follow;
