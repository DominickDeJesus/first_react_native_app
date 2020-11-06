import React, { useState } from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { SearchBar } from "react-native-elements";

const HomeScreen = ({ navigation }) => {
  const [search, setSearch] = useState("");

  const updateSearch = (searchVal) => {
    setSearch(searchVal);
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        padding: 0,
        marginBottom: 60,
      }}
    >
      <Text style={{ fontSize: 45, textAlign: "center" }}>TrueStan</Text>
      <SearchBar
        placeholder="Search an Artist"
        onChangeText={updateSearch}
        value={search}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
      />

      <Button
        onPress={() => {
          navigation.navigate("List");
        }}
        title="Hello"
        color="#841584"
        accessibilityLabel="Learn more about this purple button"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainerStyle: {
    backgroundColor: "white",
    padding: 0,
    margin: 7,
    borderRadius: 50,
    borderColor: "white",
  },
  containerStyle: {
    backgroundColor: "white",
    padding: 0,
    margin: 7,
    borderRadius: 50,
    borderColor: "transparent",
    borderBottomColor: "transparent",
    borderTopColor: "transparent",
  },
  inputStyle: {
    backgroundColor: "white",
    borderRadius: 50,
    borderColor: "white",
  },
});

export default HomeScreen;
