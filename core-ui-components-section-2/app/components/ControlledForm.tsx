// ControlledForm — the controlled-TextInput lesson.
//
// This is the clearest example of why extraction helps: three pieces of state
// (name/email/number) that ONLY this form cares about used to sit at the top of
// HomeScreen, where every keystroke re-rendered the entire screen. Now a
// keystroke re-renders just this form.
// Flutter parallel: exactly the reason you'd give a form its own StatefulWidget
// with its own TextEditingControllers instead of hanging them off the page.
import { Text, TextInput, View } from "react-native";
import { useState } from "react";

const ControlledForm = () => {
  // One piece of state per input. These back the CONTROLLED TextInputs below
  // (value={name} + onChangeText={setName}) — state is the single source of
  // truth for what each field shows. Note every value is a STRING: onChangeText
  // always hands you text, so `number` holds "42", not 42 (parse with Number()
  // if you need to do math on it).
  // Flutter parallel: each of these ≈ a TextEditingController for a TextField.
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");

  return (
    // CONTROLLED INPUTS — the real lesson. Each field pairs value={state}
    // with onChangeText={setter}, so state is the single source of truth:
    // the box only ever shows what state says. Contrast with the modal's
    // TextInputs in <ModalDemo />, which are UNCONTROLLED (no value,
    // onChangeText just logs) — they keep their own internal text you can't
    // drive from state.
    // Flutter parallel: controlled ≈ a TextField wired to a
    // TextEditingController; uncontrolled ≈ a bare TextField you only read
    // from in onChanged.
    // GOTCHA — keyboard overlap: inside a ScrollView the on-screen keyboard
    // can cover the lower fields while typing. Wrap in <KeyboardAvoidingView>
    // to lift them. Flutter mostly handles this for you via Scaffold resize.
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
        // STYLE NOTE: `(text) => setName(text)` can just be `setName` — a
        // state setter already takes the new value as its only arg, so the
        // wrapper arrow is redundant. (Flutter: a tear-off `onChanged: _setName`
        // vs `onChanged: (t) => _setName(t)`.) Same applies to the two below.
        onChangeText={(text) => setName(text)}
        value={name}
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
        // GOTCHA (real device): keyboardType only changes the KEY LAYOUT, not
        // capitalization. On a phone the keyboard still auto-capitalizes the
        // first letter → "John@..." for an email. Add autoCapitalize="none"
        // (and usually autoCorrect={false}) to stop it. This won't show on web.
        // Flutter: textCapitalization: TextCapitalization.none.
        onChangeText={(text) => setEmail(text)}
        value={email}
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
        // "numeric" still allows a decimal point and some symbols. Use
        // "number-pad" for digits-only, or "decimal-pad" for digits + one dot.
        // Either way `number` is still a STRING — convert with Number(number)
        // before doing math. Flutter: TextInputType.number / .numberWithOptions.
        keyboardType="number-pad"
        onChangeText={(text) => setNumber(text)}
        value={number}
      />
      {/* Live echo: because the inputs are controlled, this re-renders on
          every keystroke and always mirrors state. This is the payoff of the
          controlled pattern. Each {expr} must sit inside <Text> — a bare
          value under a <View> throws the "Text strings must be rendered
          within a <Text>" error you hit earlier. Flutter: Text('Name: $name ...'). */}
      <Text style={{ marginTop: 20, fontSize: 16 }}>
        Name: {name}, Email: {email}, Number: {number}
      </Text>
    </View>
  );
};

export default ControlledForm;
