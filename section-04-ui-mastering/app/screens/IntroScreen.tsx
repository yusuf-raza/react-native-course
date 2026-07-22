import React from "react";
import { View, Text, StyleSheet } from "react-native";
import AppLogo from "../components/AppLogo";
import IntroBottomRightImage from "../components/IntroBottomRightImage";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  bottomRightImage: {
    bottom: 0,
    right: 0,
    position: "absolute",
  },
});

const IntroScreen = () => {
  return (
    <View style={styles.mainContainer}>
      <AppLogo />
      <View style={styles.bottomRightImage}>
        <IntroBottomRightImage />
      </View>
    </View>
  );
};

export default IntroScreen;
