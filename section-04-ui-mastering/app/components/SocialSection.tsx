import { StyleSheet,TouchableOpacity, Text, View } from "react-native";
import React from "react";
import Svg, { Path } from "react-native-svg";


import { s, vs } from "react-native-size-matters";

// Props = a component's inputs (Flutter: constructor parameters). Here we
// DESTRUCTURE them straight out of the props object in the parameter list:
//   ({ title, icon, onclick })  ==  (props) => { const {title,icon,onclick}=props }
// title -> string, icon -> a JSX element, onclick -> a function (callback).
//
// AVOIDING PROP DRILLING:
// Before, this file forwarded `icon` DOWN into a separate <SocialCircle icon={icon}/>
// and `onclick` DOWN into a separate <ShareButton onClick={onclick}/>. Each of those
// was an extra hop that existed only to pass a prop through and re-style a circle.
// "Prop drilling" = threading a prop through intermediate components that don't
// really use it themselves, just to reach a leaf. By INLINING those two children
// here, `icon` and `onclick` are consumed at the same level they arrive — one fewer
// hop, and the two tiny files (SocialCircle.tsx, ShareButton.tsx) are deleted.
// (Flutter parallel: instead of a wrapper widget that just forwards its child/callback,
//  you build the Container + GestureDetector inline in the parent's build method.)
// Trade-off to remember: inlining reduces indirection, but if these circles are reused
// elsewhere, a shared component (or Context for deeply-nested shared state) is the fix
// instead — prop drilling only hurts when the chain is long and the middle links are dumb.
const SocialSection = ({ title, icon, onclick }) => {
  return (
    <View style={styles.row}>
      <View style={styles.labelGroup}>
        {/* Was: <SocialCircle icon={icon}/>. Now inlined — the styled circle
            renders `icon` directly as its child. {icon} between the tags means
            "render this JSX element as the View's child" (Flutter: a Container
            with a child Widget); the braces are required so `icon` is the VALUE,
            not the literal text "icon". */}
        <View style={styles.circle}>{icon}</View>
        {/* {title}: the braces drop from JSX-text back into JS so the prop's
            VALUE is rendered. Bare `title` would print the literal word "title". */}
        <Text style={styles.label}>{title}</Text>
      </View>

      {/* Was: <ShareButton onClick={onclick}/>. Now inlined — the callback goes
          straight to onPress, so the extra onclick -> onClick rename hop is gone.
          onPress is RN's tap handler (Flutter: GestureDetector/InkWell onTap);
          `onClick` is a web/DOM name and does nothing on TouchableOpacity.
          Pass the function itself: onPress={onclick} (runs on tap).
          onPress={() => onclick} would be a BUG — a fn that returns onclick but
          never calls it; onPress={() => onclick()} also works (wraps + calls). */}
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
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#E4E6E8",
    paddingVertical: vs(15),
  },
  labelGroup: {
    flexDirection: "row",
    alignItems: "center",
  },
  label: {
    fontSize: s(12),
    color: "#8083A3",
    lineHeight: s(18),
    marginStart: 20,
  },

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
