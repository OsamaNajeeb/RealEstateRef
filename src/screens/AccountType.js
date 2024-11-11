import {View, Text, StatusBar} from 'react-native';
import React from 'react';

export default function AccountType() {
  return (
    <View style={{padding: 15}}>
      <View style={{marginTop: 35}}>
        <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
          Job Finder
        </Text>
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{
            color: 'black',
            fontSize: 18,
            fontFamily: 'Poppins-ExtraBold',
          }}>
          Please select your profession down below:
        </Text>
      </View>
      <View style={{marginHorizontal: 10, flex: 0.5, flexDirection: 'row'}}>
        <View
          style={{
            backgroundColor: '#242424',
            width: 150,
            height: 150,
            borderRadius: 20,
          }}>
          <View></View>
        </View>
      </View>
    </View>
  );
}
