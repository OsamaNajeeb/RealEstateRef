import {View, Text, Image, StyleSheet, Linking} from 'react-native';
import React from 'react';
import DynamicBtn from '../assets/svg/dynamicbtn';

export default function Subscription() {
  return (
    <View style={{padding: 15, flex: 1, backgroundColor: 'white'}}>
      {/* Skip Text */}
      <View style={{marginTop: 8, alignSelf: 'flex-end'}}>
        <Text
          style={{
            textAlign: 'right',
            fontFamily: 'Poppins-SemiBold',
            fontSize: 16,
            marginRight: 10,
          }}
          onPress={() =>
            Linking.openURL(
              'https://www.youtube.com/watch?v=4wO6cYMYblo&list=PLeIJUF3PiXDfBaEA10imClVSzH-WzXFXt&index=3',
            )
          }>
          Skip
        </Text>
      </View>

      {/* Centered Content */}
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          paddingBottom: 50,
        }}>
        <Image
          source={require('../assets/png/subscribe.png')}
          style={{
            height: '40%',
            width: '100%',
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
        />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            marginTop: 20,
          }}>
          Elevate your{' '}
          <Text style={{fontFamily: 'Poppins-Bold'}}>
            Out of Town Referrals
          </Text>{' '}
          journey by upgrading to a premium account.
        </Text>
        <View style={{justifyContent: 'center', marginTop: 20, width: '100%'}}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              borderRadius: 10,
              padding: 5,
              backgroundColor: '#EFEFEF',
              height: 40,
            }}>
            <Text style={{marginLeft: 8, fontFamily: 'Poppins-Medium'}}>
              Priority upgrade fee:{' '}
            </Text>
            <Text
              style={{
                textAlign: 'right',
                marginLeft: 'auto',
                marginRight: 8,
                fontFamily: 'Poppins-Bold',
              }}>
              $12/year
            </Text>
          </View>
        </View>
      </View>

      {/* Subscribe Button */}
      <View style={{flex: 0.2, justifyContent: 'flex-end', marginBottom: 20}}>
        <DynamicBtn
          onPress={() => navigation.navigate('subscroble')}
          label={'Subscribe Now'}
        />
      </View>
    </View>
  );
}
