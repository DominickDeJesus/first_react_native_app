import React, { useContext } from "react";
import { Text, View, StyleSheet, FlatList } from "react-native";
import { AppContext } from "../context/AppContext";

const PlayPage = () => {
	const { search, setSearch } = useContext(AppContext);
	return (
		<View style={styles.container}>
			<Text style={styles.pageStyle}>{search}</Text>
		</View>
	);
};

const styles = StyleSheet.create({
	pageStyle: {
		padding: 0,
		color: "white",
		fontSize: 90,
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
