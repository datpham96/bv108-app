import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import {commonStyles, sizes} from '../../../config/styles';
import {Background, InputInfo} from 'base';
import {StackHeader} from 'components';
import navigationTypes from 'navigationTypes';

const UserManual = () => {
  return (
    <Background>
      <StackHeader>
        <Text style={commonStyles.nameStack}>
          {navigationTypes.userManual.name}
        </Text>
      </StackHeader>
      <View style={[commonStyles.flex1, commonStyles.center]}>
        <Text style={{}}>Hướng dẫn sử dụng</Text>
      </View>
    </Background>
  );
};

export default UserManual;
