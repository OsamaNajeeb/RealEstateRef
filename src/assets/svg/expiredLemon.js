import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const ExpiredLemonIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20.5714 11.0769C20.5714 4.95931 15.9664 0 10.2857 0C4.60507 0 0 4.95931 0 11.0769L20.5714 11.0769Z"
      fill="#F9EFAA"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.7144 24C19.3951 24 24.0001 19.0407 24.0001 12.9231L3.42871 12.9231C3.42871 19.0407 8.03378 24 13.7144 24Z"
      fill="#B99F00"
    />
  </Svg>
);
export default ExpiredLemonIcon;
