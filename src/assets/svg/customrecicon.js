import * as React from 'react';
import Svg, {
  Rect,
  Defs,
  LinearGradient,
  Stop,
  Text,
  TSpan,
} from 'react-native-svg';

const NextRectangleIcon = props => (
  <Svg
    width={333}
    height={50}
    viewBox="0 0 333 50"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect
      x={1.5}
      y={1.5}
      width={330}
      height={47}
      rx={6.5}
      fill="#242424"
      stroke="url(#paint0_linear_4530_1810)"
      strokeWidth={3}
    />
    <Text
      x="50%" // Centering horizontally
      y="50%" // Centering vertically
      fill="white" // Text color
      fontSize="18"
      fontWeight="bold"
      textAnchor="middle" // Centers the text
      dy=".3em" // Adjusts vertical alignment
    >
      Next
    </Text>
    <Defs>
      <LinearGradient
        id="paint0_linear_4530_1810"
        x1={166.5}
        y1={0}
        x2={166.5}
        y2={50}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF66" />
        <Stop offset={1} stopColor="#0094FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);

export default NextRectangleIcon;