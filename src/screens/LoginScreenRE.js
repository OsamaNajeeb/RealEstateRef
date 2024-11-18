import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React from 'react';
import EnvelopeIcon from '../assets/svg/envelope';
import LockIcon from '../assets/svg/lock';
import EyeClosedIcon from '../assets/svg/eyeclosed';
import LoginRectangleBtn from '../assets/svg/customreciconthree';
import AppleIcon from '../assets/svg/apple';
import GoogleIcon from '../assets/svg/google';

export default function LoginScreenRE() {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView contentContainerStyle={{padding: 15, flexGrow: 1}}>
        <View style={{marginTop: 35}}>
          <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
            Job Finder
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{color: 'black', fontSize: 18, fontFamily: 'Poppins-Bold'}}>
            Let's get you login!
          </Text>
          <Text
            style={{
              color: '#B5B5B5',
              fontSize: 13,
              fontFamily: 'Poppins-ExtaBold',
            }}>
            Enter your creditenial below:
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginTop: 30}}>
          <View style={[textFieldStyle.textF]}>
            <EnvelopeIcon style={textFieldStyle.icon} />
            <TextInput
              placeholder="Enter Email"
              keyboardType="email-address"
              style={textFieldStyle.input}
            />
          </View>
          <View style={[textFieldStyle.textF]}>
            <LockIcon style={textFieldStyle.icon} />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={true}
              style={textFieldStyle.input}
            />
            <EyeClosedIcon style={textFieldStyle.icon} />
          </View>
          <View style={styles.forgotPasswordContainer}>
            <Text
              style={{
                textAlign: 'right',
                fontFamily: 'Poppins-SemiBold',
                color: 'blue',
              }}
              onPress={() =>
                Linking.openURL(
                  'https://www.youtube.com/watch?v=4wO6cYMYblo&list=PLeIJUF3PiXDfBaEA10imClVSzH-WzXFXt&index=3',
                )
              }>
              Forgot Password
            </Text>
          </View>
          <View style={{justifyContent: 'center', marginTop: 25}}>
            <LoginRectangleBtn />
          </View>
          <View style={{justifyContent: 'center', marginTop: 30}}>
            <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular'}}>
              Or login with:
            </Text>
          </View>
          <View>
            <TouchableOpacity>
              <View style={[socialStyle.viewBtn, socialStyle.appleBtn]}>
                <AppleIcon style={{marginRight: 8}} />
                <Text
                  style={{
                    color: 'white',
                    fontFamily: 'Poppins-Regular',
                    marginLeft: 8,
                  }}>
                  Login with Apple
                </Text>
              </View>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity>
              <View
                style={[
                  socialStyle.viewBtn,
                  socialStyle.googleBtn,
                  socialStyle.trumpBorder,
                ]}>
                <GoogleIcon style={{marginRight: 8}} />
                <Text
                  style={{
                    color: 'black',
                    fontFamily: 'Poppins-Regular',
                    marginLeft: 8,
                  }}>
                  Login with Google
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{padding: 40}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#B3B3B3',
            fontFamily: 'Poppins-Medium',
          }}>
          Not our member yet?{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() =>
              Linking.openURL(
                'https://www.youtube.com/watch?v=4wO6cYMYblo&list=PLeIJUF3PiXDfBaEA10imClVSzH-WzXFXt&index=3',
              )
            }>
            Register now
          </Text>
        </Text>
      </View>
    </View>
  );
}

const textFieldStyle = StyleSheet.create({
  textF: {
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: '#D0D0D0',
    borderWidth: 2,
    borderRadius: 10,
    padding: 5,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  icon: {
    marginHorizontal: 5,
  },
  input: {
    flex: 1,
    paddingHorizontal: 5,
  },
});

const styles = StyleSheet.create({
  forgotPasswordContainer: {
    marginTop: 8,
    alignSelf: 'flex-end',
    paddingHorizontal: 0,
  },
});

const socialStyle = StyleSheet.create({
  viewBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 47,
    borderRadius: 10,
    marginTop: 10,
    paddingHorizontal: 10,
  },
  appleBtn: {
    backgroundColor: '#242424',
  },
  googleBtn: {
    backgroundColor: '#fff',
  },
  trumpBorder: {
    borderWidth: 1,
    borderColor: '#D0D0D0',
  },
});
