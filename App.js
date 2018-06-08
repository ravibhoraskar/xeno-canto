import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";

const HomeScreen = props => (
  <View style={styles.container}>
    <Text>Welcome to Xeno Canto</Text>
    <Button
      title="Search for Bushtit"
      onPress={() => {
        props.navigation.navigate("Results", { query: "Bushtit" });
      }}
    />
  </View>
);

const ResultsScreen = props => (
  <View style={styles.container}>
    <Text>{"Searching for " + props.navigation.getParam("query")}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen
  },
  {
    initialRouteName: "Home"
  }
);
