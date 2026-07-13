// ============================================================================
// CORE UI COMPONENTS — Section 2 (learning notes)
// ----------------------------------------------------------------------------
// Everything the screen uses is imported from "react-native". Unlike the web,
// there is no <div>/<p>/<img> — RN gives you cross-platform components that map
// to real native views (UIView on iOS, android.view.View on Android).
//
// FLUTTER MENTAL MODEL: RN "components" == Flutter "widgets". But a big
// difference: in Flutter, layout + styling live on the WIDGET (constructor
// args like `padding:`, `color:`, `child:`). In RN, the element is dumb and
// you attach a separate `style={}` object to it (closer to CSS). So RN splits
// "what it is" (the JSX tag) from "how it looks" (the style object).
// ============================================================================
import {
  Alert, // Flutter: showDialog(context, AlertDialog(...))
  Button, // Flutter: ElevatedButton / TextButton
  Image, // Flutter: Image.asset(...) / Image.network(...)
  ScrollView, // Flutter: SingleChildScrollView (for a lazy list, use ListView.builder)
  StyleSheet, // Flutter: no equivalent — styling is passed inline to widget constructors
  Text, // Flutter: Text (same name!) — but styled via a `style: TextStyle(...)` arg
  Pressable, // Flutter: GestureDetector / InkWell (tap detection wrapper)
  TouchableOpacity, // Flutter: InkWell (ripple) or GestureDetector + Opacity
  Platform, // Flutter: Platform from dart:io, or Theme.of(context).platform
  View, // Flutter: Container / SizedBox — the generic layout box (like a <div>)
  ActivityIndicator, // Flutter: CircularProgressIndicator
} from "react-native";
// SafeAreaView keeps content out of the notch / status bar / home indicator.
// Flutter: the SafeArea widget does exactly this. (We import RN's from the
// community package because it handles real device insets better.)
import { SafeAreaView } from "react-native-safe-area-context";

