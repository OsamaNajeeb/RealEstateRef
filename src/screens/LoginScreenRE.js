import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Linking,
  TouchableOpacity,
  ScrollView,
  Alert,
} from 'react-native';
import React, {useState} from 'react';
import EnvelopeIcon from '../assets/svg/envelope';
import LockIcon from '../assets/svg/lock';
import EyeClosedIcon from '../assets/svg/eyeclosed';
import LoginRectangleBtn from '../assets/svg/customreciconthree';
import AppleIcon from '../assets/svg/apple';
import GoogleIcon from '../assets/svg/google';
import auth from '@react-native-firebase/auth';
import EyeOpenIcon from '../assets/svg/eyeopen';

export default function LoginScreenRE({navigation}) {
  const [eMail, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);

  const validateEmail = email => {
    // Regex checks for a valid email format with a domain (e.g., ".com")
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
    return emailRegex.test(email);
  };

  const validatePassword = password => {
    return password.length >= 6;
  };

  const handleEmailChange = email => {
    setEmail(email);
  };

  const handlePasswordChange = pass => {
    setPass(pass);
  };

  const toggleSecureEntry = () => {
    setSecureTextEntry(!secureTextEntry);
  };

  const onLogIn = () => {
    if (!validateEmail(eMail) || !validatePassword(password)) {
      Alert.alert('Error', 'Please enter a valid email and password.');
      return;
    }

    auth()
      .signInWithEmailAndPassword(eMail, password)
      .then(() => {
        Alert.alert('Success', 'Login Successfully', [{text: 'OK'}]);
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('Error', 'That email address is already in use!');
        } else if (error.code === 'auth/invalid-email') {
          Alert.alert('Error', 'That email address is invalid!');
        } else {
          Alert.alert('Error', error.message);
        }
        console.error(error);
      });
  };

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
              color: '#909090',
              fontSize: 13,
              fontFamily: 'Poppins-Bold',
            }}>
            Enter your credentials below:
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginTop: 30}}>
          <View
            style={[
              textFieldStyle.textF,
              {
                borderColor: emailTouched
                  ? validateEmail(eMail)
                    ? 'green'
                    : 'red'
                  : '#D0D0D0',
              },
            ]}>
            <EnvelopeIcon
              color={
                emailTouched
                  ? validateEmail(eMail)
                    ? 'green'
                    : 'red'
                  : '#D0D0D0'
              }
            />
            <TextInput
              placeholder="Enter Email"
              keyboardType="email-address"
              value={eMail}
              onChangeText={handleEmailChange}
              onFocus={() => setEmailTouched(true)}
              style={textFieldStyle.input}
            />
          </View>
          <View
            style={[
              textFieldStyle.textF,
              {
                borderColor: passwordTouched
                  ? validatePassword(password)
                    ? 'green'
                    : 'red'
                  : '#D0D0D0',
              },
            ]}>
            <LockIcon
              color={
                passwordTouched
                  ? validatePassword(password)
                    ? 'green'
                    : 'red'
                  : '#D0D0D0'
              }
            />
            <TextInput
              placeholder="Enter Password"
              secureTextEntry={secureTextEntry}
              value={password}
              onChangeText={handlePasswordChange}
              onFocus={() => setPasswordTouched(true)}
              style={textFieldStyle.input}
            />
            <TouchableOpacity
              onPress={toggleSecureEntry}
              style={textFieldStyle.icon}>
              {secureTextEntry ? <EyeClosedIcon /> : <EyeOpenIcon />}
            </TouchableOpacity>
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
            <LoginRectangleBtn onPress={onLogIn} />
          </View>
          <View style={{justifyContent: 'center', marginTop: 30}}>
            <Text style={{textAlign: 'center', fontFamily: 'Poppins-Regular'}}>
              Or login with:
            </Text>
          </View>
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
      </ScrollView>
      <View style={{padding: 40}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#909090',
            fontFamily: 'Poppins-Medium',
          }}>
          Not our member yet?{' '}
          <Text
            style={{color: 'blue'}}
            onPress={() => navigation.navigate('signInSE')}>
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
