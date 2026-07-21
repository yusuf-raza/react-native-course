// ModalDemo — the Modal lesson, including the trigger button that opens it.
//
// NOTE WHAT CAME ALONG: the "Show modal" <Button> is in here too, not left
// behind in index.tsx. A component should own its whole interaction — the
// trigger and the thing it triggers. If they lived in different files you'd
// have to lift `modalVisible` up to a shared parent and pass it down as props,
// which is more machinery for no gain.
// Flutter parallel: same reason you keep the button and its showDialog() call
// inside one widget rather than splitting them across two.
import { Button, Modal, Text, TextInput, View } from "react-native";
import { useState } from "react";
// MODAL — the biggest mental shift coming from Flutter. In Flutter a dialog is
// IMPERATIVE: you *call* showDialog(context, ...) from an event handler and it
// pushes a route. In RN the Modal is DECLARATIVE: it always lives in your JSX
// tree, and a piece of state (`visible`) decides whether it's on screen. You
// never "call" it — you flip a boolean and let the re-render do the work.

// @expo/vector-icons ships several icon FONT FAMILIES (EvilIcons, Ionicons,
// MaterialIcons, FontAwesome, ...). You import the family you want, then pick a
// glyph from it by `name`. Browse the full set at https://icons.expo.fyi.
// Flutter parallel: like the flutter_vector_icons / font_awesome_flutter packages —
// each family is its own class, and `name="close"` plays the role of `Icons.close`.
// GOTCHA: `name` is a plain string, so a typo silently renders nothing instead of
// failing to compile the way a bad `Icons.foo` would in Dart. (TypeScript does
// type these names, so your editor will catch it — but only if you're in a .tsx file.)
import EvilIcons from "@expo/vector-icons/EvilIcons";

const ModalDemo = () => {
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    // Keep modal closing logic in one place so both the Android back button
    // and the explicit close button reuse the same state update.
    // Flutter parallel: this is like calling `setState(() => isDialogOpen = false)`
    // before popping a dialog route.
    setModalVisible(false);
  };

  // Flutter parallel: this is the "open dialog" action, similar to
  // `showDialog(...)` or pushing a modal route.
  const openModal = () => {
    setModalVisible(true);
  };

  return (
    <>
      {/* Modal renders above the screen content when `visible` is true.
          Flutter parallel: `showDialog(...)` / `showModalBottomSheet(...)`.
          The widget is still part of the JSX tree, but it only appears when
          the state flag says it should be shown. */}
      {/* NOTE: this calls setModalVisible directly via an inline arrow, so the
          `openModal` helper above is currently unused — the close side goes
          through `closeModal`, but the open side doesn't. Swapping this to
          onPress={openModal} would make the pair symmetric. (Your call —
          leaving it as-is is also fine, an inline arrow is idiomatic RN.) */}
      <Button title="Show modal" onPress={() => setModalVisible(true)} />
      <Modal visible={modalVisible} animationType="slide" onRequestClose={closeModal}>
        {/* onRequestClose is important on Android: it handles the system back
            button, similar to dismissing a dialog route in Flutter. */}
        <Text>Modal</Text>
        {/* Flutter parallel: a dialog's close button would call Navigator.pop(context). */}
        <Button title="close modal" onPress={closeModal} />

        <EvilIcons
          name="close"
          size={24}
          color="black"
          // Flutter parallel: this is like putting an IconButton inside a dialog
          // and wiring it to Navigator.pop(context).
          onPress={closeModal}
        />

        <View
          style={{
            height: 300,
            width: "100%",
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "lightblue",
            borderRadius: 16,
            marginTop: 20,
            padding: 16,
          }}
        >
          {/* These three are UNCONTROLLED inputs — no `value` prop, onChangeText
              just logs. Compare with <ControlledForm />, where state drives what
              each box shows. Flutter parallel: a bare TextField you only read in
              onChanged, vs one wired to a TextEditingController. */}
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderRadius: 5,
              borderWidth: 1,
              width: "80%",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
            placeholder="Enter name"
            placeholderTextColor="#333"
            keyboardType="default"
            onChangeText={(text) => console.log(text)}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",
              borderRadius: 5,
              borderWidth: 1,
              width: "80%",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
            placeholder="Enter email"
            placeholderTextColor="#333"
            keyboardType="email-address"
            onChangeText={(text) => console.log(text)}
          />
          <TextInput
            style={{
              height: 40,
              borderColor: "gray",

              borderRadius: 5,
              borderWidth: 1,
              width: "80%",
              paddingHorizontal: 10,
              marginTop: 20,
            }}
            placeholder="Enter number"
            placeholderTextColor="#333"
            keyboardType="numeric"
            onChangeText={(text) => console.log(text)}
          />
        </View>
      </Modal>
    </>
  );
};

export default ModalDemo;
