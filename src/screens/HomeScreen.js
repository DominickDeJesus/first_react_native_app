import React from "react";
import { Text, View } from "react-native";

const HomeScreen = () => {
  const name = "nick";

  return (
    <View>
      <Text style={{ fontSize: 45 }}>Hello world</Text>
      <Text style={{ fontSize: 20 }}>My name is {name}</Text>
    </View>
  );
};
export default HomeScreen;
