import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AddIcon from "./AddIcon";

// Typing props keeps `noImplicitAny` quiet and documents the contract.
// `() => void` = a callback taking nothing, returning nothing — Dart's VoidCallback.
type Props = {
  onPress: () => void;
};

// The handler comes from the parent instead of being hardcoded (the thing the
// comment in BackButton.tsx flags). Same idea as Flutter's `onPressed` param.
//
// Flutter equivalent:
//   InkWell(
//     onTap: onPress,                       <- <TouchableOpacity onPress={...}>
//     child: Container(                     <- <View style={styles.addButton}>
//       decoration: BoxDecoration(border: Border.all(...), borderRadius: ...),
//       child: Row(                         <- flexDirection: "row" on that View
//         mainAxisAlignment: MainAxisAlignment.center,
//         children: [AddIcon(), Text('ADD NEW')],
//       ),
//     ),
//   )
//
// Worth noting: RN ships no ElevatedButton/OutlinedButton. There is no styled
// button widget at all — you compose Touchable + View + Text yourself, which is
// why this file exists.
const AddNewButton = ({ onPress }: Props) => (
  // TouchableOpacity ≈ InkWell / GestureDetector. The behaviour differs: this
  // one FADES the child while pressed (think AnimatedOpacity), whereas InkWell
  // draws a ripple. RN's newer `Pressable` is the flexible one, closest to
  // GestureDetector.
  <TouchableOpacity onPress={onPress}>
    <View style={styles.addButton}>
      <AddIcon />
      <Text style={styles.label}>ADD NEW</Text>
    </View>
  </TouchableOpacity>
);

export default AddNewButton;

// Moved out of PaymentScreen's StyleSheet — styles live with the component that
// uses them, so the screen no longer carries dead style rules.
const styles = StyleSheet.create({
  addButton: {
    flexDirection: "row", // turns this View into a Row (default is "column")
    height: vs(62), // SizedBox(height: 62)
    borderColor: "#F0F5FA", // Border.all(color:) — RN splits colour and width
    borderWidth: s(1), // Border.all(width:)     into two flat keys
    alignItems: "center", // CrossAxisAlignment.center — now VERTICAL, because
    // flexDirection: "row" flipped which axis is which.
    // Same trap as swapping Column for Row in Flutter.
    justifyContent: "center", // MainAxisAlignment.center — now horizontal
    borderRadius: s(10), // BorderRadius.circular(10)
  },
  label: {
    fontSize: s(14),
    color: "#FF7622",
    marginLeft: s(10), // SizedBox(width: 10) between the icon and the label.
    // RN has no `gap`-free idiom here; margin on the child
    // is the usual move (though the parent Row does support
    // `gap` in modern RN, same as Flutter's spacing).
  },
});
