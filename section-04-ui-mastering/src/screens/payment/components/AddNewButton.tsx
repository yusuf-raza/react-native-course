import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import AddIcon from "@/components/icons/AddIcon";

// Flutter parallel: required VoidCallback.
type Props = {
  onPress: () => void;
};

// Flutter: InkWell wrapping a Container and Row.
const AddNewButton = ({ onPress }: Props) => (
  // TouchableOpacity is close to InkWell; it fades while pressed.
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
    flexDirection: "row",
    height: vs(62),
    borderColor: "#F0F5FA",
    borderWidth: s(1),
    // In a Row, alignItems is vertical and justifyContent is horizontal.
    alignItems: "center",
    justifyContent: "center",
    borderRadius: s(10),
  },
  label: {
    fontSize: s(14),
    color: "#FF7622",
    marginLeft: s(10), // Flutter: SizedBox(width: 10).
  },
});
