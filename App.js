import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SplashScreen from './src/screens/SplashScreen';
import AccountType from './src/screens/AccountType';
import TestScreen from './src/screens/TestScreen';
import WestScreen from './src/screens/WestScreen';
import OnBoardingScreenRE from './src/screens/OnBoardingScreenRE';
import LoginScreenRE from './src/screens/LoginScreenRE';
import SignInScreenRE from './src/screens/SignInScreenRE';
import LoicisneScreen from './src/screens/LoicisneScreen';
import CountryScreen from './src/screens/CountryScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);

  useEffect(() => {
    const checkOnboarding = async () => {
      try {
        const value = await AsyncStorage.getItem('hasOnboarded');
        if (value === null) {
          setIsFirstLaunch(true);
          await AsyncStorage.setItem('hasOnboarded', 'true');
        } else {
          setIsFirstLaunch(false);
        }
      } catch (error) {
        console.error('Error checking onboarding status:', error);
      }
    };

    checkOnboarding();
  }, []);

  // if (isFirstLaunch === null) {
  //   return null;
  // }

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={'cunty'} component={CountryScreen} />
        <Stack.Screen name={'splash'} component={SplashScreen} />
        <Stack.Screen
          name={'acctype'}
          component={AccountType}
          initialParams={{isFirstLaunch}}
        />
        {isFirstLaunch && (
          <Stack.Screen
            name={'onBSRealEstate'}
            component={OnBoardingScreenRE}
          />
        )}
        <Stack.Screen name={'logInRE'} component={LoginScreenRE} />
        <Stack.Screen name={'signInSE'} component={SignInScreenRE} />
        <Stack.Screen name={'oilad'} component={LoicisneScreen} />
        <Stack.Screen name={'test'} component={TestScreen} />
        <Stack.Screen name={'west'} component={WestScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
