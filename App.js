import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import { StyleSheet } from "react-native";
import { AppContextProvider } from "./src/context/AppContext";
import PlayPage from "./src/screens/PlayPage";

const styles = StyleSheet.create({
	headerStyle: {
		backgroundColor: "#24243e",
		borderColor: "transparent",
		borderBottomColor: "black",
	},
});
const navigator = createStackNavigator(
	{
		Home: HomeScreen,
		Play: PlayPage,
	},
	{
		initialRouteName: "Home",
		defaultNavigationOptions: {
			title: "Home",
			headerStyle: styles.headerStyle,
			headerTitleStyle: { color: "#fff" },
		},
	}
);

const AppContainer = createAppContainer(navigator);

const App = () => {
	return (
		<AppContextProvider>
			<AppContainer />
		</AppContextProvider>
	);
};

export default App;
