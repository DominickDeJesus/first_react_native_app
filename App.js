import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import HomeScreen from "./src/screens/HomeScreen";
import ListScreen from "./src/screens/ListScreen";
import { StyleSheet } from "react-native";
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
    List: ListScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "TrueStan",
      headerStyle: styles.headerStyle,
      headerTitleStyle: { color: "#fff" },
    },
  }
);

export default createAppContainer(navigator);
