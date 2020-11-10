import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Player = ({ song }) => {
  console.log(song);
  return <Text style={styles.pageStyle}>{song.item.artistName}</Text>;
};

const styles = StyleSheet.create({
  pageStyle: {
    padding: 0,
    color: "white",
    fontSize: 10,
  },
  headerStyle: {
    padding: 0,
    color: "white",
    fontSize: 20,
  },
});

export default Player;
