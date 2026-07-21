// TapImages — the "tappable images" lesson, extracted out of index.tsx.
//
// COMPONENT EXTRACTION, THE BIG IDEA: a component is just a FUNCTION that
// returns JSX. Moving a chunk of JSX into its own function + file is the whole
// technique — nothing else changes.
// Flutter parallel: this is exactly "Extract Widget" in your IDE — pulling a
// subtree out into `class TapImages extends StatelessWidget { build(...) }`.
// The handlers (pressableClick / touchableOpacityClick) came along with the JSX
// because only this component uses them — a component should own the state and
// callbacks that only it cares about, same as keeping private methods inside a
// Flutter widget's class instead of the parent's.
import { Alert, Image, Pressable, StyleSheet, TouchableOpacity, View } from "react-native";

const TapImages = () => {
  // Event handlers. In RN you pass a FUNCTION to onPress — you don't call it,
  // so it's `onPress={pressableClick}`, not `onPress={pressableClick()}`.
  // Flutter: identical idea — `onPressed: pressableClick` (a tear-off), not `pressableClick()`.
  const pressableClick = () => {
    Alert.alert("Pressable clicked!");
  };

  const touchableOpacityClick = () => {
    Alert.alert("TouchableOpacity clicked!");
  };

  return (
    // LEARNING NOTE: flexDirection: "horizontal" is NOT valid. Legal values
    // are "row" | "column" | "row-reverse" | "column-reverse". An invalid
    // value is ignored, so this falls back to the default "column".
    // Flutter: you don't set a direction string — you literally pick the
    // WIDGET: Row(...) vs Column(...). There is no "invalid direction" to
    // get wrong, because the widget IS the direction.
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
            Flutter: Image.asset("assets/images/dictator.jpg").
            GOTCHA after extracting: the require() path is relative to THIS
            file, so it had to change from "../assets/..." to "../../assets/...".
            Flutter's asset paths are absolute from pubspec, so they never move. */}
        <Image
          source={require("../../assets/images/dictator.jpg")}
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
  );
};

export default TapImages;

// Each component file keeps its OWN StyleSheet. RN styles don't cascade, so
// there's no reason for a shared global sheet — styles live next to the JSX
// that uses them. Flutter parallel: same instinct as keeping a private
// `static const _titleStyle = TextStyle(...)` beside the widget that uses it.
const styles = StyleSheet.create({
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
});
