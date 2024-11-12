import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountType from './src/screens/AccountType';
import TestScreen from './src/screens/TestScreen';
import WestScreen from './src/screens/WestScreen';

const stuck = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <stuck.Navigator screenOptions={{headerShown: false}}>
          <stuck.Screen name={'splash'} component={SplashScreen} />
          <stuck.Screen name={'acctype'} component={AccountType} />
          <stuck.Screen name={'test'} component={TestScreen} />
          <stuck.Screen name={'west'} component={WestScreen} />
        </stuck.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
