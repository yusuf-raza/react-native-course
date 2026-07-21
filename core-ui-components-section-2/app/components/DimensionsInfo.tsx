// DimensionsInfo — reading the device size and printing it.
import { Dimensions, Text, View } from "react-native";

const DimensionsInfo = () => {
  // Dimensions.get(...) returns the device size in density-independent pixels.
  // "window" vs "screen" — a subtle but important distinction:
  //   "window" = the area your app can actually draw in (on Android this EXCLUDES
  //              the status bar / navigation bar). This is what you usually want.
  //   "screen" = the full physical display, bars included. So on Android screen >= window;
  //              on iOS the two are typically equal.
  // Flutter parallel: MediaQuery.of(context).size ≈ "window" (the usable area);
  // the full display maps to the physical screen via MediaQueryData.padding/viewInsets.
  // GOTCHA: this reads the size ONCE at render. It does NOT auto-update on rotation
  // or split-screen. To react to changes, use the useWindowDimensions() hook instead
  // (Flutter: MediaQuery already rebuilds you on size changes automatically).
  const windowWidth = Dimensions.get("window").width;
  const windowHeight = Dimensions.get("window").height;
  const screenWidth = Dimensions.get("screen").width;
  const screenHeight = Dimensions.get("screen").height;

  return (
    // Render the Dimensions values computed above. {expr} embeds a JS value
    // into JSX — like Dart's "$var" / "${expr}" string interpolation, except
    // here each value must live inside a <Text> (you can't put a bare number
    // directly under a <View>; RN only renders strings/numbers inside <Text>).
    // Compare "window" vs "screen" here on Android and you'll see them differ.
    <View>
      <Text>Window width: {windowWidth}</Text>
      <Text>Window height: {windowHeight}</Text>
      <Text>Screen width: {screenWidth}</Text>
      <Text>Screen height: {screenHeight}</Text>
    </View>
  );
};

export default DimensionsInfo;
