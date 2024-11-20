import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {useRef, useState} from 'react';
import EnvelopeIcon from '../assets/svg/envelope';
import auth from '@react-native-firebase/auth';
import LockIcon from '../assets/svg/lock';
import EyeClosedIcon from '../assets/svg/eyeclosed';
import EyeOpenIcon from '../assets/svg/eyeopen';
import TextFieldOne from '../assets/components/TextFieldOne';
import TextFieldTwo from '../assets/components/TextFieldTwo';
import AddressMarkerIcon from '../assets/svg/addressmark';
import TextFieldThree from '../assets/components/TextFieldThree';
import RealEstateIcon from '../assets/svg/realestate';
import DropDownIcon from '../assets/svg/dropdownarrow';
import PhoneIcon from '../assets/svg/phone';
import ScrollDownArrow from '../assets/svg/arrowcirledown';

export default function SignInScreenRE({navigation}) {
  const [eMail, setEmail] = useState('');
  const [password, setPass] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [secureTextEntry, setSecureTextEntry] = useState(true);
  const [showArrow, setShowArrow] = useState(true);

  const scrollViewRef = useRef(null);

  const validateEmail = email => {
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

  const isEntryValid = validateEmail(eMail) && validatePassword(password);

  const onSignIn = () => {
    if (!validateEmail(eMail) || !validatePassword(password)) {
      Alert.alert('Error', 'Please enter a valid email and password.');
      return;
    }

    auth()
      .createUserWithEmailAndPassword(eMail, password)
      .then(() => {
        Alert.alert('Success', 'Login Successfully', [
          {text: 'OK', onPress: () => navigation.replace('logInRE')},
        ]);
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

  const handleScroll = event => {
    const {y} = event.nativeEvent.contentOffset;
    setShowArrow(y < 10);
  };

  const scrollToBottom = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollToEnd({animated: true});
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={{padding: 15, flexGrow: 1}}
        onScroll={handleScroll}
        scrollEventThrottle={16}>
        <View style={{marginTop: 35}}>
          <Text style={{color: 'black', fontFamily: 'Poppins-Bold'}}>
            Job Finder
          </Text>
        </View>
        <View style={{marginTop: 30}}>
          <Text
            style={{color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold'}}>
            Create Account
          </Text>
          <Text
            style={{
              color: '#909090',
              fontSize: 13,
              fontFamily: 'Poppins-Bold',
            }}>
            Enter your information below:
          </Text>
        </View>
        <View style={{justifyContent: 'center', marginTop: 10}}>
          <TextFieldOne Label={'First Name'} />
          <TextFieldOne Label={'Last Name'} />
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
          <TextFieldTwo Label={'Address'} DynamicIcon={<AddressMarkerIcon />} />
          <TextFieldThree
            Label={'Real-Estate'}
            DynamicIcon={<RealEstateIcon />}
            DynamicIconTwo={<DropDownIcon />}
            isGrey={true}
          />
        </View>
        <TextFieldTwo Label={'Address'} DynamicIcon={<PhoneIcon />} />
        <TextFieldThree
          Label={'State'}
          DynamicIcon={<AddressMarkerIcon />}
          DynamicIconTwo={<DropDownIcon />}
        />
        <TouchableOpacity onPress={onSignIn}>
          <View
            style={[
              socialStyle.viewBtn,
              {backgroundColor: isEntryValid ? 'black' : '#D0D0D0'},
            ]}>
            <Text
              style={{
                color: 'white',
                fontFamily: 'Poppins-Regular',
                marginLeft: 8,
              }}>
              Register
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
      {showArrow && (
        <TouchableOpacity onPress={scrollToBottom}>
          <View
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              marginVertical: 10,
            }}>
            <ScrollDownArrow />
          </View>
        </TouchableOpacity>
      )}
      <View style={{padding: 10, marginBottom: 30}}>
        <Text
          style={{
            textAlign: 'center',
            color: '#909090',
            fontFamily: 'Poppins-Medium',
          }}>
          Already a member{' '}
          <Text
            style={{color: 'blue', fontFamily: 'Poppins-Bold'}}
            onPress={() => navigation.replace('logInRE')}>
            Login
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
});
