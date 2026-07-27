import { StyleSheet, Text, View } from "react-native";
import { s, vs } from "react-native-size-matters";

import React from "react";

// React always calls a component with ONE object (props) — never positional args.
// So we destructure instead of writing (icon, title).
// `icon: Icon` renames the prop to a Capitalized local name: JSX treats lowercase
// tags (<icon />) as built-in host elements and Capitalized ones (<Icon />) as
// your own components.
// Flutter parallel: props ≈ named constructor params. And `icon: CashIcon` (no
// parens) in the data file is like storing a WidgetBuilder/Type rather than a
// built widget — so you still have to "build" it here with <Icon />.
const PaymentCard = ({ icon: Icon, title }) => {
  return (
    <View style={styles.paymentTypeContainer}>
      <View style={styles.paymentTypeIcon}>
        {/* {icon} alone rendered nothing: a bare function isn't a valid React
            child. <Icon /> actually invokes it and produces an element. */}
        <Icon />
      </View>

      {/* {} = escape hatch back into JS. Without it, JSX children are literal
          text — and RN throws "Text strings must be rendered within a <Text>". */}
      <Text style={styles.paymentTextStyle}>{title}</Text>
    </View>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  paymentTypeContainer: {
    alignItems: "center",
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
