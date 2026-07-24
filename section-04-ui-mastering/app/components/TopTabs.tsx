import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import React, { useState } from "react";

// Plain data the component renders from. Declared OUTSIDE the component so it
// isn't recreated on every render (it never changes). Flutter: like a `const`
// list field, e.g. `static const tabs = ["Live", "Recorded"];`
const tabs = ["Live", "Recorded"];

const TopTabs = () => {
  // useState = memory that survives re-renders.
  // - "Live" is only the INITIAL value (used on the first render, then ignored).
  // - `activeTab` = current value. Never reassign it directly (activeTab = ...
  //   does nothing useful).
  // - `setActiveTab` = the setter. Calling it stores the va lue AND schedules a
  //   re-render of this component.
  // The `[a, b]` is just array destructuring: useState returns [value, setter].
  //
  // Flutter parallel: a StatefulWidget.
  //   String activeTab = "Live";            // <- the state field
  //   setState(() { activeTab = "Recorded"; }); // <- mutate + rebuild
  // Here, setActiveTab("Recorded") does BOTH steps at once (store + rebuild).
  const [activeTab, setActiveTab] = useState("Live");

  return (
    <View style={styles.container}>
      {/* .map() builds a list of elements from the array. Flutter: like
          `tabs.map((t) => Widget(...)).toList()` inside a Row's children. */}
      {tabs.map((tabName) => {
        // Re-derived on every render. Because setActiveTab triggers a re-render,
        // `activeTab` is fresh here, so `isActive` flips and the styles below
        // switch. This "recompute from state" is what makes the UI reactive.
        const isActive = activeTab == tabName;
        return (
          // `key` is required on the element returned from .map() — here it's
          // `tabName`. React uses it to track list items across renders (same
          // role as Flutter's `Key` in a list). Must be unique among siblings
          // and stable (tied to the item, not the array index).
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
    fontWeight: "semibold",
  },

  inactiveText: {
    color: "#2C2016",
    fontSize: s(14),
    fontWeight: "300",
  },
});
