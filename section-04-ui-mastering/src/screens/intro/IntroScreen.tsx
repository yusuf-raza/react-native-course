import React from "react";
import { View, StyleSheet } from "react-native";
import AppLogo from "@/components/icons/AppLogo";
import IntroBottomRightImage from "@/components/icons/IntroBottomRightImage";

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  // Flutter parallel: Positioned inside a Stack.
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
