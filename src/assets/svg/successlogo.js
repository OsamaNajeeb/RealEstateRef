import * as React from 'react';
import Svg, {
  Rect,
  Mask,
  G,
  Defs,
  Pattern,
  Use,
  LinearGradient,
  Stop,
  Image,
} from 'react-native-svg';
const SuccessCheckmarkIcon = props => (
  <Svg
    width={83}
    height={82}
    viewBox="0 0 83 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}>
    <Rect
      x={4.5}
      y={4}
      width={74}
      height={74}
      rx={37}
      fill="url(#paint0_linear_13_739)"
    />
    <Rect
      x={2.5}
      y={2}
      width={78}
      height={78}
      rx={39}
      stroke="url(#paint1_linear_13_739)"
      strokeOpacity={0.2}
      strokeWidth={4}
    />
    <Mask
      id="mask0_13_739"
      style={{
        maskType: 'alpha',
      }}
      maskUnits="userSpaceOnUse"
      x={21}
      y={21}
      width={41}
      height={40}>
      <Rect
        x={21.5}
        y={21}
        width={40}
        height={40}
        fill="url(#pattern0_13_739)"
      />
    </Mask>
    <G mask="url(#mask0_13_739)">
      <Rect x={21.5} y={21} width={40} height={40} fill="white" />
    </G>
    <Defs>
      <Pattern
        id="pattern0_13_739"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}>
        <Use xlinkHref="#image0_13_739" transform="scale(0.0078125)" />
      </Pattern>
      <LinearGradient
        id="paint0_linear_13_739"
        x1={-21.7385}
        y1={-15.4431}
        x2={23.6285}
        y2={91.983}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#595961" />
        <Stop offset={1} />
      </LinearGradient>
      <LinearGradient
        id="paint1_linear_13_739"
        x1={-21.7385}
        y1={-15.4431}
        x2={23.6285}
        y2={91.983}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#595961" />
        <Stop offset={1} />
      </LinearGradient>
      <Image
        id="image0_13_739"
        width={128}
        height={128}
        xlinkHref="data:image/png;base64,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"
      />
    </Defs>
  </Svg>
);
export default SuccessCheckmarkIcon;
