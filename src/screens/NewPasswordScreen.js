import {
  View,
  Text,
  Modal,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import ArrowBackIcon from '../assets/svg/arrowleft';
import DynamicBtn from '../assets/svg/dynamicbtn';
import TextFieldThree from '../assets/components/TextFieldThree';
import LockIcon from '../assets/svg/lock';
import EyeClosedIcon from '../assets/svg/eyeclosed';

export default function NewPasswordScreen({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    navigation.navigate('logInRE');
    setModalVisible(false);
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white', padding: 15}}>
      <Modal
        transparent={true}
        visible={isModalVisible}
        animationType="fade"
        onRequestClose={handleCloseModal}>
        <View style={modalStyle.modalOverlay}>
          <View style={modalStyle.modalContainer}>
            <Image
              source={require('../assets/png/successlogo.png')}
              style={{
                height: 80,
                width: 80,
                resizeMode: 'contain',
                alignSelf: 'center',
              }}
            />
            <View style={{marginTop: 10}}>
              <Text
                style={{
                  textAlign: 'center',
                  fontSize: 22,
                  fontFamily: 'Poppins-Medium',
                }}>
                Password Updated Successfully
              </Text>
              <TouchableOpacity onPress={handleCloseModal}>
                <View
                  style={[
                    socialStyle.viewBtn,
                    socialStyle.googleBtn,
                    socialStyle.trumpBorder,
                  ]}>
                  <Text
                    style={{
                      color: 'black',
                      fontFamily: 'Poppins-Regular',
                      marginLeft: 8,
                    }}>
                    Close
                  </Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{marginTop: 5}}>
        <ArrowBackIcon onPress={() => navigation.goBack()} />
      </View>
      <View style={{marginTop: 30}}>
        <Text
          style={{color: 'black', fontSize: 22, fontFamily: 'Poppins-Bold'}}>
          Set New Password
        </Text>
        <Text
          style={{
            color: '#909090',
            fontSize: 13,
            fontFamily: 'Poppins-Bold',
          }}>
          Enter new password down below:
        </Text>
        <View style={{marginTop: 10}}>
          <TextFieldThree
            DynamicIcon={<LockIcon />}
            Label={'Enter New Password'}
            DynamicIconTwo={<EyeClosedIcon />}
          />
          <TextFieldThree
            DynamicIcon={<LockIcon />}
            Label={'Confirm Password'}
            DynamicIconTwo={<EyeClosedIcon />}
          />
        </View>
        <View style={{marginTop: 15}}>
          <DynamicBtn onPress={handleOpenModal} label={'Reset Password'} />
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
              onPress={() => navigation.navigate('logInRE')}>
              Sign In
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
}

const modalStyle = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    width: '90%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    height: '33%',
  },
  modalHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 18,
    fontFamily: 'Poppins-Bold',
    color: 'black',
  },
  closeButton: {
    padding: 5,
  },
  closeButtonText: {
    fontSize: 16,
    fontFamily: 'Poppins-Bold',
    color: 'red',
  },
  buttonsContainer: {
    justifyContent: 'center',
    marginTop: 20,
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
