// Counter — the useState lesson, now living in its own component.
//
// THE KEY WIN OF EXTRACTING A STATEFUL COMPONENT: `count` and its setter moved
// in here with the JSX. Now a keystroke on this counter re-renders ONLY this
// component, not the whole screen. State belongs at the lowest component that
// needs it ("colocating state").
// Flutter parallel: this is precisely why you pull a StatefulWidget out of a
// big build() — so setState() rebuilds a small subtree instead of the page.
import { Button, Text, View } from "react-native";
// useState: React's built-in HOOK for local component state. A "hook" is a
// special function (name always starts with "use") that lets a plain function
// component remember values across re-renders and re-render when they change.
// Flutter parallel: this is what turns a StatelessWidget into a StatefulWidget —
// useState ≈ a `State` field plus setState(). Rules of hooks: only call them at
// the TOP LEVEL of the component (never inside conditions, loops, or handlers).
import { useState } from "react";

const Counter = () => {
  // useState(0) returns a 2-element array you destructure:
  //   count    = the current value (starts at the initial arg, 0)
  //   setCount = the setter — call it to update the value AND trigger a re-render.
  // You must NOT mutate `count` directly (count++ does nothing on screen) — always
  // go through setCount, the same way Flutter forces changes through setState().
  // Flutter parallel: `int count = 0;` in State + `setState(() => count++)`.
  const [count, setCount] = useState(0);

  const increaseCount = () => {
    // Passing a plain value. Works here, but note: `count` is the value captured
    // at the time this render's function was created. If you called setCount twice
    // in a row, both would read the SAME stale `count` and you'd only advance by 1.
    // SAFER pattern (updater form): setCount(prev => prev + 1) — RN hands you the
    // latest value. Flutter's setState reads the live field, so it doesn't have
    // this "stale closure" trap; hooks do, so the updater form is the habit to build.
    setCount(count + 1);
  };

  const decreaseCount = () => {
    setCount(count - 1);
  };

  return (
    // A simple counter with increase/decrease buttons. Flutter: Row(children: [...])
    // The buttons are WIRED: onPress={increaseCount/decreaseCount} call the
    // setters, which re-render this component so {count} below updates live.
    // This is the RN render loop: state changes → component re-runs → JSX
    // reflects new state, exactly like a StatefulWidget rebuilding after setState.
    <View
      style={{
        flexDirection: "row", // Flutter: Row
        alignItems: "center", // vertical center (cross axis)   → Flutter crossAxisAlignment.center
        justifyContent: "center", // horizontal center (main axis)  → Flutter mainAxisAlignment.centers
        marginTop: 20,
        height: 200,
        backgroundColor: "lightgrey", // give the row a height so the buttons can center vertically
      }}
    >
      <View
        style={{
          height: 50,
          marginRight: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="increase" onPress={increaseCount} />
      </View>

      <View
        style={{
          height: 50,
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row", // Flutter: Row
        }}
      >
        <Text
          style={{
            textAlignVertical: "center",
            fontWeight: "700",
            fontSize: 30,
          }}
        >
          {/* {count} re-reads state on every render, so the number you see
              always matches the latest value. Flutter: Text('$count'). */}
          {count}
        </Text>
      </View>

      <View
        style={{
          height: 50,
          marginLeft: 10,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Button title="decrease" onPress={decreaseCount} />
      </View>
    </View>
  );
};

export default Counter;
