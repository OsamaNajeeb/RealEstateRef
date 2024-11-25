import {View, Text} from 'react-native';
import React from 'react';
import ArrowBackIcon from '../assets/svg/arrowleft';
import TextFieldTwo from '../assets/components/TextFieldTwo';
import EnvelopeIcon from '../assets/svg/envelope';
import DynamicBtn from '../assets/svg/dynamicbtn';

export default function ForgotPassword() {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <View style={{marginTop: 5}}>
        <ArrowBackIcon />
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold'}}>
          Forgot Password
        </Text>
        <Text
          style={{
            color: '#909090',
            fontSize: 13,
            fontFamily: 'Poppins-Bold',
          }}>
          Enter your email address, and we will send an OTP
        </Text>
        <View style={{marginTop: 10}}>
          <TextFieldTwo DynamicIcon={<EnvelopeIcon />} Label={'Enter Email'} />
        </View>
        <View style={{marginTop: 15}}>
          <DynamicBtn label={'Continue'} />
        </View>
        <View style={{paddingHorizontal: 40, marginTop: 15}}>
          <Text
            style={{
              textAlign: 'center',
              color: '#909090',
              fontFamily: 'Poppins-Medium',
            }}>
            Remember Password?{' '}
            <Text
              style={{color: 'blue', fontFamily: 'Poppins-Bold'}}
              onPress={() => navigation.navigate('signInSE')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
