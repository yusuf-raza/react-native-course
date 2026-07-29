import { StyleSheet, View } from "react-native";
import BackButton from "./BackButton";
import UserAvatar from "./UserAvatar";
import React from "react";

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
    justifyContent: "space-between",
    alignItems: "center",
    // Flutter: Row; RN View defaults to a Column.
    flexDirection: "row",
  },
});
