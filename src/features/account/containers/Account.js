import {Background, Button} from 'base';
import images from 'images';
import {ScrollView} from 'native-base';
import React from 'react';
import {Image, View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import styles from './styles';
import * as RootNavigation from 'RootNavigation';
import navigationTypes from 'navigationTypes';

const Account = () => {
  const handleChangePassword = () => {
    RootNavigation.navigate(navigationTypes.changePassword.screen);
  };
  const handleEdit = () => {
    RootNavigation.navigate(navigationTypes.userInfo.screen);
  };
  const handleUserManual = () => {
    RootNavigation.navigate(navigationTypes.userManual.screen);
  };
  return (
    <Background>
      <ScrollView style={styles.container}>
        <View style={styles.sectionInfo}>
          <Image style={styles.avatar} source={images.avatars.default} />
          <View style={styles.wrapTextInfo}>
            <Text style={styles.name}>Bác sĩ Nguyễn Văn A</Text>
            <Text style={styles.dep}>Bệnh viện 108</Text>
            <Text style={styles.phone}>0987654321</Text>
            <Text style={styles.email}>basi@gmail.com</Text>
            <TouchableOpacity
              style={styles.btnEdit}
              activeOpacity={0.8}
              onPress={handleEdit}>
              <Text style={styles.labelBtnEdit}>Chỉnh sửa</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.wrapActionBtn}>
          <Button
            onPress={handleUserManual}
            customLabelStyle={styles.labelBtnAction}
            customStyle={styles.btnAction}
            label="Hướng dẫn sử dụng"
          />
          <Button
            onPress={handleChangePassword}
            customLabelStyle={styles.labelBtnAction}
            customStyle={styles.btnAction}
            label="Đổi mật khẩu"
          />
          <Button
            customLabelStyle={styles.labelBtnAction}
            customStyle={styles.btnAction}
            label="Đăng xuất"
          />
        </View>
      </ScrollView>
    </Background>
  );
};

export default Account;
