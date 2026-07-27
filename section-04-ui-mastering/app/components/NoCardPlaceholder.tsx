import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CardIcon from "./CardIcon";

// Empty-state card shown when the user has no saved card.
// Takes no props — it renders the same thing every time. In Flutter this would
// be a StatelessWidget with no constructor params.
//
// The same widget in Flutter, for shape comparison:
//   Container(                            <- <View style={styles.container}>
//     decoration: BoxDecoration(...),
//     child: Column(                      <- NOT written here: see note below
//       mainAxisAlignment: MainAxisAlignment.center,      <- justifyContent
//       crossAxisAlignment: CrossAxisAlignment.center,    <- alignItems
//       children: [CardIcon(), Text(...), Text(...)],
//     ),
//   )
const NoCardPlaceholder = () => (
  <View style={styles.container}>
    {/* There is no Column/Row widget in RN. EVERY View is already a flex
        container and defaults to flexDirection: "column" — so this View *is*
        the Column. You only add a style when you want a Row
        (flexDirection: "row", see AddNewButton). */}
    <CardIcon />

    {/* Text ≈ Flutter's Text. Difference: there's no DefaultTextStyle ancestor
        handing styles down the tree — a <Text> only inherits from a parent
        <Text>, never from a parent <View>. */}
    <Text style={styles.heading}>No master card added</Text>
    <Text style={styles.subtitle}>
      You can add a mastercard and save it for later
    </Text>
  </View>
);

export default NoCardPlaceholder;

// These were inline style objects on the screen. Moved into StyleSheet.create
// to match every other component in this folder. It also matters for perf: an
// inline `style={{...}}` allocates a BRAND NEW object on every render, so React
// sees a changed prop and can't skip the re-render. StyleSheet.create builds the
// object once. Flutter parallel: hoisting a `const` TextStyle out of build().
// s() / vs() come from react-native-size-matters and are this repo's answer to
// flutter_screenutil: s(10) ≈ 10.w (scales with width), vs(257) ≈ 257.h.
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9", // Container(color:) / BoxDecoration(color:)
    height: vs(257), // SizedBox(height: 257)
    justifyContent: "center", // MainAxisAlignment.center  — MAIN axis (vertical here)
    alignItems: "center", // CrossAxisAlignment.center — CROSS axis (horizontal here)
    borderRadius: s(10), // BorderRadius.circular(10), no BoxDecoration wrapper needed
    marginBottom: s(15), // Container(margin: EdgeInsets.only(bottom: 15))
  },
  heading: {
    color: "#32343E", // TextStyle(color:)
    fontWeight: "bold", // FontWeight.bold — but RN wants the literal STRING "bold"
    fontSize: s(19),
    marginTop: s(20), // Text itself accepts margin in RN; in Flutter you'd have to
    // wrap it in a Padding or SizedBox
  },
  subtitle: {
    color: "#2D2D2D",
    fontSize: s(15),
    paddingHorizontal: s(30), // EdgeInsets.symmetric(horizontal: 30)
    marginTop: s(6),
    lineHeight: s(24), // TextStyle(height:) — GOTCHA: RN's lineHeight is an
    // ABSOLUTE pixel value, Flutter's `height` is a
    // MULTIPLIER of fontSize. 24 here ≠ height: 24 there.
    letterSpacing: 0.5, // same name, same meaning in Flutter
    textAlign: "center", // TextAlign.center
  },
});
