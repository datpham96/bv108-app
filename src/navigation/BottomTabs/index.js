import React from 'react';
import {Text, View} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AccountScreen,
  ConsultationScreen,
  FollowScreen,
  LibraryScreen,
} from 'features';
import navigationTypes from '../types';
import {sizes, commonStyles, colors} from 'styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator();

const CustomeTabBarIcon = ({focused, label, iconName}) => {
  return (
    <View style={commonStyles.center}>
      <MaterialCommunityIcons
        name={iconName}
        color={focused ? colors.COLOR_GREEN : colors.inactiveIconBottomTab}
        size={sizes.SIZE_22}
      />
      <Text
        style={{
          color: focused ? colors.COLOR_GREEN : colors.inactiveIconBottomTab,
          fontSize: sizes.SIZE_10,
        }}>
        {label}
      </Text>
    </View>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      shifting={false}
      sceneAnimationEnabled={true}
      initialRouteName={navigationTypes.home.screen}>
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <CustomeTabBarIcon
              focused={focused}
              label={navigationTypes.follow.name}
              iconName="plus"
            />
          ),
        }}
        name={navigationTypes.follow.screen}
        component={FollowScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <CustomeTabBarIcon
              focused={focused}
              label={navigationTypes.consultation.name}
              iconName="message-outline"
            />
          ),
        }}
        name={navigationTypes.consultation.screen}
        component={ConsultationScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <CustomeTabBarIcon
              focused={focused}
              label={navigationTypes.library.name}
              iconName="library"
            />
          ),
        }}
        name={navigationTypes.library.screen}
        component={LibraryScreen}
      />
      <Tab.Screen
        options={{
          headerShown: false,
          tabBarLabel: () => null,
          tabBarIcon: ({focused}) => (
            <CustomeTabBarIcon
              focused={focused}
              label={navigationTypes.account.name}
              iconName="account"
            />
          ),
        }}
        name={navigationTypes.account.screen}
        component={AccountScreen}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
