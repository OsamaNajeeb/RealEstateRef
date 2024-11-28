import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const AtlassianLogo = props => (
  <Svg
    width={22}
    height={22}
    viewBox="0 0 22 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.99777 10.3235C6.87089 10.1574 6.66645 10.0697 6.4587 10.0922C6.25096 10.1148 6.07011 10.2444 5.98185 10.434L0.833989 20.7338C0.738639 20.9246 0.748831 21.1513 0.860927 21.3328C0.973024 21.5143 1.17104 21.6248 1.38427 21.6248H8.5524C8.78696 21.6303 9.00268 21.4968 9.10268 21.2844C10.6489 18.087 9.71185 13.2253 6.99777 10.3235Z"
      fill="url(#paint0_linear_4743_97)"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10.7734 0.955418C8.1639 4.97348 7.86273 10.0701 9.98083 14.3679L13.4367 21.2845C13.5409 21.493 13.7539 21.6248 13.9869 21.6248H21.1538C21.367 21.6248 21.565 21.5143 21.6771 21.3328C21.7892 21.1513 21.7994 20.9246 21.7041 20.7338C21.7041 20.7338 12.0622 1.43427 11.8199 0.951554C11.7222 0.75105 11.5184 0.624181 11.2955 0.625004C11.0725 0.625827 10.8697 0.754198 10.7734 0.955418Z"
      fill="#242424"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4743_97"
        x1={9.81901}
        y1={11.9131}
        x2={2.59849}
        y2={19.664}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#0052CC" />
        <Stop offset={0.923} stopColor="#2684FF" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default AtlassianLogo;
