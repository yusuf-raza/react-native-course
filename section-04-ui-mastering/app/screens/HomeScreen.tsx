import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ← consumer, not Provider
import { s, vs } from "react-native-size-matters";
import React from "react";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: s(16), marginTop: vs(50) }}>
        <Text
          style={{
            fontSize: s(20),
            paddingBottom: vs(6),
            color: "#1D150F",
            fontWeight: "semibold",
          }}
        >
          Meditations
        </Text>
        <Text style={{ fontSize: s(14), color: "#2C2016" }}>
          Lorem Ipsum is simply dummy text
        </Text>
        ß
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
