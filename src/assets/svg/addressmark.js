import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const AddressMarkerIcon = props => (
  <Svg
    width={17}
    height={22}
    viewBox="0 0 17 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.5 20.2857C12.25 16.4286 16 12.9747 16 8.71429C16 4.4538 12.6421 1 8.5 1C4.35787 1 1 4.4538 1 8.71429C1 12.9747 4.75 16.4286 8.5 20.2857Z"
      stroke="#D0D0D0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M8.50005 11.7143C10.2753 11.7143 11.7143 10.2753 11.7143 8.50001C11.7143 6.7248 10.2753 5.28572 8.50005 5.28572C6.7248 5.28572 5.28577 6.7248 5.28577 8.50001C5.28577 10.2753 6.7248 11.7143 8.50005 11.7143Z"
      stroke="#D0D0D0"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default AddressMarkerIcon;
