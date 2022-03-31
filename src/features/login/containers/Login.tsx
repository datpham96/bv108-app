import React from 'react';
import {View, Text, ScrollView} from 'react-native';
import {Background, Button, Input} from 'base';

import styles from './styles';
import FastImage from 'react-native-fast-image';
import images from 'images';

const Login: React.FC = () => {
  return (
    <Background isKeyboard>
      <ScrollView style={styles.container}>
        <View style={styles.wrapLogo}>
          <FastImage style={styles.logo} source={images.logos.default} />
        </View>
        <View style={styles.wrapInputContent}>
          <Input
            containerInput={styles.containerInput}
            placeholder="Tài khoản"
          />
          <Input
            containerInput={styles.containerInput}
            placeholder="Mật khẩu"
          />
          <Button customStyle={styles.btnLogin} label="Đăng nhập" />
        </View>
        <View style={styles.wrapVersion}>
          <Text>Phiên bản 1.0</Text>
        </View>
      </ScrollView>
    </Background>
  );
};

export default Login;
