import React from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend5" },
    { name: "friend4" },
    { name: "friend3" },
    { name: "friend2" },
    { name: "friend1" },
  ];
  return (
    <FlatList
      data={friends}
      renderItem={({ item }) => {
        return <Text>{item.name}</Text>;
      }}
    ></FlatList>
  );
};

export default ListScreen;
