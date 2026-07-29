import { StyleSheet, Image, TouchableOpacity } from "react-native";
import { s } from "react-native-size-matters";
import React from "react";

const UserAvatar = () => {
  return (
    <TouchableOpacity onPress={() => console.log("profile picture tapped")}>
      {/* Flutter: Image.network(url). Warning: give network images a size. */}
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
