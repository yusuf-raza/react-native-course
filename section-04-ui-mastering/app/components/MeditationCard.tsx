import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions, // ← now unused (see the note below). Safe to delete from this list.
} from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import VideoLogo from "./VideoLogo";

// ─────────────────────────────────────────────────────────────────────────────
// LESSON: why this "measure the screen yourself" approach was dropped.
//
// const deviceWidth = Dimensions.get("window").width;
// const cardWidth   = (deviceWidth - s(35) * 3) / 2;
// ...then: width: s(cardWidth)
//
// Three problems, worth remembering:
//
// 1. DOUBLE SCALING (the one that broke the grid on a real phone).
//    s(n) from size-matters means "n was measured on a 350pt-wide design, scale
//    it to this screen" → s(n) = (deviceWidth / 350) * n. So s() belongs on
//    DESIGN CONSTANTS only. `cardWidth` was already computed from the REAL
//    device width, so wrapping it in s() scaled a correct number a second time.
//    Result: the leftover gap between the two cards swung from ~86pt on a 320pt
//    screen down to ~13pt on a 412pt screen — "the grid looks different on my
//    device".
//    Rule of thumb: s() on Figma numbers, NEVER on anything derived from
//    Dimensions / useWindowDimensions.
//
// 2. The gap math described a layout that didn't exist. It assumed 3 gaps of
//    s(35), but HomeScreen actually uses marginHorizontal: s(16) + a gap in
//    columnWrapperStyle. Hand-computed widths have to be kept in sync with the
//    parent's padding by hand — they silently drift apart.
//
// 3. Dimensions.get() runs ONCE at import time, so the value is frozen. It never
//    updates on rotation, foldables, or iPad split view. (useWindowDimensions()
//    is the hook version that re-renders — but see the fix below: we don't need
//    to measure anything at all.)
//
// THE FIX: let flexbox do the measuring. See `imageContainer` at the bottom.
// Flutter parallel: you don't compute child widths inside a Row either — you
// wrap them in Expanded and let the layout engine split the free space.
// ─────────────────────────────────────────────────────────────────────────────

// This component receives data via POSITIONAL parameters (image, title, date)
// because HomeScreen calls it as MeditationCard(item.image, item.title, item.date).
// The more common React pattern is ONE props object destructured:
//   const MeditationCard = ({ image, title, date }) => { ... }
// paired with <MeditationCard image={...} title={...} date={...} /> in the parent.
// Flutter parallel: turning a widget's hardcoded values into constructor params.
const MeditationCard = (image, title, date) => {
  return (
    // ImageBackground: an image you can layer children on top of.
    // Flutter parallel: a Container with a DecorationImage, or a Stack with an
    // Image at the bottom. `style` sizes the box; `imageStyle` styles the image.
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      // Remote image: source={{ uri: <url string> }}. `image` is a bare JS
      // variable here (we're inside an object literal → already in JS-land, so
      // no quotes and no {} around it — unlike JSX children such as {title}).
      // Flutter parallel: Image.network(image).
      source={{ uri: image }}
    >
      <View style={styles.overlay} />

      <View style={styles.liveBox}>
        <Text style={styles.liveText}>Live</Text>
      </View>

      <View style={styles.bottomLeftBox}>
        <Text style={styles.titleText}>{title}</Text>

        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <VideoLogo style={styles.videoIcon} />
          <Text style={styles.date}>{date}</Text>
        </View>
      </View>
    </ImageBackground>
  );
};

export default MeditationCard;

const styles = StyleSheet.create({
  image: {
    height: "100%",
    width: "100%",
    resizeMode: "cover",
    opacity: 0.7,
  },

  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  // THE CARD BOX. flex + aspectRatio work as a PAIR here — neither does the job
  // on its own. This is what makes the grid identical on every device.
  imageContainer: {
    // aspectRatio = width / height. It's a RATIO, not a size: it can only turn
    // one known dimension into the other. flex:1 below is what supplies the
    // known width; aspectRatio then derives the height from it.
    // NOTE: the original design was 137 x 161. You're using 140 as the height,
    // so the cards render slightly less tall than the mockup — fine if that was
    // on purpose, worth a second look if it wasn't.
    // Flutter parallel: AspectRatio(aspectRatio: 137 / 140, child: ...).
    aspectRatio: 137 / 140,
    borderRadius: s(12),

    // flex: 1 → "take an equal share of the free space in this row". FlatList's
    // columnWrapperStyle makes each row a flexDirection:"row" container, so the
    // 2 cards split whatever is left after the gap. No screen measuring needed,
    // and it stays correct on rotation for free.
    // Flutter parallel: Expanded(child: ...) inside a Row.
    //
    // GOTCHA — this is why the grid rendered EMPTY when flex:1 was missing:
    // without a width and without flex, flexbox sizes a box to its CONTENT. But
    // every child in here is absolutely positioned (overlay / liveBox /
    // bottomLeftBox), and absolute children are out of flow — they contribute
    // ZERO to the parent's size. So width became 0, aspectRatio turned that into
    // height 0, and 100 invisible 0x0 cards were rendered.
    // Flutter parallel: a Stack containing only Positioned children collapses to
    // zero the same way.
    flex:1,

    // Clips the image + the rounded corners to this box.
    // Flutter parallel: ClipRRect / Container(clipBehavior: Clip.antiAlias).
    //
    // ODD-COUNT GOTCHA (not hitting you today — dummyData has 100 items, an even
    // number): with flex:1, a final lone card in a half-empty row stretches to
    // the FULL width. The usual guards are maxWidth: "48%" here, or padding the
    // data array with a blank placeholder item.
    overflow: "hidden",
  },

  liveBox: {
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    backgroundColor: "#E41111",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    top: s(6),
    right: s(6),
  },

  liveText: {
    fontSize: s(11),
    color: "#FFFFFF",
  },

  bottomLeftBox: {
    justifyContent: "center",
    position: "absolute",
    bottom: s(6),
    left: s(6),
  },

  titleText: {
    fontSize: s(12),
    fontWeight: "semibold",
    color: "#FFFFFF",
  },

  date: {
    fontSize: s(12),
    color: "#FFFFFF",
    marginLeft: s(7),
  },

  videoIcon: {
    height: vs(16),
    width: s(16),
    color: "#4A8CFF",
  },
});
