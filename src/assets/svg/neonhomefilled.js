import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const NeonHomeIconActive = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M8.13478 19.7733V16.7156C8.13478 15.9351 8.77217 15.3023 9.55844 15.3023H12.4326C12.8102 15.3023 13.1723 15.4512 13.4393 15.7163C13.7063 15.9813 13.8563 16.3408 13.8563 16.7156V19.7733C13.8539 20.0978 13.9821 20.4099 14.2124 20.6402C14.4427 20.8705 14.7561 21 15.0829 21H17.0438C17.9596 21.0023 18.8388 20.6428 19.4872 20.0008C20.1356 19.3588 20.5 18.487 20.5 17.5778V8.86686C20.5 8.13246 20.1721 7.43584 19.6046 6.96467L12.934 1.67587C11.7737 0.748562 10.1111 0.778502 8.98539 1.74698L2.46701 6.96467C1.87274 7.42195 1.51755 8.12064 1.5 8.86686V17.5689C1.5 19.4639 3.04738 21 4.95617 21H6.87229C7.55123 21 8.103 20.4562 8.10792 19.7822L8.13478 19.7733Z"
      fill="#242424"
      stroke="url(#paint0_linear_4719_95)"
      strokeWidth={1.5}
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4719_95"
        x1={11}
        y1={1}
        x2={11}
        y2={21}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF65" />
        <Stop offset={0.516} stopColor="#0094FF" />
        <Stop offset={1} stopColor="#FF00F5" />
        <Stop offset={1} stopColor="#FF00F5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default NeonHomeIconActive;
