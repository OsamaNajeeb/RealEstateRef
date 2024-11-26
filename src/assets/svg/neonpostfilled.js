import * as React from 'react';
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
  Rect,
} from 'react-native-svg';
const NeonPostFilledIcon = props => (
  <Svg
    width={22}
    height={21}
    viewBox="0 0 22 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <G clipPath="url(#clip0_454_1345)">
      <Path
        d="M14.6085 5.14124H14.6954H15.1085H16.4345V11.4455H12.7644L12.8654 10.638L12.9357 10.076H12.3693H9.63014H9.06374L9.134 10.638L9.23495 11.4455H5.56494V5.14124H6.89103H7.3041H7.39103H7.8041H14.1954H14.6085Z"
        fill="#242424"
        stroke="url(#paint0_linear_454_1345)"
      />
      <Path
        d="M11.9128 14.7282H12.3542L12.4089 14.2902L12.5254 13.3586H16.4345V18.75H5.56494V13.3586H9.47406L9.59051 14.2903L9.64526 14.7282H10.0867H11.9128Z"
        fill="#242424"
        stroke="url(#paint1_linear_454_1345)"
      />
      <Path
        d="M15.7002 18.75V5.14142H21.0001V18.75H15.7002Z"
        fill="#242424"
        stroke="url(#paint2_linear_454_1345)"
      />
      <Path
        d="M1 18.75V5.14142H6.3V18.75H1Z"
        fill="#242424"
        stroke="url(#paint3_linear_454_1345)"
      />
    </G>
    <Defs>
      <LinearGradient
        id="paint0_linear_454_1345"
        x1={10.9997}
        y1={1.75003}
        x2={10.9997}
        y2={11.9455}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF65" />
        <Stop offset={0.536} stopColor="#0094FF" />
        <Stop offset={1} stopColor="#FF00F5" />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_454_1345"
        x1={10.9997}
        y1={12.8586}
        x2={10.9997}
        y2={19.25}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF66" />
        <Stop offset={0.5} stopColor="#0094FF" />
        <Stop offset={1} stopColor="#FF00F5" />
      </LinearGradient>
      <LinearGradient
        id="paint2_linear_454_1345"
        x1={18.3501}
        y1={4.64142}
        x2={18.3501}
        y2={19.25}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF65" />
        <Stop offset={0.536} stopColor="#0094FF" />
        <Stop offset={1} stopColor="#FF00F5" />
      </LinearGradient>
      <LinearGradient
        id="paint3_linear_454_1345"
        x1={3.65}
        y1={4.64142}
        x2={3.65}
        y2={19.25}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF65" />
        <Stop offset={0.536} stopColor="#0094FF" />
        <Stop offset={1} stopColor="#FF00F5" />
      </LinearGradient>
      <ClipPath id="clip0_454_1345">
        <Rect width={21} height={21} fill="white" transform="translate(0.5)" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default NeonPostFilledIcon;
