import {
  View,
  Text,
  Image,
  Linking,
  StyleSheet,
  Modal,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import DynamicBtn from '../assets/svg/dynamicbtn';
import GoogleIcon from '../assets/svg/google';
import AppleIcon from '../assets/svg/apple';
import CloseBtnIcon from '../assets/svg/cross';

export default function ApprovalScreen({navigation}) {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpenModal = () => {
    setModalVisible(true);
  };

  const handleCloseModal = () => {
    setModalVisible(false);
  };

  const handleButtonOnePress = () => {
    console.log('Button One Pressed');
    handleCloseModal();
  };

  const handleButtonTwoPress = () => {
    console.log('Button Two Pressed');
    handleCloseModal();
  };

  return (
    <View style={{padding: 15, flex: 1, backgroundColor: 'white'}}>
      <View style={StyleOne.body}>
        <Image
          source={require('../assets/png/approval.png')}
          style={StyleOne.imageView}
        />
        <Text
          style={{
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
            marginTop: 20,
            paddingHorizontal: 10,
          }}>
          Your Profile will be Approved in 2 - 72 hours. If your profile has not
          been approved within the above time frame. Please Contact our Support
          team below to further assist you with this issue.
        </Text>
        <View style={{justifyContent: 'center', marginTop: 20, width: '100%'}}>
          <Text
            style={{
              textAlign: 'center',
              marginTop: 5,
              fontSize: 16,
              fontFamily: 'Poppins-Regular',
              color: '#3277DD',
            }}>
            Get Help
          </Text>
        </View>

        <Modal
          transparent={true}
          visible={isModalVisible}
          animationType="fade"
          onRequestClose={handleCloseModal}>
          <View style={styles.modalOverlay}>
            <View style={styles.modalContainer}>
              <View style={styles.modalHeader}>
                <Text style={styles.title}>Payment Method</Text>
                <TouchableOpacity
                  onPress={handleCloseModal}
                  style={styles.closeButton}>
                  <CloseBtnIcon />
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={handleButtonOnePress}>
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
              <TouchableOpacity onPress={handleButtonTwoPress}>
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
        </Modal>
      </View>

      <View style={{flex: 0.2, justifyContent: 'flex-end', marginBottom: 20}}>
        <DynamicBtn
          onPress={() => navigation.navigate('splash')}
          label={'Subscribe Now'}
        />
      </View>
    </View>
  );
}

const StyleOne = StyleSheet.create({
  skipBtn: {
    textAlign: 'right',
    fontFamily: 'Poppins-SemiBold',
    fontSize: 16,
    marginRight: 10,
  },
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 50,
  },
  imageView: {
    height: '40%',
    width: '100%',
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  greyBox: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    backgroundColor: '#EFEFEF',
    height: 40,
  },
});

const styles = StyleSheet.create({
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
    height: '30%',
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
