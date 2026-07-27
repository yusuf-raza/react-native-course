import { StyleSheet, View } from "react-native";
import BackButton from "./BackButton";
import UserAvatar from "./UserAvatar";
import React from "react";

// Composition: a component built purely out of other components, no props.
// Flutter parallel: a Row containing child widgets.
const Header = () => {
  return (
    <View style={styles.header}>
      <BackButton />
      <UserAvatar />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    justifyContent: "space-between", // MainAxisAlignment.spaceBetween
    alignItems: "center", // CrossAxisAlignment.center
    flexDirection: "row", // makes this View a Row (default is column)
  },
});
