import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useState } from "react";

// Declared OUTSIDE the component so it isn't rebuilt on every render.
// Flutter parallel: `static const tabs = ["Live", "Recorded"];`
const tabs = ["Live", "Recorded"];

const TopTabs = () => {
  // useState = memory that survives re-renders. "Live" is only the INITIAL
  // value; the setter both stores and schedules a re-render.
  // Flutter parallel: a StatefulWidget field + setState() in one call —
  // setActiveTab("Recorded") == `setState(() => activeTab = "Recorded")`.
  // GOTCHA: never reassign activeTab directly; nothing would re-render.
  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {/* .map() builds elements from an array.
          Flutter parallel: tabs.map((t) => Widget(...)).toList() */}
      {tabs.map((tabName) => {
        // Recomputed every render, so it always reflects current state.
        const isActive = activeTab == tabName;
        return (
          // `key` is required on elements returned from .map(). Flutter parallel:
          // Key in a list. Must be unique among siblings and tied to the item,
          // not the array index.
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

  // flex:1 on both tabs splits the row evenly.
  // Flutter parallel: Expanded inside a Row.
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
    // GOTCHA: "semibold" is not valid in RN — only "normal" | "bold" |
    // "100".."900". Invalid values are ignored. Use "600".
    fontWeight: "semibold",
  },

  inactiveText: {
    color: "#2C2016",
    fontSize: s(14),
    fontWeight: "300",
  },
});
