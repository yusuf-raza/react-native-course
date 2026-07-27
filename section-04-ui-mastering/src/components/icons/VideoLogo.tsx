import * as React from "react";
import Svg, { Path } from "react-native-svg";
const VideoLogo = (props) => (
  <Svg
    width={16}
    height={16}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M0 4.09603V9.95572C0.0053125 11.2807 1.0875 12.347 2.40719 12.3417H10.9481C11.1909 12.3417 11.3862 12.1463 11.3862 11.9088V6.04947C11.3809 4.72447 10.2991 3.6579 8.97906 3.66322H0.438125C0.195313 3.66322 0 3.85853 0 4.09603ZM11.93 6.38197L15.4563 3.80572C15.7625 3.55259 16 3.61572 16 4.07509V11.9298C16 12.4526 15.7097 12.3892 15.4563 12.1992L11.93 9.62822V6.38197Z"
      fill="#4A8CFF"
    />
  </Svg>
);
export default VideoLogo;
