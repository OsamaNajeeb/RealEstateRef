import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const EnvelopeIcon = ({color = '#D0D0D0', ...props}) => (
  <Svg
    width={18}
    height={15}
    viewBox="0 0 18 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{marginHorizontal: 5}}
    {...props}>
    <Path
      d="M1.88892 2.77784L7.40003 6.91113C8.3482 7.62224 9.65185 7.62224 10.6 6.91113L16.1111 2.7778"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M15.2222 1H2.77778C1.79594 1 1 1.79594 1 2.77778V11.6667C1 12.6485 1.79594 13.4444 2.77778 13.4444H15.2222C16.2041 13.4444 17 12.6485 17 11.6667V2.77778C17 1.79594 16.2041 1 15.2222 1Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default EnvelopeIcon;
