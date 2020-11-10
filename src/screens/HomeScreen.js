import React, { useContext } from "react";
import { Text, View, StyleSheet, Button, Alert } from "react-native";
import { SearchBar } from "react-native-elements";
import { AppContext } from "../context/AppContext";
import axios from "axios";

const HomeScreen = ({ navigation }) => {
  const { search, setSearch, results, setResults } = useContext(AppContext);

  const updateSearch = (searchVal) => {
    setSearch(searchVal);
  };
  const handleAPICall = async () => {
    try {
      const resp = await axios.get(
        `https://itunes.apple.com/search?term=${search}&media=music&entity=musicTrack&song&attribute=artistTerm`
      );
      setResults(resp.data);
      navigation.navigate("Play");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View style={styles.pageStyle}>
      <Text
        style={{
          textTransform: "uppercase",
          fontSize: 55,
          textAlign: "center",
          color: "#fffaff",
        }}
      >
        TrueStan
      </Text>
      <SearchBar
        placeholder="Search an Artist"
        onChangeText={updateSearch}
        value={search}
        inputStyle={styles.inputStyle}
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        onSubmitEditing={handleAPICall}
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
    width: "90%",
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
  pageStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 0,
    marginTop: -50,
    backgroundColor: "#24243e",
    height: "100%",
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});

export default HomeScreen;
