import {View, StyleSheet, Text} from 'react-native';
import React from 'react';

export default function TextFieldThree({
  Label,
  DynamicIcon,
  DynamicIconTwo,
  isGrey = false,
}) {
  return (
    <View style={textFieldStyle.textF}>
      {DynamicIcon && (
        <View style={textFieldStyle.leftIcon}>{DynamicIcon}</View>
      )}
      <Text
        style={[textFieldStyle.input, {color: isGrey ? 'black' : '#9F9F9F'}]}>
        {Label}
      </Text>
      {DynamicIconTwo && (
        <View style={textFieldStyle.rightIcon}>{DynamicIconTwo}</View>
      )}
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
    paddingVertical: 13,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    marginVertical: 10,
  },
  leftIcon: {
    marginRight: 5,
  },
  rightIcon: {
    marginLeft: 'auto',
    marginRight: 8,
  },
  input: {
    flex: 1,
    textAlign: 'left',
    fontSize: 15,
    marginLeft: 3,
  },
});
