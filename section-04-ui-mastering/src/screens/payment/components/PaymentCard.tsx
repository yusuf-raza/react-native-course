import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";
import CheckIcon from "@/components/icons/CheckIcon";

import type { ComponentType } from "react";
import type { SvgProps } from "react-native-svg";

type PaymentCardProps = {
  icon: ComponentType<SvgProps>;
  title: string;
  isSelected?: boolean;
  onPress: () => void;
};

// Flutter parallel: named constructor parameters.
const PaymentCard = ({
  icon: Icon,
  title,
  isSelected = false,
  onPress,
}: PaymentCardProps) => {
  return (
    // RN onPress is Flutter's onTap.
    <TouchableOpacity onPress={() => onPress()}>
      {/* View is close to Flutter's Container. */}
      <View style={styles.paymentTypeContainer}>
        <View
          style={[
            isSelected
              ? styles.selectedPaymentTypeIcon
              : styles.paymentTypeIcon,
          ]}
        >
          {/* Icon is a component type, like a Flutter WidgetBuilder. */}
          <Icon />
          {isSelected ? (
            <View style={styles.checkMarkContainer}>
              <CheckIcon />
            </View>
          ) : null}
        </View>

        <Text style={styles.paymentTextStyle}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default PaymentCard;

const styles = StyleSheet.create({
  paymentTypeContainer: {
    alignItems: "center",
    // Warning: color does not style a View; use it on Text.
    color: "red",
  },

  checkMarkContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    width: s(24),
    height: s(24),
    backgroundColor: "#FF7622",
    alignItems: "center",
    justifyContent: "center",
    borderWidth: s(2),
    borderRadius: s(50),
    borderColor: "#FFFFFF",
  },

  paymentTypeIcon: {
    backgroundColor: "#F0F5FA",
    width: s(85),
    height: s(72),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(9.6),
  },

  selectedPaymentTypeIcon: {
    backgroundColor: "#FFFFFF",
    width: s(85),
    height: s(72),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: s(9.6),
    borderWidth: s(2),
    borderColor: "#FF7622",
  },
  paymentTextStyle: {
    color: "#464E57",
    fontSize: s(14),
    marginTop: s(4),
  },
});
