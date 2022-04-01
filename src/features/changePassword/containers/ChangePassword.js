import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {commonStyles} from '../../../config/styles';
import {Background, Button, Input} from 'base';
import styles from './styles';
import {StackHeader} from 'components';
import navigationTypes from 'navigationTypes';

const ChangePassword = () => {
  const [password, setPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [reNewPassword, setReNewPassword] = useState('');
  return (
    <Background isKeyboard>
      <StackHeader>
        <Text style={commonStyles.nameStack}>
          {navigationTypes.changePassword.name}
        </Text>
      </StackHeader>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Mật khẩu</Text>
          <View style={styles.wrapInput}>
            <Input
              value={password}
              onChangeValue={text => setPassword(text)}
              placeholder="Mật khẩu"
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Mật khẩu mới</Text>
          <View style={styles.wrapInput}>
            <Input
              value={newPassword}
              onChangeValue={text => setNewPassword(text)}
              placeholder="Mật khẩu mới"
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Nhập lại mật khẩu mới</Text>
          <View style={styles.wrapInput}>
            <Input
              value={reNewPassword}
              onChangeValue={text => setReNewPassword(text)}
              placeholder="Nhập lại mật khẩu mới"
            />
          </View>
        </View>
        <Button label="Xác nhận" customStyle={styles.btn} />
      </View>
    </Background>
  );
};

export default ChangePassword;
