import {View, Text} from 'react-native';
import React from 'react';
import ArrowBackIcon from '../assets/svg/arrowleft';
import TextFieldTwo from '../assets/components/TextFieldTwo';
import EnvelopeIcon from '../assets/svg/envelope';
import DynamicBtn from '../assets/svg/dynamicbtn';
import OTPTextField from '../assets/components/OTPTextField';

export default function OTPScreen() {
  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <View style={{marginTop: 5}}>
        <ArrowBackIcon />
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold'}}>
          Enter OTP
        </Text>
        <Text
          style={{
            color: '#909090',
            fontSize: 13,
            fontFamily: 'Poppins-Regular',
          }}>
          We’ve sent an OTP code to your email.{'\n'}
          <Text style={{fontFamily: 'Poppins-Bold'}}>Hana@gmail.com</Text>
        </Text>
        <View style={{marginTop: 10}}>
          <OTPTextField Label="0" />
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
            Didn’t receive any code?{' '}
            <Text
              style={{color: 'blue', fontFamily: 'Poppins-Bold'}}
              onPress={() => navigation.navigate('signInSE')}>
              Resend
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}
