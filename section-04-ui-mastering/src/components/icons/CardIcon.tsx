import * as React from "react";
import Svg, { Mask, Rect, G, Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const CardIcon = (props: SvgProps) => (
  <Svg
    width={169}
    height={107}
    viewBox="0 0 169 107"
    fill="none"
    {...props}
  >
    <Mask
      id="mask0_21_72"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={0}
      width={169}
      height={107}
    >
      <Rect width={168.196} height={106.203} rx={14} fill="white" />
    </Mask>
    <G mask="url(#mask0_21_72)">
      <Rect
        x={-0.000976562}
        y={0.000152588}
        width={168.196}
        height={106.203}
        rx={3}
        fill="#FF7622"
      />
      <Path
        d="M124.705 110.192L92.8643 73.9853L73.7651 95.6882L124.213 153.053H162.399L124.705 110.192Z"
        fill="#FECB5F"
      />
      <Path
        d="M124.705 84.1301L162.398 127.053H200.584L143.804 62.3957L124.705 84.1301Z"
        fill="#F8F9FA"
      />
      <Path
        d="M59.0093 -14.7408L123.804 58.6985L180.584 123.053H209.369V112.398L78.0958 -36.388L59.0093 -14.7408Z"
        fill="#EB001B"
      />
      <Path
        d="M144.243 17.906L198.368 79.4324V36.0255L163.342 -3.80453L144.243 17.906Z"
        fill="#FECB5F"
      />
    </G>
    <Path
      d="M25.2587 23.7184H18.8403V12.3137H25.2588L25.2587 23.7184Z"
      fill="#FF5F00"
    />
    <Path
      d="M19.0663 18.0934C19.0663 15.78 20.1619 13.7192 21.8679 12.3911C20.5765 11.3843 18.9793 10.8379 17.3348 10.8403C13.2838 10.8403 10 14.0876 10 18.0934C10 22.0992 13.2838 25.3465 17.3348 25.3465C18.9794 25.3489 20.5766 24.8025 21.868 23.7957C20.1621 22.4679 19.0663 20.407 19.0663 18.0934Z"
      fill="#EB001B"
    />
    <Path
      d="M33.6552 18.0934C33.6552 22.0992 30.3714 25.3465 26.3204 25.3465C24.6757 25.3489 23.0782 24.8025 21.7866 23.7957C23.4931 22.4677 24.5886 20.407 24.5886 18.0934C24.5886 15.7799 23.4931 13.7192 21.7866 12.3911C23.0782 11.3844 24.6756 10.838 26.3203 10.8403C30.3713 10.8403 33.6552 14.0876 33.6552 18.0934Z"
      fill="#F8F9FA"
    />
    <Rect opacity={0.5} x={11} y={79} width={50} height={9} fill="#FBFBFC" />
    <Rect opacity={0.5} x={10} y={40} width={131} height={19} fill="#FBFBFC" />
    <Rect opacity={0.5} x={11} y={90} width={38} height={9} fill="#FBFBFC" />
  </Svg>
);
export default CardIcon;
