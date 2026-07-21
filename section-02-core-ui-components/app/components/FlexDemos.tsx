// FlexDemos — the three flexbox lessons (row / column / wrap) in one component.
//
// GROUPING CHOICE: these three could each be their own file. They're kept
// together because they're one lesson ("how flex direction and wrapping work")
// and they're always read side by side. That's the judgement call in component
// design: split by IDEA, not by line count.
// Flutter parallel: same as deciding whether three demo Rows deserve three
// widget classes or one `_FlexDemos` widget returning a Column of them.
import { StyleSheet, View } from "react-native";

const FlexDemos = () => {
  return (
    // <> </> is a FRAGMENT — groups children without adding a native view.
    // Flutter has no equivalent; the closest is returning a Column, but a
    // Column is a real render object whereas a Fragment is free.
    <>
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
        <View style={{ backgroundColor: "blue", width: 60, height: 200 }}></View>
        <View style={{ backgroundColor: "green", width: 60, height: 200 }}></View>
        <View style={{ backgroundColor: "yellow", width: 60, height: 200 }}></View>
        <View style={{ backgroundColor: "orange", width: 60, height: 200 }}></View>
        <View style={{ backgroundColor: "purple", width: 60, height: 200 }}></View>
        <View style={{ backgroundColor: "cyan", width: 60, height: 200 }}></View>
        <View style={{ backgroundColor: "gold", width: 60, height: 200 }}></View>
      </View>
    </>
  );
};

export default FlexDemos;

const styles = StyleSheet.create({
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
