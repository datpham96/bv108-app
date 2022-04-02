import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import navigationTypes from '../types';
import BottomTabs from '../BottomTabs';
import {
  ChangePasswordScreen,
  LoginScreen,
  MedicalRecordDetailScreen,
  SearchResultScreen,
  UserInfoScreen,
  UserManualScreen,
} from 'features';

const RootNavStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  animationEnabled: Platform.OS === 'android' ? false : true,
};

const RootStack = () => {
  return (
    <RootNavStack.Navigator>
      <RootNavStack.Screen
        name={navigationTypes.login.screen}
        component={LoginScreen}
        options={screenOptions}
      />
      <RootNavStack.Screen
        name={navigationTypes.bottomTabs.screen}
        component={BottomTabs}
        options={screenOptions}
      />
      <RootNavStack.Screen
        name={navigationTypes.userInfo.screen}
        component={UserInfoScreen}
        options={screenOptions}
      />
      <RootNavStack.Screen
        name={navigationTypes.changePassword.screen}
        component={ChangePasswordScreen}
        options={screenOptions}
      />
      <RootNavStack.Screen
        name={navigationTypes.medicalRecordDetail.screen}
        component={MedicalRecordDetailScreen}
        options={screenOptions}
      />
      <RootNavStack.Screen
        name={navigationTypes.searchResult.screen}
        component={SearchResultScreen}
        options={screenOptions}
      />

      <RootNavStack.Screen
        name={navigationTypes.userManual.screen}
        component={UserManualScreen}
        options={screenOptions}
      />
    </RootNavStack.Navigator>
  );
};

export default RootStack;
