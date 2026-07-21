import { Text, View ,Alert} from "react-native";

const TopSection = () => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 20,
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Text style={styles.titleText}>Lorem Ipsum</Text>

      {/* Text can be nested; a nested <Text> inherits the parent's style and
                    can add its own, and can be individually pressable.
                    Flutter parallel: Text.rich / RichText with TextSpan children, where
                    an inner TextSpan can carry its own style + a TapGestureRecognizer. */}
      <Text style={styles.bodyText}>
        orem Ipsum is simply dummy text of the printing and{" "}
        <Text style={styles.clickableText} onPress={() => Alert.alert("hello")}>
          CLICK HERE!
        </Text>{" "}
        {/* {" "} inserts an explicit space so words don't stick together
                      across JSX line breaks. Flutter doesn't need this — you build the
                      string/spans explicitly. */}
        typesetting industry. Lorem Ipsum has been the industry&apos;s standard
        dummy text ever since 1966, when designers at Letraset and James Mosley,
        the librarian at St Bride Printing Library in London, took a 1914 Cicero
        translation and scrambled it to make dummy text for Letraset&apos;s Body
        Type sheets. It has survived not only many decades, but also the leap
        into electronic typesetting, remaining essentially unchanged. It was
        popularised thanks to these sheets and more recently with desktop
        publishing software like Aldus PageMaker and Microsoft Word including
        versions of Lorem Ipsum.a
      </Text>
    </View>
  );
};


export default TopSection;  

const styles = {
  titleText: {
    // Flutter: TextStyle(fontSize: 24, fontWeight: FontWeight.bold) + textAlign on the Text widget
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  bodyText: {
    fontSize: 18,
    fontWeight: "700", // keyword ("bold") or a string number — Flutter: FontWeight.w700
    textAlign: "justify",
  },
  clickableText: {
    color: "blue",
    textDecorationLine: "underline", // Flutter: TextStyle(decoration: TextDecoration.underline)
  },
};
