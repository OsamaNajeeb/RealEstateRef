import * as React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Svg, {Rect, Defs, LinearGradient, Stop} from 'react-native-svg';

const PurpleGDyIcon = ({onPress, label}) => (
  <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
    <View style={{position: 'relative', width: 75, height: 28}}>
      <Svg
        width="100%"
        height="100%"
        viewBox="0 0 75 28"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <Rect
          x={1}
          y={1}
          width={72.3717}
          height={26}
          rx={4}
          fill="#242424"
          stroke="url(#paint0_linear_61_3565)"
          strokeWidth={2}
        />
        <Defs>
          <LinearGradient
            id="paint0_linear_61_3565"
            x1={37.1858}
            y1={0}
            x2={37.1858}
            y2={28}
            gradientUnits="userSpaceOnUse">
            <Stop stopColor="#0094FF" />
            <Stop offset={1} stopColor="#FF00F5" />
          </LinearGradient>
        </Defs>
      </Svg>
      <Text
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          textAlign: 'center',
          textAlignVertical: 'center', // Android only
          color: 'white',
          fontSize: 12,
          fontFamily: 'Poppins-Regular',
        }}>
        {label}
      </Text>
    </View>
  </TouchableOpacity>
);

export default PurpleGDyIcon;
