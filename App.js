import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './src/screens/SplashScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AccountType from './src/screens/AccountType';

const stuck = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <stuck.Navigator>
          <stuck.Screen
            name={'splash'}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          <stuck.Screen
            name={'acctype'}
            component={AccountType}
            options={{headerShown: false}}
          />
        </stuck.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
