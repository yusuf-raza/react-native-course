import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ContactUsScreen from "./screens/ContactUsScreen";
  import { SafeAreaProvider } from "react-native-safe-area-context";
import HomeScreen from "./screens/HomeScreen";

export default function App() {
  return (
    // SafeAreaProvider = the PROVIDER: mounts ONCE at the app root, measures the
    // device's safe-area insets, and hands them down via React context. It adds
    // NO padding itself — the <SafeAreaView> inside ContactUsScreen is what
    // consumes these values and actually pads. No provider => consumers read 0.
    // (Optional upgrade: pass initialWindowMetrics to avoid a first-frame flicker.)
    <SafeAreaProvider>
      <HomeScreen/>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({});