// A screen is a React component that RETURNS JSX describing the UI.
// Flutter: this is your StatelessWidget's `Widget build(context) { return ... }`.
// The returned JSX tree == the returned widget tree.
export default function HomeScreen() {
  // Event handlers. In RN you pass a FUNCTION to onPress — you don't call it,
  // so it's `onPress={pressableClick}`, not `onPress={pressableClick()}`.
  // Flutter: identical idea — `onPressed: pressableClick` (a tear-off), not `pressableClick()`.
  const pressableClick = () => {
    Alert.alert("Pressable clicked!");
  };

  const touchableOpacityClick = () => {
    Alert.alert("TouchableOpacity clicked!");
  };

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

  return (
    // SafeAreaView is the outermost wrapper so nothing hides under the notch.
    // Flutter: SafeArea(child: ...)
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView = Flutter's SingleChildScrollView: it renders ALL children
          at once. For long/dynamic lists use <FlatList> (== ListView.builder),
          which only builds what's visible. */}
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.titleText}>Lorem Ipsum</Text>

        {/* Text can be nested; a nested <Text> inherits the parent's style and
            can add its own, and can be individually pressable.
            Flutter parallel: Text.rich / RichText with TextSpan children, where
            an inner TextSpan can carry its own style + a TapGestureRecognizer. */}
        <Text style={styles.bodyText}>
          orem Ipsum is simply dummy text of the printing and{" "}
          <Text
            style={styles.clickableText}
            onPress={() => Alert.alert("hello")}
          >
            CLICK HERE!
          </Text>{" "}
          {/* {" "} inserts an explicit space so words don't stick together
              across JSX line breaks. Flutter doesn't need this — you build the
              string/spans explicitly. */}
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since 1966, when designers at Letraset and
          James Mosley, the librarian at St Bride Printing Library in London,
          took a 1914 Cicero translation and scrambled it to make dummy text for
          Letraset&apos;s Body Type sheets. It has survived not only many
          decades, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised thanks to these sheets and
          more recently with desktop publishing software like Aldus PageMaker
          and Microsoft Word including versions of Lorem Ipsum.a
        </Text>

        {/* LEARNING NOTE: flexDirection: "horizontal" is NOT valid. Legal values
            are "row" | "column" | "row-reverse" | "column-reverse". An invalid
            value is ignored, so this falls back to the default "column".
            Flutter: you don't set a direction string — you literally pick the
            WIDGET: Row(...) vs Column(...). There is no "invalid direction" to
            get wrong, because the widget IS the direction. */}
        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            flexDirection: "horizontal",
          }}
        >
          {/* Pressable == GestureDetector: wrap anything to make it tappable. */}
          <Pressable onPress={pressableClick}>
            {/* Local image: require() bundles the asset at build time.
                Flutter: Image.asset("assets/images/dictator.jpg"). */}
            <Image
              source={require("../assets/images/dictator.jpg")}
              style={styles.imageStyle}
            ></Image>
          </Pressable>

          {/* TouchableOpacity: fades to lower opacity while pressed (Flutter: InkWell). */}
          <TouchableOpacity onPress={touchableOpacityClick}>
            {/* Remote image needs { uri } AND explicit width/height, else it
                renders 0x0. Flutter: Image.network(url) — and Flutter can size
                itself from the loaded image, whereas RN generally cannot. */}
            <Image
              source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
              style={styles.circleImage}
              blurRadius={1}
            ></Image>
          </TouchableOpacity>
        </View>

        {/* Built-in Button: quick but barely styleable. Flutter: ElevatedButton. */}
        <Button title="Click me" onPress={checkPlatform} />

        {/* Loading spinner. Flutter: CircularProgressIndicator. */}
        <ActivityIndicator size="large" />

        {/* FLEX DEMO 1 — flexDirection: "row" (children left→right).
            flex: N means "take N shares of the free space" → shares 1 : 5 : 1.
            Flutter equivalent:
              Row(children: [
                Expanded(flex: 1, child: ...blue),
                Expanded(flex: 5, child: ...green),
                Expanded(flex: 1, child: ...yellow),
              ])
            So RN's `flex: N` on a child == wrapping that child in Expanded(flex: N). */}
        <View style={styles.horizontalFlex}>
          <View style={{ backgroundColor: "blue", flex: 1 }}></View>
          <View style={{ backgroundColor: "green", flex: 5 }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
        </View>

        {/* FLEX DEMO 2 — flexDirection: "column" (children top→bottom).
            Flutter: Column(children: [Expanded(flex: 1), Expanded(flex: 2), Expanded(flex: 1)]). */}
        <View style={styles.verticalFlex}>
          <View style={{ backgroundColor: "blue", flex: 1 }}></View>
          <View style={{ backgroundColor: "green", flex: 2 }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
        </View>

        {/* FLEX DEMO 3 — flexWrap: "wrap".
            Boxes have fixed width AND height (height was the missing piece — a
            <View> with no height collapses to 0px). When a row can't fit all 7,
            the extras WRAP to the next line.
            Flutter: this is the Wrap widget → Wrap(children: [...]). A plain Row
            does NOT wrap (it overflows with the yellow-black stripes), exactly
            like an RN row without flexWrap. `alignContent` below == Wrap's
            `runAlignment`. */}
        <View style={styles.wrapFlex}>
          <View style={{ backgroundColor: "blue", width: 60, height:200 }}></View>
          <View style={{ backgroundColor: "green", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "yellow", width: 60, height:200  }}></View>
          <View style={{ backgroundColor: "orange", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "purple", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "cyan", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "gold", width: 60 , height:200 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// StyleSheet.create() defines styles once, up front. Keys are camelCase
// (backgroundColor, not background-color) and numbers are unitless
// density-independent pixels (no "px") — same "logical pixel" idea as Flutter.
// KEY FLUTTER DIFFERENCE: Flutter has no central stylesheet — you pass styling
// straight into constructors (TextStyle, BoxDecoration, EdgeInsets) at the call
// site. RN keeps a CSS-like style object separate from the element. Also, RN
// styles do NOT cascade/inherit like CSS or like an inherited Theme in Flutter —
// each component only gets the style you explicitly hand it.
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // fill the whole screen (Flutter: Expanded, or a widget that fills)
    padding: 10, // Flutter: Padding(padding: EdgeInsets.all(10))
  },
  titleText: {
    // Flutter: TextStyle(fontSize: 24, fontWeight: FontWeight.bold) + textAlign on the Text widget
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "700", // keyword ("bold") or a string number — Flutter: FontWeight.w700
    textAlign: "justify",
  },
  clickableText: {
    color: "blue",
    textDecorationLine: "underline", // Flutter: TextStyle(decoration: TextDecoration.underline)
  },

  imageStyle: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center", // override the parent's cross-axis alignment for THIS item (Flutter: Align / Center around the child)
  },

  circleImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 100, // half of width/height → circle. Flutter: ClipRRect/CircleAvatar, or BoxDecoration(shape: circle)
  },

  verticalFlex: {
    backgroundColor: "red",
    height: 200, // a column needs a height for flex children to divide (Flutter: give the Column a bounded height)
    marginTop: 20,
    padding: 10,
    flexDirection: "column", // this is the DEFAULT in RN (web defaults to row). Flutter: just use Column.
  },

  horizontalFlex: {
    backgroundColor: "red",
    height: 200,
    marginTop: 20,
    padding: 10,
    flexDirection: "row", // Flutter: Row
  },

  wrapFlex: {
    backgroundColor: "red",
    flexWrap: "wrap", // THE KEY LINE: children flow onto new lines. Flutter: the Wrap widget
    alignContent: "flex-start", // how wrapped LINES pack on the cross axis. Flutter: Wrap(runAlignment: WrapAlignment.start)
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
  },
});
/*
Components / concepts covered in this section  (RN  →  Flutter):
SafeAreaView       → SafeArea
Text               → Text (+ TextStyle)
StyleSheet         → (no equivalent — inline constructor args)
Images             → Image.asset / Image.network
Button             → ElevatedButton / TextButton
Pressable          → GestureDetector
TouchableOpacity   → InkWell
ScrollView         → SingleChildScrollView (FlatList → ListView.builder)
Flex               → Expanded / Flexible
Flex direction     → Row / Column (the widget IS the direction)
Flex wrap          → Wrap
Loaders            → CircularProgressIndicator
Views              → Container / SizedBox
margin and padding → EdgeInsets (Padding widget / Container margin)
*/
