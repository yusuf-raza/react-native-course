import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AddIcon from "@/components/icons/AddIcon";

// `() => void` IS Dart's VoidCallback; non-optional here == `required`.
type Props = {
  onPress: () => void;
};

// RN ships no ElevatedButton/OutlinedButton — no styled button widget exists at
// all, so you compose Touchable + View + Text yourself.
// Flutter parallel: InkWell(onTap:) wrapping a Container wrapping a Row.
const AddNewButton = ({ onPress }: Props) => (
  // TouchableOpacity ≈ InkWell/GestureDetector, but it FADES the child while
  // pressed instead of drawing a ripple. `Pressable` is the flexible one.
  <TouchableOpacity onPress={onPress}>
    <View style={styles.addButton}>
      <AddIcon />
      <Text style={styles.label}>ADD NEW</Text>
    </View>
  </TouchableOpacity>
);

export default AddNewButton;

const styles = StyleSheet.create({
  addButton: {
    flexDirection: "row", // makes this View a Row
    height: vs(62), // SizedBox(height: 62)
    borderColor: "#F0F5FA", // RN splits Border.all(color:, width:)
    borderWidth: s(1), // into two flat keys
    // GOTCHA: flexDirection:"row" flips the axes, so alignItems is now VERTICAL
    // and justifyContent horizontal — same trap as swapping Column for Row.
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(10), // BorderRadius.circular(10)
  },
  label: {
    fontSize: s(14),
    color: "#FF7622",
    marginLeft: s(10), // spacing from the icon; Flutter: SizedBox(width: 10)
  },
});
