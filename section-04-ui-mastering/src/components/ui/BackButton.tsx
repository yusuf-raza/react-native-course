import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import type { SvgProps } from "react-native-svg";
import { s } from "react-native-size-matters";

// Props can be forwarded to Svg; Flutter equivalent: forwarding constructor args.
// Warning: the tap handler is hardcoded, so this button is not reusable yet.
const BackButton = (props: SvgProps) => (
  <TouchableOpacity onPress={() => console.log("back button tapped")}>
    <View style={styles.circle}>
      <Svg
        width={6}
        height={10}
        viewBox="0 0 6 10"
        fill="none"
        {...props}
      >
        <Path d="M4.55556 8.11111L1 4.55556L4.55556 1" fill="#ECF0F4" />
        <Path
          d="M4.55556 8.11111L1 4.55556L4.55556 1"
          stroke="#181C2E"
          strokeWidth={2}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  circle: {
    width: s(32),
    height: s(32),
    // Flutter: BoxShape.circle.
    borderRadius: s(50),
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BackButton;
