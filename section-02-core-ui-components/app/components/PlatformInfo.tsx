// PlatformInfo — the Platform module lesson + a loading spinner.
// Small components like this are normal and good: a component doesn't have to
// be big to be worth extracting, it just has to be ONE idea.
// Flutter parallel: a tiny StatelessWidget that returns a Column of two children.
import { ActivityIndicator, Alert, Button, Platform, View } from "react-native";

const PlatformInfo = () => {
  // Demonstrates the Platform module: read device/OS info and show it in a dialog.
  const checkPlatform = () => {
    const specs = [
      `OS: ${Platform.OS}`, // "ios" | "android" | "web"  (Flutter: Platform.isIOS / isAndroid)
      `Version: ${String(Platform.Version)}`, // OS version number
      `isPad: ${String(Platform.isPad)}`, // iPad-specific flag (iOS only)
      `isTV: ${String(Platform.isTV)}`,
      `isTesting: ${String(Platform.isTesting)}`,
      "",
      "Constants:",
      JSON.stringify(Platform.constants, null, 2), // full raw constants object
    ].join("\n");

    Alert.alert("Platform Specs", specs);
  };

  // A component must return ONE root element. Two siblings need a wrapper —
  // either a <View> (adds a real native view) or a FRAGMENT <>...</> (adds
  // nothing to the native tree, just satisfies the "one root" rule).
  // Flutter parallel: build() also returns a single Widget, so you reach for
  // Column/Row/Stack. RN's <> </> is the option Flutter doesn't have — a
  // grouping that costs zero layout.
  return (
    <View>
      {/* Built-in Button: quick but barely styleable. Flutter: ElevatedButton. */}
      <Button title="Click me" onPress={checkPlatform} />

      {/* Loading spinner. Flutter: CircularProgressIndicator. */}
      <ActivityIndicator size="large" />
    </View>
  );
};

export default PlatformInfo;
