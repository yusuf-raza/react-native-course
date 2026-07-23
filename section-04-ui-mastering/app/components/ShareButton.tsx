import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { s } from "react-native-size-matters";
import { TouchableOpacity, StyleSheet, View } from "react-native";
// Receives an onClick callback from its parent and fires it on tap.
const ShareButton = ({ onClick }) => (
  // TouchableOpacity = a tappable wrapper that dims on press
  // (Flutter: GestureDetector / InkWell). Its handler is onPress, NOT onClick
  // (onClick is a web/DOM name). We pass the function straight through:
  //   onPress={onClick}        -> hands the function to onPress (runs on tap)
  //   onPress={() => onClick}  -> BUG: builds a fn that returns onClick, never calls it
  //   onPress={() => onClick()}-> also fine: wraps and calls it
  <TouchableOpacity onPress={onClick}>
    <View style={styles.circle}>
      <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
        <Path
          d="M19.9999 4C19.9999 4 15.9999 5 10.9999 7C8.14778 8.14086 5.9464 9.28173 4.58143 10.0514C3.88969 10.4414 3.9668 11.4144 4.69672 11.7272L9.99994 14L12.2727 19.3032C12.5856 20.0331 13.5585 20.1103 13.9486 19.4185C14.7182 18.0535 15.8591 15.8522 16.9999 13C18.9999 8 19.9999 4 19.9999 4ZM9.99994 14L19.9999 4"
          stroke="white"
          strokeWidth={1.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </Svg>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#1077AF",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default ShareButton;
