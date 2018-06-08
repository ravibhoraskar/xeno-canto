import React from "react";
import { StyleSheet, Text, View } from "react-native";

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

export default ResultsScreen;
