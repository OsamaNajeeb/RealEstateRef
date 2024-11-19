import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const PersonIcon = props => (
  <Svg
    width={17}
    height={24}
    viewBox="0 0 17 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{marginHorizontal: 5}}
    {...props}>
    <Path
      d="M8.49426 10.7544C8.38429 10.7434 8.25233 10.7434 8.13136 10.7544C5.51411 10.6664 3.43567 8.52199 3.43567 5.8827C3.43567 3.18842 5.61309 1 8.31831 1C11.0126 1 13.201 3.18842 13.201 5.8827C13.19 8.52199 11.1116 10.6664 8.49426 10.7544Z"
      stroke="#D0D0D0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M2.99597 14.8123C0.334677 16.5938 0.334677 19.4971 2.99597 21.2676C6.02016 23.2911 10.9798 23.2911 14.004 21.2676C16.6653 19.4861 16.6653 16.5828 14.004 14.8123C10.9908 12.7999 6.03116 12.7999 2.99597 14.8123Z"
      stroke="#D0D0D0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default PersonIcon;
