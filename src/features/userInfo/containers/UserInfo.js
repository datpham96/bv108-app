import React, {useState} from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {commonStyles, sizes} from '../../../config/styles';
import {Background, Button, Input, InputInfo} from 'base';
import styles from './styles';
import {StackHeader} from 'components';
import navigationTypes from 'navigationTypes';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [dep, setDep] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  return (
    <Background isKeyboard>
      <StackHeader>
        <Text style={commonStyles.nameStack}>
          {navigationTypes.userInfo.name}
        </Text>
      </StackHeader>
      <View style={styles.container}>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Họ tên</Text>
          <View style={styles.wrapInput}>
            <Input
              value={name}
              onChangeValue={text => setName(text)}
              placeholder="Họ tên"
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Đơn vị</Text>
          <View style={styles.wrapInput}>
            <Input
              value={dep}
              onChangeValue={text => setDep(text)}
              placeholder="Đơn vị"
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Số điện thoại</Text>
          <View style={styles.wrapInput}>
            <Input
              value={phone}
              onChangeValue={text => setPhone(text)}
              placeholder="Số điện thoại"
            />
          </View>
        </View>
        <View style={styles.containerInput}>
          <Text style={styles.labelInput}>Email</Text>
          <View style={styles.wrapInput}>
            <Input
              value={email}
              onChangeValue={text => setEmail(text)}
              placeholder="Email"
            />
          </View>
        </View>
        <Button label="Cập nhật" customStyle={styles.btn} />
      </View>
    </Background>
  );
};

export default UserInfo;
