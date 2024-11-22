import React from 'react';
import {Modal, View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import AppleIcon from '../svg/apple';
import GoogleIcon from '../svg/google';
import CloseBtnIcon from '../svg/cross';

const CustomModal = ({
  visible,
  onClose,
  title,
  onButtonOnePress,
  onButtonTwoPress,
}) => {
  return (
    <Modal
      transparent={true}
      visible={visible}
      animationType="fade"
      onRequestClose={onClose}>
      <View style={styles.modalOverlay}>
        <View style={styles.modalContainer}>
          <View style={styles.modalHeader}>
            <Text style={styles.title}>{title}</Text>
            <TouchableOpacity onPress={onClose} style={styles.closeButton}>
              <CloseBtnIcon />
            </TouchableOpacity>
          </View>
          <TouchableOpacity onPress={onButtonOnePress}>
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
          <TouchableOpacity onPress={onButtonTwoPress}>
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
  );
};

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

export default CustomModal;
