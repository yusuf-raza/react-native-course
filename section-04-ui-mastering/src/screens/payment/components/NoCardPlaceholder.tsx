import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CardIcon from "@/components/icons/CardIcon";

// Empty state shown when no card is saved. No props.
// Flutter parallel: a StatelessWidget with no constructor params —
// Container(decoration: ...) wrapping a centred Column.
const NoCardPlaceholder = () => (
  <View style={styles.container}>
    {/* RN has no Column/Row widget. EVERY View is a flex container defaulting to
        flexDirection:"column" — so this View IS the Column. */}
    <CardIcon />

    {/* No DefaultTextStyle ancestor in RN: a <Text> inherits from a parent
        <Text>, never from a parent <View>. */}
    <Text style={styles.heading}>No master card added</Text>
    <Text style={styles.subtitle}>
      You can add a mastercard and save it for later
    </Text>
  </View>
);

export default NoCardPlaceholder;

// s()/vs() ≈ flutter_screenutil: s(10) is like 10.w, vs(257) like 257.h.
// StyleSheet.create builds the object once; an inline style={{...}} allocates a
// new one every render. Flutter parallel: hoisting a const TextStyle out of build().
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9", // BoxDecoration(color:)
    height: vs(257), // SizedBox(height: 257)
    justifyContent: "center", // MainAxisAlignment.center — MAIN axis (vertical)
    alignItems: "center", // CrossAxisAlignment.center — CROSS axis (horizontal)
    borderRadius: s(10), // BorderRadius.circular(10), no wrapper needed
    marginBottom: s(15), // EdgeInsets.only(bottom: 15)
  },
  heading: {
    color: "#32343E",
    fontWeight: "bold", // FontWeight.bold, but RN wants the STRING "bold"
    fontSize: s(19),
    marginTop: s(20), // Text takes margin directly in RN; Flutter needs Padding
  },
  subtitle: {
    color: "#2D2D2D",
    fontSize: s(15),
    paddingHorizontal: s(30), // EdgeInsets.symmetric(horizontal: 30)
    marginTop: s(6),
    // GOTCHA: RN lineHeight is ABSOLUTE px; Flutter's TextStyle(height:) is a
    // MULTIPLIER of fontSize. 24 here is not height: 24 there.
    lineHeight: s(24),
    letterSpacing: 0.5,
    textAlign: "center", // TextAlign.center
  },
});
