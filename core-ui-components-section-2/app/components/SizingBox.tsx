// SizingBox — the "three ways to size a box" lesson.
import { StyleSheet, View } from "react-native";
// react-native-size-matters: helpers that SCALE sizes to the device so a layout
// designed on one phone looks right on another (small phone vs tablet).
//   s(n)  = scale: scales n based on screen WIDTH   (good for widths, horizontal spacing, font size)
//   vs(n) = verticalScale: scales n based on screen HEIGHT (good for heights, vertical spacing)
//   (there's also ms(n, factor) = moderateScale, a softer scale that won't blow up on big screens)
// Flutter: no built-in equivalent — you'd hand-roll this off MediaQuery.of(context).size,
// or reach for a package like flutter_screenutil (.w / .h / .sp extensions).
// NOTE how the import moved WITH the component: each file declares exactly what
// it uses. index.tsx no longer imports s/vs at all. Flutter parallel: the same
// discipline as keeping imports per-file in Dart.
import { s, vs } from "react-native-size-matters";

const SizingBox = () => {
  return (
    // SIZING DEMO — three ways to size a box, side by side:
    //   1) black box: PERCENTAGE strings ("20%") = relative to the PARENT's size.
    //      Flutter: FractionallySizedBox(widthFactor: 0.2, heightFactor: 0.2).
    //   2) yellow box: s()/vs() = react-native-size-matters. Fixed design values
    //      (100) that get SCALED to the device so they grow/shrink proportionally.
    //   3) red box: same scaled approach at half the values (50) for contrast.
    // Note the parent myBox is flexDirection: "row", so these sit left→right.
    // GOTCHA: the black box's "20%" HEIGHT resolves against the parent's height —
    // but myBox has no explicit height, so it's only as tall as its content. The
    // yellow/red boxes give it height, and 20% of that is what the black box gets.
    <View style={styles.myBox}>
      <View style={{ height: "20%", width: "20%", backgroundColor: "black" }}></View>
      <View
        style={{
          height: vs(100),
          width: s(100),
          backgroundColor: "yellow",
        }}
      ></View>
      <View style={{ height: vs(50), width: s(50), backgroundColor: "red" }}></View>
    </View>
  );
};

export default SizingBox;

const styles = StyleSheet.create({
  myBox: {
    backgroundColor: "grey",
    flexDirection: "row",
    margin: 10,
  },
});
