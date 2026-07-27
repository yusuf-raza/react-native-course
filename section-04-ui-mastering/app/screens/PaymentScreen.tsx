import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context"; // ← consumer, not Provider
import { s } from "react-native-size-matters";
import BackButton from "../components/BackButton";
import PaymentCard from "../components/PaymentCard";
import { paymentOptions } from "../data/paymentOptionsModel";
// The three blocks you tagged now live in their own files. TouchableOpacity,
// AddIcon, CardIcon and `vs` moved with them, so they're no longer imported here.
import NoCardPlaceholder from "../components/NoCardPlaceholder";
import AddNewButton from "../components/AddNewButton";
import PayAndConfirmButton from "../components/PayAndConfirmButton";

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerStyle}>
        <BackButton />
        <Text style={styles.title}>Payment</Text>
      </View>

      {/* renderItem returns JSX — don't CALL PaymentCard(...) directly.
          A plain call happens to "work", but React never registers it as a
          component: no hooks/state of its own, and keyExtractor's key attaches
          to nothing. Unlike Flutter, `PaymentCard(...)` is NOT a constructor.
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

      {/* The screen now reads as a list of intentions instead of a wall of
          markup — this is the real payoff of extracting. Each child owns its
          own styles; the screen only owns layout and wiring. */}
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
  // addButton / payAndConfirmButton moved into their own component files.
});
