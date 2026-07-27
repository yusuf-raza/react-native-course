import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ContactUsScreen from "@/screens/contact/ContactUsScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import PaymentScreen from "@/screens/payment/PaymentScreen";

// SafeAreaProvider mounts ONCE at the root and publishes the device insets via
// React context. It adds no padding itself — the <SafeAreaView> in each screen
// is what consumes them. Gotcha: provider without consumer, or consumer without
// provider, both give zero padding.
export default function App() {
  return (
    <SafeAreaProvider>
      {/* No navigator yet, so the active screen is swapped by hand.
          HomeScreen / ContactUsScreen stay imported for that. */}
      <PaymentScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
