import React, {useEffect} from 'react';
import {View, Image} from 'react-native';
import CustomHomeIcon from '../assets/svg/customhome';

export default function SplashScreen({navigation}) {
  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('acctype');
    }, 2000);
    return () => clearTimeout(timer); // Cleanup the timer on component unmount
  }, [navigation]);

  return (
    <View style={{flex: 1, backgroundColor: '#242424'}}>
      {/* Centered Image */}
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Image
          source={require('../assets/png/splashlogo.png')}
          style={{width: 200, height: 200, resizeMode: 'contain'}}
        />
      </View>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          right: 0,
        }}>
        <CustomHomeIcon />
      </View>
    </View>
  );
}
