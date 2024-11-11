import {View, Text, Image} from 'react-native';
import React from 'react';

export default function SplashScreen({navigation}) {
  setTimeout(() => {
    navigation.replace('acctype');
  }, 2000);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#242424',
        justifyContent: 'center', // Vertically center
        alignItems: 'center', // Horizontally center
      }}>
      <Image
        source={require('../assets/png/splashlogo.png')} // Use require for image paths
        style={{width: 200, height: 200, resizeMode: 'contain'}}
      />
    </View>
  );
}
