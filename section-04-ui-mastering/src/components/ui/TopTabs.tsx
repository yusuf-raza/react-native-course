import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useState } from "react";

// Flutter parallel: a static const list.
const tabs = ["Live", "Recorded"];

const TopTabs = () => {
  // useState + setter is close to a field updated inside setState().
  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {tabs.map((tabName) => {
        const isActive = activeTab == tabName;
        return (
          <View
            style={isActive ? styles.activeTabButton : styles.inactiveTabButton}
            key={tabName}
          >
            <TouchableOpacity onPress={() => setActiveTab(tabName)}>
              <Text style={isActive ? styles.activeText : styles.inactiveText}>
                {tabName}
              </Text>
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default TopTabs;

const styles = StyleSheet.create({
  container: {
    height: vs(40),
    backgroundColor: "#F5F5F4",
    borderRadius: s(12),
    marginTop: vs(16),
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    padding: s(4),
  },

  // Flutter: Expanded(flex: 1) in a Row.
  activeTabButton: {
    height: vs(32),
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: s(8),
    backgroundColor: "#75563B",
  },

  inactiveTabButton: {
    height: vs(32),
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    borderRadius: s(8),
  },

  activeText: {
    color: "#FFFFFF",
    fontSize: s(14),
    // Warning: RN has no "semibold" value; use "600".
    fontWeight: "semibold",
  },

  inactiveText: {
    color: "#2C2016",
    fontSize: s(14),
    fontWeight: "300",
  },
});
