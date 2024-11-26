import * as React from 'react';
import Svg, {Path, Defs, LinearGradient, Stop} from 'react-native-svg';
const NeonKTSFilledIcon = props => (
  <Svg
    width={17}
    height={22}
    viewBox="0 0 17 22"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.4256 6.40036C13.4256 3.41782 11.2214 1 8.50249 1C5.78354 1 3.57939 3.41782 3.57939 6.40036C3.57939 9.38289 5.78354 11.8007 8.50249 11.8007C11.2214 11.8007 13.4256 9.38289 13.4256 6.40036ZM10.5382 14.5498C9.18852 14.4338 7.83262 14.4338 6.48293 14.5498C5.7451 14.5934 5.01078 14.6915 4.28498 14.8434C2.70342 15.1548 1.68149 15.7331 1.25163 16.6228C1.08312 16.9705 0.996677 17.3589 1.0001 17.7527C1.00153 18.144 1.09067 18.529 1.25974 18.8737C1.69771 19.7633 2.71964 20.3327 4.28498 20.653C5.00759 20.8082 5.73942 20.9063 6.47482 20.9466C6.71814 20.9466 6.96957 20.9644 7.22911 21H8.47002C9.15942 21 9.8407 21 10.522 20.9199C11.2574 20.874 11.989 20.7729 12.7118 20.6174C14.334 20.3149 15.3153 19.7278 15.7533 18.8381C16.0822 18.1437 16.0822 17.3171 15.7533 16.6228C15.3153 15.7331 14.2934 15.1815 12.7281 14.8434C12.0047 14.6936 11.2732 14.5955 10.5382 14.5498Z"
      fill="#242424"
    />
    <Path
      d="M6.48293 14.5498L6.52712 15.2985L6.53715 15.2979L6.54717 15.2971L6.48293 14.5498ZM10.5382 14.5498L10.474 15.2971L10.4828 15.2978L10.4917 15.2984L10.5382 14.5498ZM4.28498 14.8434L4.42987 15.5793L4.43867 15.5775L4.28498 14.8434ZM1.25163 16.6228L1.92654 16.9499L1.92694 16.9491L1.25163 16.6228ZM1.0001 17.7527L1.7501 17.7499L1.75007 17.7462L1.0001 17.7527ZM1.25974 18.8737L0.5864 19.204L0.586853 19.2049L1.25974 18.8737ZM4.28498 20.653L4.4424 19.9197L4.43532 19.9182L4.28498 20.653ZM6.47482 20.9466L6.43374 21.6955L6.45426 21.6966H6.47482V20.9466ZM7.22911 21L7.12722 21.743L7.17793 21.75H7.22911V21ZM10.522 20.9199L10.4752 20.1714L10.4548 20.1727L10.4344 20.1751L10.522 20.9199ZM12.7118 20.6174L12.5744 19.8801L12.5642 19.882L12.5541 19.8842L12.7118 20.6174ZM15.7533 18.8381L16.4263 19.1694L16.4311 19.1592L15.7533 18.8381ZM15.7533 16.6228L16.4312 16.3017L16.4262 16.2915L15.7533 16.6228ZM12.7281 14.8434L12.8864 14.1103L12.8802 14.109L12.7281 14.8434ZM8.50249 1.75C10.7434 1.75 12.6756 3.76522 12.6756 6.40036H14.1756C14.1756 3.07043 11.6995 0.25 8.50249 0.25V1.75ZM4.32939 6.40036C4.32939 3.76522 6.26155 1.75 8.50249 1.75V0.25C5.30552 0.25 2.82939 3.07043 2.82939 6.40036H4.32939ZM8.50249 11.0507C6.26155 11.0507 4.32939 9.03549 4.32939 6.40036H2.82939C2.82939 9.73029 5.30552 12.5507 8.50249 12.5507V11.0507ZM12.6756 6.40036C12.6756 9.03549 10.7434 11.0507 8.50249 11.0507V12.5507C11.6995 12.5507 14.1756 9.73029 14.1756 6.40036H12.6756ZM6.54717 15.2971C7.85412 15.1847 9.16703 15.1847 10.474 15.2971L10.6024 13.8026C9.21001 13.6829 7.81113 13.6829 6.4187 13.8026L6.54717 15.2971ZM4.43867 15.5775C5.1285 15.4331 5.82622 15.3399 6.52712 15.2985L6.43875 13.8011C5.66398 13.8468 4.89306 13.9498 4.13128 14.1093L4.43867 15.5775ZM1.92694 16.9491C2.19905 16.3859 2.91767 15.877 4.42986 15.5793L4.14009 14.1075C2.48916 14.4326 1.16392 15.0803 0.576321 16.2965L1.92694 16.9491ZM1.75007 17.7462C1.74763 17.4655 1.80942 17.1915 1.92654 16.9499L0.576719 16.2957C0.35681 16.7494 0.245723 17.2523 0.250126 17.7592L1.75007 17.7462ZM1.93308 18.5433C1.81507 18.3028 1.75112 18.0301 1.75009 17.7499L0.250103 17.7554C0.251945 18.258 0.366268 18.7553 0.586401 19.204L1.93308 18.5433ZM4.43532 19.9182C2.93457 19.6112 2.21225 19.1104 1.93263 18.5424L0.586853 19.2049C1.18317 20.4162 2.50471 21.0543 4.13463 21.3878L4.43532 19.9182ZM6.51591 20.1977C5.81977 20.1595 5.12684 20.0667 4.4424 19.9197L4.12756 21.3863C4.88835 21.5496 5.65907 21.653 6.43374 21.6955L6.51591 20.1977ZM7.33099 20.257C7.04024 20.2171 6.7547 20.1966 6.47482 20.1966V21.6966C6.68158 21.6966 6.8989 21.7117 7.12722 21.743L7.33099 20.257ZM8.47002 20.25H7.22911V21.75H8.47002V20.25ZM10.4344 20.1751C9.80403 20.2491 9.16671 20.25 8.47002 20.25V21.75C9.15212 21.75 9.87738 21.7509 10.6095 21.6648L10.4344 20.1751ZM12.5541 19.8842C11.8677 20.0318 11.1732 20.1278 10.4752 20.1714L10.5688 21.6685C11.3416 21.6202 12.1103 21.514 12.8696 21.3507L12.5541 19.8842ZM15.0804 18.5068C14.7979 19.0808 14.1074 19.5943 12.5744 19.8801L12.8493 21.3547C14.5605 21.0356 15.8328 20.3747 16.4262 19.1693L15.0804 18.5068ZM15.0755 16.9439C15.3082 17.435 15.3082 18.0259 15.0755 18.517L16.4311 19.1592C16.8563 18.2616 16.8563 17.1993 16.4311 16.3017L15.0755 16.9439ZM12.5697 15.5765C14.0853 15.9038 14.8023 16.3891 15.0804 16.954L16.4262 16.2915C15.8284 15.0771 14.5015 14.4591 12.8864 14.1103L12.5697 15.5765ZM10.4917 15.2984C11.1911 15.3419 11.8873 15.4352 12.576 15.5778L12.8802 14.109C12.1221 13.952 11.3553 13.8492 10.5848 13.8013L10.4917 15.2984Z"
      fill="url(#paint0_linear_4719_377)"
    />
    <Defs>
      <LinearGradient
        id="paint0_linear_4719_377"
        x1={8.50005}
        y1={1}
        x2={8.50005}
        y2={21}
        gradientUnits="userSpaceOnUse">
        <Stop stopColor="#00FF66" />
        <Stop offset={0.501} stopColor="#0094FF" />
        <Stop offset={1} stopColor="#FF00F5" />
      </LinearGradient>
    </Defs>
  </Svg>
);
export default NeonKTSFilledIcon;
