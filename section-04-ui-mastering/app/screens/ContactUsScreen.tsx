import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Header from "../components/Header";
import { s, vs } from "react-native-size-matters";
import SocialSection from "../components/SocialSection";
import WhatsappIcon from "../components/WhatsappIcon";
import InstagramIcon from "../components/InstagramIcon";
import TwitterIcon from "../components/TwittterIcon";
import TiktokIcon from "../components/TiktokIcon";
import SnapchatIcon from "../components/SnacpchatIcon";
import { SafeAreaView } from "react-native-safe-area-context"; // ← consumer, not Provider
// Screen = a full page (Flutter: like a Scaffold's body / a route's widget).
// It's just a component; nothing special makes it a "screen" other than convention
// (living in /screens and being what a navigator renders).
const ContactUsScreen = () => {
  return (
    // SafeAreaView = the CONSUMER: it reads the device insets and pads content
    // away from the notch / status bar / home indicator (Flutter: SafeArea).
    // It only works because a <SafeAreaProvider> sits at the app root (App.tsx)
    // publishing those insets via context. Provider with no consumer, OR consumer
    // with no provider, both = zero padding. Gotcha we hit: Android happened to
    // look fine at 0 (translucent status bar), but iOS slid under the notch.
    <SafeAreaView style={styles.screen}>
      <Header />
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Social Media Platforms</Text>
        {/* Reuse: ONE SocialSection component, driven by props (title / icon /
            onclick) — the whole point of this lesson. icon={<WhatsappIcon />}
            passes a rendered element AS a prop (Flutter: passing a Widget into a
            constructor, e.g. leading: Icon(...)). Next refactor step: replace
            these 5 near-identical tags with an array + .map(). */}
        <SocialSection
          title="WhatsApp"
          icon={<WhatsappIcon />}
          onclick={() => console.log("whatsapp tapped")}
        />
        <SocialSection
          title="Instagram"
          icon={<InstagramIcon />}
          onclick={() => console.log("instagram tapped")}
        />
        <SocialSection
          title="Twitter"
          icon={<TwitterIcon />}
          onclick={() => console.log("twitter tapped")}
        />
        <SocialSection
          title="TikTok"
          icon={<TiktokIcon />}
          onclick={() => console.log("tiktok tapped")}
        />
        <SocialSection
          title="Snapchat"
          icon={<SnapchatIcon />}
          onclick={() => console.log("snapchat tapped")}
        />
      </View>
    </SafeAreaView>
  );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: "white",
    marginHorizontal: s(18),
  },
  title: {
    fontSize: s(30),
    marginTop: s(16),
    paddingTop: vs(18),
  },
  card: {
    backgroundColor: "#F5F5FA",
    borderRadius: s(10),
    paddingHorizontal: s(18),
    paddingTop: vs(26),

    paddingVertical: vs(13),
    marginTop: vs(22),
  },
  cardTitle: {
    fontSize: s(16),
    // GOTCHA: "semibold" is NOT a valid RN fontWeight — RN only accepts
    // "normal" | "bold" | "100".."900". Invalid values are ignored, so this
    // renders at normal weight. Use "600" for semibold.
    fontWeight: "semibold",
  },
});
