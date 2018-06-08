import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default HomeScreen;
