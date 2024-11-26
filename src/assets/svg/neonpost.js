import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath, Rect} from 'react-native-svg';
const NeonPostIcon = props => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_219_1257)">
      <Path
        d="M13.9129 4.42022V1.66669H6.08679V4.42022H4.34766V11.3767H8.85852L8.69547 10.0724H11.3041L11.1411 11.3767H15.652V4.42022H13.9129ZM13.0433 4.42022H6.95638V2.53627H13.0433V4.42022Z"
        fill="#B8BCBF"
      />
      <Path
        d="M11.0324 12.2462L10.8694 13.5507H9.13024L8.96719 12.2462H4.34766V18.3333H15.652V12.2462H11.0324Z"
        fill="#B8BCBF"
      />
      <Path
        d="M19.9999 4.42038H17.3911V18.3333H19.9999V4.42038Z"
        fill="#B8BCBF"
      />
      <Path d="M2.60876 4.42038H0V18.3333H2.60876V4.42038Z" fill="#B8BCBF" />
    </G>
    <Defs>
      <ClipPath id="clip0_219_1257">
        <Rect width={20} height={20} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NeonPostIcon;
