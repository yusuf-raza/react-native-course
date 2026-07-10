import {
  Alert,
  Button,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const onButtonClick = () => {
    Alert.alert("Button clicked!");
  };

  const pressableClick = () => {
    Alert.alert("Pressable clicked!");
  };

  const touchableOpacityClick = () => {
    Alert.alert("TouchableOpacity clicked!");
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
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since 1966, when designers at Letraset and James
          Mosley, the librarian at St Bride Printing Library in London, took a
          1914 Cicero translation and scrambled it to make dummy text for
          Letraset's Body Type sheets. It has survived not only many decades,
          but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised thanks to these sheets and more recently
          with desktop publishing software like Aldus PageMaker and Microsoft
          Word including versions of Lorem Ipsum.a
        </Text>

        {}

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

        <Button title="Click me" onPress={onButtonClick} />
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
