import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import BackButton from "@/components/ui/BackButton";
import { paymentOptions } from "@/data/paymentOptions";
import PaymentCard from "./components/PaymentCard";
import NoCardPlaceholder from "./components/NoCardPlaceholder";
import AddNewButton from "./components/AddNewButton";
import PayAndConfirmButton from "./components/PayAndConfirmButton";

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerStyle}>
        <BackButton />
        <Text style={styles.title}>Payment</Text>
      </View>

      {/* renderItem returns JSX — don't CALL PaymentCard(...). A plain call
          "works" but React never registers it as a component, so it gets no
          hooks/state and keyExtractor's key attaches to nothing. Unlike Flutter,
          PaymentCard(...) is NOT a constructor.
          Note: comments can't sit between JSX attributes, only between children. */}
      {/* <FlatList
        data={paymentOptions}
        renderItem={({ item }) => (
          <PaymentCard icon={item.icon} title={item.title} />
        )}
        keyExtractor={(item) => item.id}
        horizontal
        contentContainerStyle={{ gap: s(16), marginTop: s(35), height: s(70) }}
      /> */}
      <NoCardPlaceholder />

      {/* The screen reads as a list of intentions instead of a wall of markup —
          the payoff of extracting. Each child owns its styles; the screen owns
          layout and wiring. */}
      <AddNewButton onPress={() => console.log("add new tapped")} />

      <PayAndConfirmButton
        onPress={() => console.log("pay and confirm tapped")}
      />
    </SafeAreaView>
  );
};

export default PaymentScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: s(18),
  },
  title: {
    fontSize: s(17),
    marginLeft: s(18),
  },

  headerStyle: {
    flexDirection: "row",
    alignItems: "center",
  },
});
