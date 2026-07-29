import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";

// Flutter parallel: required VoidCallback in a named constructor.
type Props = {
  onPress: () => void;
};

const PayAndConfirmButton = ({ onPress }: Props) => (
  <TouchableOpacity onPress={onPress}>
    {/* Flutter parallel: InkWell + Container. */}
    <View style={styles.payAndConfirmButton}>
      <Text style={styles.label}>PAY & CONFIRM</Text>
    </View>
  </TouchableOpacity>
);

export default PayAndConfirmButton;

const styles = StyleSheet.create({
  payAndConfirmButton: {
    height: vs(62),
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(10),
    backgroundColor: "#FF7622",
    // Flutter parallel: width: double.infinity.
  },
  label: {
    fontSize: s(14),
    color: "#FFFFFF",
    // Warning: this margin nudges a centered label to the right.
    marginLeft: s(10),
  },
});
