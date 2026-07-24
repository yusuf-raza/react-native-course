import { StyleSheet, Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context"; // ← consumer, not Provider
import { s, vs } from "react-native-size-matters";
import React from "react";
import TopTabs from "../components/TopTabs";
import MeditationCard from "../components/MeditationCard";
// Named import (matches `export const dummyData` in data.ts). Note the braces:
// named imports need { }, a default export would be imported without them.
import { dummyData } from "../data/data";

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

        {/* FlatList = React Native's lazy list. Flutter parallel: ListView.builder
            / GridView.builder — it only renders items near the viewport instead
            of building all 100 up front (virtualization). */}
        <FlatList
          // data: the array to render. Flutter: the itemCount source.
          data={dummyData}
          // renderItem: builds ONE card from ONE element. Flutter: itemBuilder.
          // The callback receives { item, index, ... } — we destructure `item`.
          //
          // NOTE (works, but not idiomatic): here MeditationCard is CALLED like a
          // plain function with positional args. The usual React way is to render
          // it as an element and pass named props:
          //   <MeditationCard image={item.image} title={item.title} date={item.date} />
          // Rendering as an element lets React track it and lets the component use
          // hooks (useState etc.) inside. Calling it as a function skips that.
          renderItem={({item})=>MeditationCard(item.image,item.title,item.date)}
          // keyExtractor: FlatList's version of the `key` prop — a stable unique
          // id per row (same idea as key={tabName} in TopTabs / Flutter's Key).
          keyExtractor={(item) => item.id}
          // numColumns: lay items out in a 2-col grid. Flutter: crossAxisCount: 2.
          numColumns={2}
          showsVerticalScrollIndicator={false}
          // columnWrapperStyle: style applied to each ROW of columns (only valid
          // when numColumns > 1). The row is a flexDirection:"row" container, so
          // this is where the horizontal spacing between the 2 cards is decided.
          // Flutter parallel: the Row that GridView builds for each line.
          //
          // Since MeditationCard now uses flex:1, the sizing split is:
          //   gap: s(8)  → carve out a fixed 8pt channel between the cards
          //   flex: 1    → (in the card) the 2 cards split whatever is LEFT
          // so both cards are always exactly equal, on any screen size.
          //
          // justifyContent:'space-between' is now a NO-OP and can be deleted:
          // it distributes LEFTOVER free space, but flex:1 children already
          // consume all of it, so there is nothing left to distribute. It only
          // mattered back when the cards had a hardcoded width.
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

const styles = StyleSheet.create({});
