import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import VideoLogo from "@/components/icons/VideoLogo";

// NOT idiomatic: this takes POSITIONAL params because HomeScreen calls it as
// MeditationCard(item.image, ...). The React way is one destructured props
// object + <MeditationCard image={...} /> in the parent.
// Flutter parallel: turning hardcoded values into named constructor params.
const MeditationCard = (image, title, date) => {
  return (
    // ImageBackground = an image you can layer children over.
    // Flutter parallel: Container(decoration: DecorationImage) or a Stack.
    // `style` sizes the box, `imageStyle` styles the image itself.
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
      // Inside an object literal we're already in JS, so `image` needs no braces
      // — unlike JSX children such as {title}. Flutter: Image.network(image).
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

  // Spread shorthand for top/right/bottom/left: 0 + position:"absolute".
  // Flutter parallel: Positioned.fill.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  imageContainer: {
    // aspectRatio is a RATIO, not a size — it turns one known dimension into the
    // other. flex:1 supplies the width, aspectRatio derives the height.
    // Flutter parallel: AspectRatio(aspectRatio: 137 / 140).
    aspectRatio: 137 / 140,
    borderRadius: s(12),

    // flex:1 → take an equal share of the row's free space, so the 2 cards are
    // always equal on any screen. Flutter parallel: Expanded inside a Row.
    //
    // GOTCHA: without flex:1 the grid rendered EMPTY. Flexbox sizes a box to its
    // content, but every child here is position:"absolute" and therefore out of
    // flow, contributing zero — so width became 0, aspectRatio made height 0.
    // Flutter parallel: a Stack of only Positioned children collapses the same way.
    //
    // Related rule: s() is for design constants only, NEVER for values derived
    // from Dimensions — that double-scales and the layout drifts per device.
    flex:1,

    // Clips image + rounded corners. Flutter parallel: ClipRRect.
    // ODD-COUNT GOTCHA: with flex:1 a lone card in a half-empty last row
    // stretches full width. Guard with maxWidth:"48%" or pad the data array.
    overflow: "hidden",
  },

  liveBox: {
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    backgroundColor: "#E41111",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute", // Flutter parallel: Positioned(top:, right:)
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
    // GOTCHA: "semibold" is not a valid RN fontWeight; use "600".
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
