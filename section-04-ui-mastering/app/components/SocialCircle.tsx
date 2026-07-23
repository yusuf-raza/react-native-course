import * as React from "react";
import { View, StyleSheet } from "react-native";
import { s } from "react-native-size-matters";
// A styled round View that renders whatever icon it's handed.
// {icon} between the tags = render the icon element as this View's child
// (Flutter: a Container with a child Widget). The `{}` is required — without
// it, `icon` would be treated as the literal text "icon".
// Alternative pattern: accept `children` and write <View>{children}</View>,
// then use it as <SocialCircle><WhatsappIcon/></SocialCircle>.
const SocialCircle = ({ icon }) => <View style={styles.circle}>{icon}</View>;

// Flutter parallel: StyleSheet.create is like defining a reusable style object
// once instead of inlining it in the widget tree. Styles are created once and
// referenced by key, so they aren't rebuilt on every render.
const styles = StyleSheet.create({
  circle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#F5F5FA",
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#E4E6E8",
    borderWidth: 1,
  },
});

export default SocialCircle;
