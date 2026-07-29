import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s } from "react-native-size-matters";
import BackButton from "@/components/ui/BackButton";
import NoCardPlaceholder from "./components/NoCardPlaceholder";
import AddNewButton from "./components/AddNewButton";
import PayAndConfirmButton from "./components/PayAndConfirmButton";
import PaymentList from "./components/PaymentList";

const PaymentScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={styles.headerStyle}>
        <BackButton />
        <Text style={styles.title}>Payment</Text>
      </View>

      <PaymentList />

      <NoCardPlaceholder />

      <AddNewButton onPress={() => console.log("add new tapped")} />

      <View style={{
        flexDirection:'row',
        alignItems:'center',
        marginVertical:s(25)
      }}>
        <Text style={{ color: "#A0A5BA", fontSize:s(14) }}>TOTAL:</Text>
        <Text style={{ color: "#181C2E", fontSize:s(30)}}>$96</Text>
      </View>
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
