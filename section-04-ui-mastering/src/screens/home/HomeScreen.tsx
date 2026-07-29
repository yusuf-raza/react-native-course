import { Text, View, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { s, vs } from "react-native-size-matters";
import React from "react";
import TopTabs from "@/components/ui/TopTabs";
import MeditationCard from "./components/MeditationCard";
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

        {/* Flutter parallel: ListView.builder / GridView.builder. */}
        <FlatList
          data={dummyData}
          renderItem={({item})=>MeditationCard(item.image,item.title,item.date)}
          // Warning: every FlatList item needs a unique key, like Flutter Key.
          keyExtractor={(item) => item.id}
          numColumns={2} // Flutter: crossAxisCount: 2.
          showsVerticalScrollIndicator={false}
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
