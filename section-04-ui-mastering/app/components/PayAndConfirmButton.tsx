import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

// A `type Props` is this file's constructor signature. Flutter parallel:
//   const PayAndConfirmButton({super.key, required this.onPress});
//   final VoidCallback onPress;
// `() => void` IS Dart's VoidCallback. Marking it non-optional here is the same
// as `required` — TS errors at the call site if the parent forgets it.
type Props = {
  onPress: () => void;
};

// Destructuring ({ onPress }) unpacks the single props object React passes in.
// Flutter reads these off `this.` instead; React has no `this` in function
// components, so you pull the fields out in the parameter list.
const PayAndConfirmButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    {/* Two nested elements where Flutter would also nest: the Touchable handles
        the gesture, the View handles the painting. Neither framework lets one
        widget do both — Flutter splits it as InkWell + Container the same way. */}
    <View style={styles.payAndConfirmButton}>
      {/* & is a plain character inside JSX text, no escaping needed. Only { } < >
          are special. */}
      <Text style={styles.label}>PAY & CONFIRM</Text>
    </View>
  </TouchableOpacity>
);

export default PayAndConfirmButton;

const styles = StyleSheet.create({
  payAndConfirmButton: {
    height: vs(62), // SizedBox(height: 62)

    // No flexDirection here, so this View is a Column (RN's default).
    // With ONE child, centring on both axes looks identical either way.
    alignItems: "center", // CrossAxisAlignment.center — horizontal
    justifyContent: "center", // MainAxisAlignment.center  — vertical
    borderRadius: s(10), // BorderRadius.circular(10)
    backgroundColor: "#FF7622", // BoxDecoration(color:)
    // Note: no `width` — a Column-direction View stretches to fill its parent's
    // width by default (alignSelf: "stretch"). Flutter would need
    // `width: double.infinity` or a SizedBox.expand to get the same result.
  },
  label: {
    fontSize: s(14),
    color: "#FFFFFF",
    // NOTE (kept from your original): marginLeft on a centered single child
    // nudges the text 10px right of true center. Harmless here, but if you want
    // it dead-centre, drop this line.
    marginLeft: s(10),
  },
});
