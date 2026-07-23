import { StyleSheet, Text, View } from "react-native";
import React from "react";
import SocialCircle from "./SocialCircle";
import ShareButton from "./ShareButton";
import { s, vs } from "react-native-size-matters";

// Props = a component's inputs (Flutter: constructor parameters). Here we
// DESTRUCTURE them straight out of the props object in the parameter list:
//   ({ title, icon, onclick })  ==  (props) => { const {title,icon,onclick}=props }
// title -> string, icon -> a JSX element, onclick -> a function (callback).
const SocialSection = ({ title, icon, onclick }) => {
  return (
    <View style={styles.row}>
      <View style={styles.labelGroup}>
        {/* Pass the icon element DOWN into SocialCircle via a named prop.
            prop syntax is name={value} (an =, never a colon). */}
        <SocialCircle icon={icon} />
        {/* {title}: the braces drop from JSX-text back into JS so the prop's
            VALUE is rendered. Bare `title` would print the literal word "title". */}
        <Text style={styles.label}>{title}</Text>
      </View>

      {/* Callback flows through: screen -> here (onclick) -> ShareButton (onClick).
          Names must match at each hop; note it's onclick here but onClick there. */}
      <ShareButton onClick={onclick} />
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
});
