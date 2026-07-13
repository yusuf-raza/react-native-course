import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
  Platform,
  View,
  ActivityIndicator,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const pressableClick = () => {
    Alert.alert("Pressable clicked!");
  };

  const touchableOpacityClick = () => {
    Alert.alert("TouchableOpacity clicked!");
  };

  const checkPlatform = () => {
    const specs = [
      `OS: ${Platform.OS}`,
      `Version: ${String(Platform.Version)}`,
      `isPad: ${String(Platform.isPad)}`,
      `isTV: ${String(Platform.isTV)}`,
      `isTesting: ${String(Platform.isTesting)}`,
      "",
      "Constants:",
      JSON.stringify(Platform.constants, null, 2),
    ].join("\n");

    Alert.alert("Platform Specs", specs);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView showsVerticalScrollIndicator={true}>
        <Text style={styles.titleText}>Lorem Ipsum</Text>
        <Text style={styles.bodyText}>
          orem Ipsum is simply dummy text of the printing and{" "}
          <Text
            style={styles.clickableText}
            onPress={() => Alert.alert("hello")}
          >
            CLICK HERE!
          </Text>{" "}
          typesetting industry. Lorem Ipsum has been the industry&apos;s
          standard dummy text ever since 1966, when designers at Letraset and
          James Mosley, the librarian at St Bride Printing Library in London,
          took a 1914 Cicero translation and scrambled it to make dummy text for
          Letraset&apos;s Body Type sheets. It has survived not only many
          decades, but also the leap into electronic typesetting, remaining
          essentially unchanged. It was popularised thanks to these sheets and
          more recently with desktop publishing software like Aldus PageMaker
          and Microsoft Word including versions of Lorem Ipsum.a
        </Text>

        <View
          style={{
            marginTop: 20,
            marginBottom: 20,
            flexDirection: "horizontal",
          }}
        >
          <Pressable onPress={pressableClick}>
            <Image
              source={require("../assets/images/dictator.jpg")}
              style={styles.imageStyle}
            ></Image>
          </Pressable>

          <TouchableOpacity onPress={touchableOpacityClick}>
            <Image
              source={{ uri: "https://picsum.photos/seed/picsum/200/300" }}
              style={styles.circleImage}
              blurRadius={1}
            ></Image>
          </TouchableOpacity>
        </View>

        <Button title="Click me" onPress={checkPlatform} />

        <ActivityIndicator size="large" />

        <View style={styles.horizontalFlex}>
          <View style={{ backgroundColor: "blue", flex: 1 }}></View>
          <View style={{ backgroundColor: "green", flex: 5 }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
        </View>

        <View style={styles.verticalFlex}>
          <View style={{ backgroundColor: "blue", flex: 1 }}></View>
          <View style={{ backgroundColor: "green", flex: 2 }}></View>
          <View style={{ backgroundColor: "yellow", flex: 1 }}></View>
        </View>

        <View style={styles.wrapFlex}>
          <View style={{ backgroundColor: "blue", width: 60, height:200 }}></View>
          <View style={{ backgroundColor: "green", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "yellow", width: 60, height:200  }}></View>
          <View style={{ backgroundColor: "orange", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "purple", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "cyan", width: 60 , height:200 }}></View>
          <View style={{ backgroundColor: "gold", width: 60 , height:200 }}></View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    padding: 10,
  },
  titleText: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "justify",
  },
  clickableText: {
    color: "blue",
    textDecorationLine: "underline",
  },

  imageStyle: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center",
  },

  circleImage: {
    width: 200,
    height: 200,
    marginTop: 20,
    alignSelf: "center",
    borderRadius: 100,
  },

  verticalFlex: {
    backgroundColor: "red",
    height: 200,
    marginTop: 20,
    padding: 10,
    flexDirection: "column",
  },

  horizontalFlex: {
    backgroundColor: "red",
    height: 200,
    marginTop: 20,
    padding: 10,
    flexDirection: "row",
  },

  wrapFlex: {
    backgroundColor: "red",
    flexWrap: "wrap",
    alignContent: "flex-start",
    flexDirection: "row",
    marginTop: 20,
    padding: 10,
  },
});
/*
SafeAreaView
Text
StyleSheet
Images
Button
Pressable
TouchableOpacity
ScrollView
*/
