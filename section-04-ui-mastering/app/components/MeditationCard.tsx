import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  Dimensions,
} from "react-native";
import { s, vs } from "react-native-size-matters";
import React from "react";
import VideoLogo from "./VideoLogo";

// Dimensions.get("window").width = current screen width in px.
// Flutter parallel: MediaQuery.of(context).size.width.
const deviceWidth = Dimensions.get("window").width;

// Compute a card width so two cards + the gaps fit the row.
// (screen width - 3 gaps of s(35)) / 2 columns.
const cardWidth = (deviceWidth - s(35) * 3) / 2;

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

  imageContainer: {
    height: s(161),
    width: s(cardWidth),
    borderRadius: s(12),
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
