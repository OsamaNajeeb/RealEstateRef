import {View, StyleSheet, TextInput} from 'react-native';
import React from 'react';

export default function TextFieldTwo({Label, DynamicIcon}) {
  return (
    <View style={textFieldStyle.textF}>
      {DynamicIcon && <View style={textFieldStyle.icon}>{DynamicIcon}</View>}
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
