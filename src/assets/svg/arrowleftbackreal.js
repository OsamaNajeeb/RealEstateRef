import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BackArrowIcon = props => (
  <Svg
    width={17}
    height={15}
    viewBox="0 0 17 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.25 7.27435L16.25 7.27435"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.2998 13.2988L1.2498 7.27476L7.2998 1.24976"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BackArrowIcon;
