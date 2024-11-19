import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LockIcon = ({color = '#D0D0D0', ...props}) => (
  <Svg
    width={17}
    height={20}
    viewBox="0 0 17 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{marginHorizontal: 5}}
    {...props}>
    <Path
      d="M8.50221 10.3801C8.17978 10.3813 7.86668 10.4884 7.61105 10.685C7.35542 10.8815 7.17142 11.1565 7.08732 11.4678C7.00321 11.7791 7.02368 12.1094 7.14556 12.4079C7.26744 12.7064 7.48399 12.9566 7.76192 13.1201V15.2191H9.26057V13.1201C9.48046 12.99 9.66295 12.8052 9.7903 12.5838C9.91765 12.3623 9.98552 12.1116 9.98732 11.8561C9.98732 11.6615 9.94884 11.4689 9.8741 11.2892C9.79936 11.1095 9.68982 10.9464 9.5518 10.8092C9.41377 10.672 9.24999 10.5635 9.06986 10.4898C8.88973 10.4162 8.69681 10.3789 8.50221 10.3801Z"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M14.05 6.99008H2.95005C1.87306 6.99008 1 7.86314 1 8.94012V16.6545C1 17.7315 1.87306 18.6046 2.95005 18.6046H14.05C15.1269 18.6046 16 17.7315 16 16.6545V8.94012C16 7.86314 15.1269 6.99008 14.05 6.99008Z"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M3.69482 6.99007V5.81192C3.69482 4.53572 4.20179 3.31179 5.1042 2.40938C6.00661 1.50697 7.23054 1 8.50674 1C9.78294 1 11.0069 1.50697 11.9093 2.40938C12.8117 3.31179 13.3187 4.53572 13.3187 5.81192V6.99007"
      stroke={color}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default LockIcon;
