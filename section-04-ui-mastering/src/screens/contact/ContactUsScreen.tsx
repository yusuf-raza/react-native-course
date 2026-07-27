import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import Header from "@/components/ui/Header";
import SocialSection from "./components/SocialSection";
import WhatsappIcon from "@/components/icons/WhatsappIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";
import TwitterIcon from "@/components/icons/TwitterIcon";
import TiktokIcon from "@/components/icons/TiktokIcon";
import SnapchatIcon from "@/components/icons/SnapchatIcon";

// A "screen" is just a component; only convention makes it one.
// Flutter parallel: the widget a route builds — a Scaffold's body.
const ContactUsScreen = () => {
  return (
    // SafeAreaView pads content away from the notch / home indicator.
    // Flutter parallel: SafeArea.
    <SafeAreaView style={styles.screen}>
      <Header />
      <Text style={styles.title}>Contact Us</Text>

      <View style={styles.card}>
        <Text style={styles.cardTitle}>Social Media Platforms</Text>
        {/* One component driven by props. icon={<WhatsappIcon />} passes a built
            ELEMENT as a prop — Flutter: passing a Widget into a constructor,
            e.g. `leading: Icon(...)`. Next step: replace these 5 near-identical
            tags with an array + .map(). */}
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
    // GOTCHA: "semibold" is not a valid RN fontWeight — only "normal" | "bold" |
    // "100".."900". Invalid values are ignored, so this renders normal. Use "600".
    fontWeight: "semibold",
  },
});
