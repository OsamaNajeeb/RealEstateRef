import * as React from 'react';
import Svg, {Path, Mask} from 'react-native-svg';
const EyeClosedIcon = ({onPress, ...props}) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    onPress={onPress}
    xmlns="http://www.w3.org/2000/svg"
    style={{marginHorizontal: 5, justifyContent: 'flex-end'}}
    {...props}>
    <Path
      d="M8.25 11.25C8.25 9.17893 9.92893 7.5 12 7.5C14.0711 7.5 15.75 9.17893 15.75 11.25C15.75 13.3211 14.0711 15 12 15C9.92893 15 8.25 13.3211 8.25 11.25Z"
      stroke="#D0D0D0"
      strokeWidth={1.5}
    />
    <Mask id="path-2-inside-1_6_224" fill="white">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.1278 11.25C21.3476 15.6477 17.0361 18.75 12 18.75C6.96397 18.75 2.65248 15.6477 0.872314 11.25C2.65248 6.85225 6.96397 3.75 12 3.75C17.0361 3.75 21.3476 6.85226 23.1278 11.25Z"
      />
    </Mask>
    <Path
      d="M23.1278 11.25L24.5182 11.8128L24.746 11.25L24.5182 10.6872L23.1278 11.25ZM0.872314 11.25L-0.518092 10.6872L-0.745917 11.25L-0.518092 11.8128L0.872314 11.25ZM21.7374 10.6872C20.1786 14.538 16.4042 17.25 12 17.25V20.25C17.668 20.25 22.5166 16.7575 24.5182 11.8128L21.7374 10.6872ZM12 17.25C7.59584 17.25 3.82148 14.538 2.26272 10.6872L-0.518092 11.8128C1.48347 16.7575 6.3321 20.25 12 20.25V17.25ZM2.26272 11.8128C3.82148 7.96203 7.59584 5.25 12 5.25V2.25C6.3321 2.25 1.48347 5.74248 -0.518092 10.6872L2.26272 11.8128ZM12 5.25C16.4042 5.25 20.1786 7.96203 21.7374 11.8128L24.5182 10.6872C22.5166 5.74248 17.668 2.25 12 2.25V5.25Z"
      fill="#D0D0D0"
      mask="url(#path-2-inside-1_6_224)"
    />
    <Path
      d="M15.75 1.5L8.25 21.75"
      stroke="#D0D0D0"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M16.9458 1.5L9.4458 21.75"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default EyeClosedIcon;
