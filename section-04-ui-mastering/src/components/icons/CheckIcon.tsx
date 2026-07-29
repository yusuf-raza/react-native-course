import * as React from "react";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
const CheckIcon = (props: SvgProps) => (
  <Svg
    width={11}
    height={9}
    viewBox="0 0 11 9"
    fill="none"
    {...props}
  >
    <Path
      d="M10.0001 1L3.81253 7.18756L1 4.37503"
      stroke="white"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default CheckIcon;
