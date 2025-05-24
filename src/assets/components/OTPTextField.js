import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function OTPTextField({Label = ''}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 10,
      }}>
      {Array(4)
        .fill(0)
        .map((_, index) => (
          <View key={index} style={[textFieldStyle.textF]}>
            <TextInput
              placeholder={Label}
              style={textFieldStyle.input}
              keyboardType="numeric"
              maxLength={1}
            />
          </View>
        ))}
    </View>
  );
}

const textFieldStyle = StyleSheet.create({
  textF: {
    borderColor: '#D0D0D0',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: 'white',
    width: 50, // Adjust width for uniform size
    height: 50, // Adjust height for a square box
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    fontSize: 18, // Make the text more visible
    textAlign: 'center', // Center align the text inside the input
  },
});
