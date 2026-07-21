# Core UI Components — Section 2

A learning project from a React Native course. It's a single scrolling screen
that demonstrates React Native's core UI components, laid out with heavily
commented "learning notes" — including **Flutter parallels** throughout, since
the code is written by someone coming from Flutter.

Built with **Expo (SDK 54)** and **Expo Router**. The whole demo lives in
[`app/index.tsx`](app/index.tsx).

## Tech stack

| Piece | Version |
| --- | --- |
| Expo SDK | ~54.0 |
| React Native | 0.81.5 |
| React | 19.1.0 |
| Expo Router | ~6.0 (file-based routing) |
| TypeScript | ~5.9 |

Notable libraries: `@expo/vector-icons` (icon fonts), `react-native-size-matters`
(`s`/`vs` device scaling), `react-native-safe-area-context` (SafeAreaView).

## Getting started

```bash
npm install        # install dependencies
npm start          # start the Expo dev server (then press a / i / w)
```

Or target a platform directly:

```bash
npm run android    # open on Android emulator / device
npm run ios        # open on iOS simulator (macOS only)
npm run web        # open in the browser
```

Lint the app code:

```bash
npm run lint
```

## What the screen demonstrates

Everything renders inside one `ScrollView`. Concepts covered, with their Flutter
equivalents:

| React Native | Flutter |
| --- | --- |
| `SafeAreaView` | `SafeArea` |
| `Text` (+ nested, pressable text) | `Text` / `Text.rich` |
| `StyleSheet` | inline constructor args (`TextStyle`, `BoxDecoration`) |
| `Image` (local + remote) | `Image.asset` / `Image.network` |
| `Button` | `ElevatedButton` / `TextButton` |
| `Pressable` | `GestureDetector` |
| `TouchableOpacity` | `InkWell` |
| `ScrollView` | `SingleChildScrollView` (`FlatList` → `ListView.builder`) |
| `flex: N` | `Expanded(flex: N)` |
| `flexDirection` | `Row` / `Column` (the widget *is* the direction) |
| `flexWrap: "wrap"` | the `Wrap` widget |
| `ActivityIndicator` | `CircularProgressIndicator` |
| `View` | `Container` / `SizedBox` |
| `margin` / `padding` | `EdgeInsets` |
| `Platform` | `Platform` (dart:io) / `Theme.of(context).platform` |
| `Dimensions` | `MediaQuery.of(context).size` |
| `s()` / `vs()` (size-matters) | `flutter_screenutil` `.w` / `.h` / `.sp` |
| `"20%"` percentage sizes | `FractionallySizedBox(widthFactor / heightFactor)` |
| `useState` / hooks | `StatefulWidget` state + `setState()` |
| `Modal` | `showDialog` / `showModalBottomSheet` |
| `@expo/vector-icons` | `flutter_vector_icons` |
| `ImageBackground` | `Container` with `BoxDecoration(image: ...)` |
| `TextInput` (controlled) | `TextField` + `TextEditingController` |

The bottom of the screen has two `TextInput` blocks that contrast the two input
patterns:

- **Uncontrolled** (inside the Modal): no `value`, `onChangeText` only logs — the
  field owns its own text.
- **Controlled** (the blue box): each field pairs `value={state}` with
  `onChangeText={setter}`, so component state is the single source of truth. A
  live-echo `<Text>` below mirrors all three fields on every keystroke.

## Gotchas captured in the code

These are real traps hit while building the screen, documented inline as comments:

- **Bare strings need `<Text>`.** Any loose string/space (e.g. a stray `{" "}`)
  directly under a `<View>` throws *"Text strings must be rendered within a
  `<Text>` component"* on Android — and silently unmounts everything below it.
  Web tolerates it, so the bug only shows on device.
- **`keyboardType` ≠ capitalization.** On a phone the email field still
  auto-capitalizes; add `autoCapitalize="none"` to fix it.
- **`TextInput` values are strings.** Even with `keyboardType="numeric"`, state
  holds `"42"`, not `42` — convert with `Number()` before doing math.
- **Percentage heights need a bounded parent.** A `"30%"` height inside an
  unbounded `ScrollView` resolves against nothing and is ignored.
- **`flexDirection: "horizontal"` is invalid.** Legal values are
  `row` / `column` / `row-reverse` / `column-reverse`; anything else falls back
  to `column`.

## Project layout

```
app/
  index.tsx        # the entire Section 2 demo (start here)
  _layout.tsx      # Expo Router root layout
assets/            # local images used by the demo
AGENTS.md          # working conventions for this learning repo
```

## About this repo

This is a **learning repository** — the course-follower writes all the feature
code. Contribution conventions (comment-don't-code, Flutter-parallel style) are
described in [`AGENTS.md`](AGENTS.md).
