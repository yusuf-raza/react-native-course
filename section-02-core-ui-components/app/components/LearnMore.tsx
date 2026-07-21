import React from "react";
import { View, Text, ImageBackground, Button } from "react-native";

const LearnMore = () => {
  return (
   <View style={{ width: "100%", marginTop: 20 }}>
          {/* (Stale comment: this DOES have children now — the overlay View
              below. Worth deleting when you next touch this block.)
              Note that ImageBackground takes TWO styles: `style` sizes/positions
              the container, `imageStyle` targets the image itself (that's why
              borderRadius has to go on imageStyle to actually round the photo).
              Flutter parallel: `style` ≈ the Container's own constraints,
              `imageStyle` ≈ the DecorationImage inside its BoxDecoration.
              Children stack ON TOP of the image — so ImageBackground is really a
              two-layer Stack with the image pinned behind. */}
          <ImageBackground
            source={require("../../assets/images/background.jpg")}
            style={{ width: "100%", height: 150, marginTop: 20 }}
            imageStyle={{ borderRadius: 16 }}
          >
            <View
              style={{
                height: "100%",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "rgba(0,0,0,0.35)",
                borderRadius: 16,
                padding: 16,
              }}
            >
              <Text style={{ color: "white", fontSize: 24, fontWeight: "700" }}>
                Welcome
              </Text>
              <Text style={{ color: "white", marginTop: 8 }}>
                This sits on top of the background image.
              </Text>
              <Button title="Learn more" onPress={() => {}} />
            </View>
          </ImageBackground>
        </View>
  );
};


export default LearnMore;