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
// ----------------------------------------------------------------------------
// COMPOSITION — what this file became.
// Every demo that used to live inline here now lives in its own component under
// ./components. This screen is now just a LIST OF COMPONENTS, and it reads like
// a table of contents for the section. That's the goal of extraction: the
// parent describes WHAT is on screen, each child owns HOW it works.
//
// Notice what disappeared from this file along with the JSX:
//   - the imports (Button, Image, Modal, TextInput, Dimensions, s/vs, ...)
//   - the state (count, modalVisible, name/email/number)
//   - the handlers (pressableClick, checkPlatform, increaseCount, ...)
//   - all the styles except `safeArea`
// Each of those moved to the ONE component that uses it. Nothing here is
// shared, so nothing here needs to stay.
//
// Flutter parallel: identical to refactoring a 600-line build() into a Column
// of small widgets. And because each demo's state moved down with it, a tap on
// the counter now rebuilds only <Counter />, not this whole screen — the same
// payoff as pushing a StatefulWidget down the tree instead of calling setState
// at the top of the page.
// ============================================================================
import {
  ScrollView, // Flutter: SingleChildScrollView (for a lazy list, use ListView.builder)
  StyleSheet, // Flutter: no equivalent — styling is passed inline to widget constructors
} from "react-native";
// SafeAreaView keeps content out of the notch / status bar / home indicator.
// Flutter: the SafeArea widget does exactly this. (We import RN's from the
// community package because it handles real device insets better.)
import { SafeAreaView } from "react-native-safe-area-context";

// Your components. The import name is YOUR choice — `export default` doesn't
// export a name, so the importer picks one. Convention: match the filename and
// always Capitalize it. That capital letter is not cosmetic — JSX treats a
// lowercase tag (<view />) as a built-in host element and a Capitalized tag
// (<TapImages />) as your component. Lowercase it and React silently looks for
// a native "tapImages" view and fails.
// Flutter parallel: `import 'components/counter.dart';` — except Dart imports
// the file and you refer to the class by its real name; here the binding is
// positional, so nothing stops you writing `import Foo from "./components/Counter"`.
import TopSection from "./components/TopSection";
import TapImages from "./components/TapImages";
import PlatformInfo from "./components/PlatformInfo";
import FlexDemos from "./components/FlexDemos";
import SizingBox from "./components/SizingBox";
import DimensionsInfo from "./components/DimensionsInfo";
import Counter from "./components/Counter";
import ModalDemo from "./components/ModalDemo";
import LearnMore from "./components/LearnMore";
import ControlledForm from "./components/ControlledForm";

// A screen is a React component that RETURNS JSX describing the UI.
// Flutter: this is your StatelessWidget's `Widget build(context) { return ... }`.
// The returned JSX tree == the returned widget tree.
export default function HomeScreen() {
  return (
    // SafeAreaView is the outermost wrapper so nothing hides under the notch.
    // Flutter: SafeArea(child: ...)
    <SafeAreaView style={styles.safeArea}>
      {/* ScrollView = Flutter's SingleChildScrollView: it renders ALL children
          at once. For long/dynamic lists use <FlatList> (== ListView.builder),
          which only builds what's visible. */}
      <ScrollView showsVerticalScrollIndicator={true}>
        {/* Self-closing tags: <TopSection /> is shorthand for
            <TopSection></TopSection>. Use it whenever a component has no
            children. Flutter parallel: `TopSection()` in a children: [] list —
            and note these take no arguments yet. The next lesson is PROPS,
            which are the constructor arguments: <Counter start={5} /> ≈
            Counter(start: 5). Until then each component is fully self-contained. */}
        <TopSection />

        {/* Tappable images: Pressable + TouchableOpacity, local + remote. */}
        <TapImages />

        {/* Platform module dialog + an ActivityIndicator. */}
        <PlatformInfo />

        {/* The three flexbox demos: row, column, wrap. */}
        <FlexDemos />

        {/* Percentage sizing vs scaled sizing (react-native-size-matters). */}
        <SizingBox />

        {/* window vs screen dimensions, printed. */}
        <DimensionsInfo />

        {/* useState demo — owns its own `count`. */}
        <Counter />

        {/* Modal + its trigger button, EvilIcons, and UNCONTROLLED inputs. */}
        <ModalDemo />

        {/* ImageBackground with content stacked on top. */}
        <LearnMore />

        {/* CONTROLLED inputs — compare against the ones inside <ModalDemo />. */}
        <ControlledForm />
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
//
// Only `safeArea` is left: every other style moved into the component that used
// it. Because RN styles don't cascade, a style is only ever useful to the JSX
// that names it — so it belongs in that file. A style used by MANY components
// is the exception; that's when you'd make a shared styles/theme module
// (Flutter parallel: ThemeData / a constants file).
const styles = StyleSheet.create({
  safeArea: {
    flex: 1, // fill the whole screen (Flutter: Expanded, or a widget that fills)
    padding: 10, // Flutter: Padding(padding: EdgeInsets.all(10))
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
Platform           → Platform (dart:io) or Theme.of(context).platform
Positioning         → Stack + Positioned
Dimensions         → MediaQuery.of(context).size
Responsive sizing   → MediaQuery.of(context).size + LayoutBuilder
size-matters s/vs  → (no built-in) ~ flutter_screenutil .w / .h / .sp
Percentage sizes   → FractionallySizedBox(widthFactor / heightFactor)
useState / Hooks   → StatefulWidget State field + setState()
Modal              → showDialog(...) / showModalBottomSheet(...) / Navigator.pop(context)
Expo icons           → flutter_vector_icons package
ImageBackground     → Container with BoxDecoration(image: DecorationImage(...))
Custom components   → your own StatelessWidget / StatefulWidget subclasses

*/
