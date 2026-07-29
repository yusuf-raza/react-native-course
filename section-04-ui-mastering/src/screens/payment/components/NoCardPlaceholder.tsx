import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import CardIcon from "@/components/icons/CardIcon";
import LottieView from "lottie-react-native";

// Flutter parallel: a StatelessWidget with a centered Column.
const NoCardPlaceholder = () => (
  <View style={styles.container}>
    <LottieView
      source={require("../../../components/lottie/cardLottie.json")}
      style={{ width: s(169), height: vs(107) }}
      autoPlay
      loop
    />

    <Text style={styles.heading}>No master card added</Text>
    <Text style={styles.subtitle}>
      You can add a mastercard and save it for later
    </Text>
  </View>
);

export default NoCardPlaceholder;

// s()/vs() are similar to flutter_screenutil dimensions.
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F7F8F9",
    height: vs(257),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(10),
    marginBottom: s(15),
  },
  heading: {
    color: "#32343E",
    fontWeight: "bold", // Flutter: FontWeight.bold.
    fontSize: s(19),
    marginTop: s(20),
  },
  subtitle: {
    color: "#2D2D2D",
    fontSize: s(15),
    paddingHorizontal: s(30),
    marginTop: s(6),
    // Warning: RN lineHeight is pixels; Flutter TextStyle height is a multiplier.
    lineHeight: s(24),
    letterSpacing: 0.5,
    textAlign: "center",
  },
});
