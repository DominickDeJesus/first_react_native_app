import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../../context/AppContext";

const ListScreen = () => {
  const { search, setSearch } = useContext(AppContext);
  return <Text>{search}</Text>;
};

export default ListScreen;
