import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

// This type IS the constructor signature. Flutter parallel:
//   const PayAndConfirmButton({super.key, required this.onPress});
//   final VoidCallback onPress;
type Props = {
  onPress: () => void;
};

// Destructuring replaces reading `this.onPress` — function components have no
// `this`, so the fields come out in the parameter list.
const PayAndConfirmButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    {/* Gesture and painting are split across two widgets in both frameworks:
        Touchable + View here, InkWell + Container in Flutter. */}
    <View style={styles.payAndConfirmButton}>
      {/* & needs no escaping in JSX text — only { } < > are special. */}
      <Text style={styles.label}>PAY & CONFIRM</Text>
    </View>
  </TouchableOpacity>
);

export default PayAndConfirmButton;

const styles = StyleSheet.create({
  payAndConfirmButton: {
    height: vs(62), // SizedBox(height: 62)
    alignItems: "center", // CrossAxisAlignment.center — horizontal
    justifyContent: "center", // MainAxisAlignment.center — vertical
    borderRadius: s(10),
    backgroundColor: "#FF7622",
    // No width needed: a column-direction View stretches to fill its parent.
    // Flutter would need width: double.infinity.
  },
  label: {
    fontSize: s(14),
    color: "#FFFFFF",
    // GOTCHA (kept from the original): marginLeft on a centred single child
    // nudges the text 10px right of true centre. Drop it to centre exactly.
    marginLeft: s(10),
  },
});
