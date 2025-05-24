import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import SmallHome from '../svg/customesmallhome';
import TapWaterIcon from '../svg/tapwater';

export default function AcctypeRectBtn({
  iconType,
  label = 'Default Label',
  isClicked = false,
  onPress,
}) {
  const iconColor = isClicked ? '#242424' : '#D6D6D6'; // Dynamic color based on isClicked

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={{
          backgroundColor: isClicked ? '#242424' : '#D6D6D6',
          width: 150,
          height: 150,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'white',
            borderRadius: 25,
            justifyContent: 'center',
            alignItems: 'center',
            padding: 3,
            width: 50,
            height: 50,
            marginBottom: 10,
          }}>
          {/* Conditional rendering of the icon with dynamic color */}
          {iconType === 1 ? (
            <SmallHome color={iconColor} />
          ) : (
            <TapWaterIcon color={iconColor} />
          )}
        </View>
        <Text
          style={{
            color: 'white',
            textAlign: 'center',
            fontFamily: 'Poppins-Regular',
          }}>
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
