import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import React from "react";
import TopTabs from "@/components/ui/TopTabs";
import MeditationCard from "./components/MeditationCard";
// Named import — braces are required because meditations.ts uses
// `export const`, not `export default`.
import { dummyData } from "@/data/meditations";

const HomeScreen = () => {
  return (
    <SafeAreaView>
      <View style={{ marginHorizontal: s(16), marginTop: vs(50) }}>
        <Text
          style={{
            fontSize: s(20),
            paddingBottom: vs(6),
            color: "#1D150F",
            fontWeight: "semibold",
          }}
        >
          Meditations
        </Text>
        <Text style={{ fontSize: s(14), color: "#2C2016" }}>
          Lorem Ipsum is simply dummy text
        </Text>
        <TopTabs />

        {/* FlatList only renders items near the viewport (virtualization).
            Flutter parallel: ListView.builder / GridView.builder. */}
        <FlatList
          data={dummyData}
          // renderItem ≈ itemBuilder. Receives { item, index }.
          // NOT idiomatic: MeditationCard is CALLED with positional args here.
          // The React way is an element with named props —
          // <MeditationCard image={item.image} ... /> — which is what lets React
          // track it and lets the component use hooks.
          renderItem={({item})=>MeditationCard(item.image,item.title,item.date)}
          // keyExtractor = FlatList's `key`. Flutter parallel: Key in a list.
          keyExtractor={(item) => item.id}
          numColumns={2} // Flutter: crossAxisCount: 2
          showsVerticalScrollIndicator={false}
          // Styles each ROW of columns (only valid when numColumns > 1).
          // gap carves a fixed channel; the cards' flex:1 splits what's left, so
          // both are always equal on any screen.
          // justifyContent here is a NO-OP — flex:1 children leave no free space
          // to distribute. It only mattered when the cards had a fixed width.
          columnWrapperStyle={
            {
              marginBottom :s(8),
              justifyContent:'space-between',
              gap :s(8)
            }
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
