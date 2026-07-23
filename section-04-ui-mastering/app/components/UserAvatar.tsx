import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";

const UserAvatar = () => {
  return (
    <TouchableOpacity onPress={() => console.log("profile picture tapped")}>
      {/* Image: for a NETWORK image you pass source={{ uri: "..." }} — an object,
          hence the double braces (outer = JSX expression, inner = the object).
          Flutter parallel: Image.network(url). For a bundled asset you'd write
          source={require("./path.png")} instead (like an AssetImage).
          GOTCHA: network images need an explicit width/height (set in styles.avatar)
          or they collapse to 0 and don't show. */}
      <Image
        style={styles.avatar}
        source={{
          uri: "https://i0.wp.com/www.thewrap.com/wp-content/uploads/2016/05/garfield-movie.jpg?w=618&quality=89&ssl=1",
        }}
      />
    </TouchableOpacity>
  );
};

export default UserAvatar;

const styles = StyleSheet.create({
  avatar: {
    width: s(32),
    height: s(32),
    borderRadius: s(50),
  },
});
