import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import VideoLogo from "@/components/icons/VideoLogo";

// Warning: positional arguments are unusual in React; Flutter uses named params.
const MeditationCard = (image: string, title: string, date: string) => {
  return (
    // Flutter: Stack over a Container with a DecorationImage.
    <ImageBackground
      style={styles.imageContainer}
      imageStyle={styles.image}
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

  // Flutter: Positioned.fill.
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0,0,0,0.45)",
  },

  imageContainer: {
    // Flutter: AspectRatio; flex: 1 is similar to Expanded.
    aspectRatio: 137 / 140,
    borderRadius: s(12),

    // Warning: absolute children have no layout size; flex: 1 gives this card width.
    flex:1,

    // Flutter: ClipRRect. An odd final item can stretch across the row.
    overflow: "hidden",
  },

  liveBox: {
    height: vs(22),
    width: s(39),
    borderRadius: s(90),
    backgroundColor: "#E41111",
    alignItems: "center",
    justifyContent: "center",
    // Flutter: Positioned(top: ..., right: ...).
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
    // Warning: RN has no "semibold" value; use "600".
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
