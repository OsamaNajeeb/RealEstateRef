import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';
import PersonIcon from '../svg/person';

export default function TextFieldOne({Label}) {
  return (
    <View style={[textFieldStyle.textF]}>
      <PersonIcon />
      <TextInput placeholder={Label} style={textFieldStyle.input} />
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
