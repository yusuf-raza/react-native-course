import * as React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import Svg, { Path } from "react-native-svg";
import { s } from "react-native-size-matters";

// Keeps the whole props object instead of destructuring, so it can forward it
// to <Svg>. GOTCHA: the tap handler is hardcoded — to reuse this button, accept
// an onPress prop the way AddNewButton does.
const BackButton = (props) => (
  <TouchableOpacity onPress={() => console.log("back button tapped")}>
    <View style={styles.circle}>
      <Svg
        width={6}
        height={10}
        viewBox="0 0 6 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // {...props} spreads every received prop onto <Svg>. No direct Flutter
        // equivalent — closest is forwarding named params through by hand.
        // Only works because `props` exists: destructure the params and `props`
        // is undefined and this throws.
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
    borderRadius: s(50), // any value ≥ half the width gives a circle
    backgroundColor: "#ECF0F4",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default BackButton;
