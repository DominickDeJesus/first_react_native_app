import React, { useContext, useState, useEffect } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../context/AppContext";
import Player from "../components/Player";
const PlayPage = () => {
  const { search, setSearch, results, setResults } = useContext(AppContext);

  return (
    <View style={styles.container}>
      <Text style={styles.headerStyle}>{search}</Text>
      {results?.results && (
        <FlatList
          data={results.results}
          renderItem={(song) => {
            return <Player song={song} />;
          }}
          keyExtractor={(item) => String(item.trackId)}
        />
      )}
    </View>
  );
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
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#24243e",
    height: "100%",
  },
});

export default PlayPage;
