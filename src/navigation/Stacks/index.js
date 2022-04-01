import React from 'react';
import {Platform} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import navigationTypes from '../types';
import BottomTabs from '../BottomTabs';
import {LoginScreen, SearchResultScreen} from 'features';

const RootNavStack = createStackNavigator();

const screenOptions = {
  headerShown: false,
  animationEnabled: Platform.OS === 'android' ? false : true,
};

const RootStack = () => {
  return (
    <RootNavStack.Navigator>
      <RootNavStack.Screen
        name={navigationTypes.searchResult.screen}
        component={SearchResultScreen}
        options={screenOptions}
      />
      {/* <RootNavStack.Screen
        name={navigationTypes.login.screen}
        component={LoginScreen}
        options={screenOptions}
      /> */}
      <RootNavStack.Screen
        name={navigationTypes.bottomTabs.screen}
        component={BottomTabs}
        options={screenOptions}
      />
    </RootNavStack.Navigator>
  );
};

export default RootStack;
