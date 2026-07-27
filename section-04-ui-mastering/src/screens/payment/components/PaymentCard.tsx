import { StyleSheet, Text, View } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";

// React calls a component with ONE props object, never positional args — hence
// the destructuring. `icon: Icon` renames the prop to a Capitalized local name
// because JSX reads lowercase tags (<icon />) as built-in host elements.
// Flutter parallel: props ≈ named constructor params.
const PaymentCard = ({ icon: Icon, title }) => {
  return (
    <View style={styles.paymentTypeContainer}>
      <View style={styles.paymentTypeIcon}>
        {/* {icon} rendered nothing — a bare function isn't a valid React child.
            <Icon /> invokes it and produces an element. */}
        <Icon />
      </View>

      {/* Braces drop from JSX text back into JS. Without them RN throws
          "Text strings must be rendered within a <Text> component". */}
      <Text style={styles.paymentTextStyle}>{title}</Text>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  paymentTypeContainer: {
    alignItems: "center",
    // GOTCHA: `color` only applies to Text in RN — it's a no-op on a View.
    color: "red",
  },
  paymentTypeIcon: {
    backgroundColor: "#F0F5FA",
    width: s(85),
    height: s(72),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(9.6),
  },
  paymentTextStyle: {
    color: "#464E57",
    fontSize: s(14),
    marginTop: s(4),
  },
});
