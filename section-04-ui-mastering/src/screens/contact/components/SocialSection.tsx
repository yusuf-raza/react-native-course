import { StyleSheet, TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";
import { s, vs } from "react-native-size-matters";

// Props destructured out of the single props object.
// Flutter parallel: named constructor parameters.
// `icon` arrives as a built ELEMENT, `onclick` as a callback.
//
// PROP DRILLING: this used to forward icon into <SocialCircle> and onclick into
// <ShareButton> — hops that existed only to pass a prop through. Inlining them
// means both are consumed where they arrive. Trade-off: inline if the piece
// isn't reused; extract a shared component if it is.
const SocialSection = ({ title, icon, onclick }) => {
  return (
    <View style={styles.row}>
      <View style={styles.labelGroup}>
        {/* Braces make `icon` the VALUE, not the literal text "icon".
            Flutter parallel: a Container with a child Widget. */}
        <View style={styles.circle}>{icon}</View>
        <Text style={styles.label}>{title}</Text>
      </View>

      {/* onPress is RN's tap handler (Flutter: onTap). GOTCHA: `onClick` is a
          web/DOM name and does nothing here. Pass the function itself —
          onPress={() => onclick} is a bug (returns it without calling). */}
      <TouchableOpacity onPress={onclick}>
        <View style={styles.shareCircle}>
          <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
            <Path
              d="M19.9999 4C19.9999 4 15.9999 5 10.9999 7C8.14778 8.14086 5.9464 9.28173 4.58143 10.0514C3.88969 10.4414 3.9668 11.4144 4.69672 11.7272L9.99994 14L12.2727 19.3032C12.5856 20.0331 13.5585 20.1103 13.9486 19.4185C14.7182 18.0535 15.8591 15.8522 16.9999 13C18.9999 8 19.9999 4 19.9999 4ZM9.99994 14L19.9999 4"
              stroke="white"
              strokeWidth={1.5}
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </Svg>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default SocialSection;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between", // MainAxisAlignment.spaceBetween
    alignItems: "center",
    borderBottomWidth: 1, // Flutter: Border(bottom: BorderSide(...))
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15), // EdgeInsets.symmetric(vertical: 15)
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: s(12),
    color: "#8083A3",
    lineHeight: s(18),
    // marginStart = start edge, flips under RTL. marginLeft would not.
    marginStart: 20,
  },

  // borderRadius = half the width → a circle.
  // Flutter parallel: BoxDecoration(shape: BoxShape.circle).
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

  shareCircle: {
    width: s(46),
    height: s(46),
    borderRadius: s(23),
    backgroundColor: "#1077AF",
    justifyContent: "center",
    alignItems: "center",
  },
});
