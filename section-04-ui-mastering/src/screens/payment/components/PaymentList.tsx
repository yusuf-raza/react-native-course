import { StyleSheet, FlatList, View } from "react-native";
import { s, vs } from "react-native-size-matters";
import VisaIcon from "@/components/icons/VisaIcon";
import CashIcon from "@/components/icons/CashIcon";
import MastercardIcon from "@/components/icons/MastercardIcon";
import PaypalIcon from "@/components/icons/PaypalIcon";
import PaymentCard from "./PaymentCard";
import React, { useState } from "react";

const paymentOptions = [
  // Store component types, similar to Flutter WidgetBuilder values.
  { id: 1, label: "Cash", icon: CashIcon },
  { id: 2, label: "Visa", icon: VisaIcon },
  { id: 3, label: "Mastercard", icon: MastercardIcon },
  { id: 4, label: "Paypal", icon: PaypalIcon },
];

const PaymentList = () => {
  const [selectedOption, setSelectedOption] = useState("");
  return (
    <View>
      {/* Warning: keyExtractor must return a unique key, like Flutter Key. */}
      {/* Flutter parallel: horizontal ListView. */}
      <FlatList
        data={paymentOptions}
        keyExtractor={(item) => String(item.id)}
        horizontal
        renderItem={({ item }) => (
          <PaymentCard
            title={item.label}
            icon={item.icon}
            onPress={() => setSelectedOption(item.label)}
            isSelected={selectedOption === item.label}
          />
        )}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ gap: s(16), marginVertical: s(10) }}
      ></FlatList>
    </View>
  );
};

export default PaymentList;

const styles = StyleSheet.create({});
