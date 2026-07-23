import { StyleSheet, View } from "react-native";
import BackButton from "./BackButton";
import UserAvatar from "./UserAvatar";
import React from "react";

// Composition: a component built purely out of other components
// (Flutter: a Row containing child widgets). No props needed here.
const Header = () => {
  return (
    // flexDirection:"row" + justifyContent:"space-between" pushes the two
    // children to opposite ends (Flutter: Row with
    // mainAxisAlignment: spaceBetween). alignItems:"center" = crossAxisAlignment.
    <View style={styles.header}>
      <BackButton />
      <UserAvatar />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
  },
});
