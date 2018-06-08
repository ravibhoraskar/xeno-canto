import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import { createStackNavigator } from "react-navigation";
import HomeScreen from "./HomeScreen";
import ResultsScreen from "./ResultsScreen";

export default createStackNavigator(
  {
    Home: HomeScreen,
    Results: ResultsScreen
  },
  {
    initialRouteName: "Home"
  }
);
