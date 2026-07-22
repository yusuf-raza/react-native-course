import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import IntroScreen from "./screens/IntroScreen";

export default function App() {
  return (
    <>
      <IntroScreen />
      <StatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({});
