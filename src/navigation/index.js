import React, {useEffect} from 'react';
import {StyleSheet} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import RootStack from './Stacks';
import {navigationRef, isReadyRef} from './RootNavigation';
import SplashScreen from 'react-native-splash-screen';

function Navigation() {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <NavigationContainer
      onReady={() => {
        isReadyRef.current = true;
      }}
      ref={navigationRef}>
      <RootStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default Navigation;
