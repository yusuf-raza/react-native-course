import { StatusBar } from "expo-status-bar";
import { SafeAreaProvider } from "react-native-safe-area-context";
import ContactUsScreen from "@/screens/contact/ContactUsScreen";
import HomeScreen from "@/screens/home/HomeScreen";
import PaymentScreen from "@/screens/payment/PaymentScreen";
import SplashScreenTask from "./screens/task_screens/splash_task/splash_screen";


// SafeAreaProvider supplies insets; Flutter parallel: SafeArea context.
export default function App() {
  return (
    <SafeAreaProvider>
      <SplashScreenTask />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
