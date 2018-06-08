import React from "react";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";
import { fetch } from "fetch";

class ResultsScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      status: "fetching",
      response: null
    };
  }

  componentWillMount() {
    const query = this.props.navigation.getParam("query");
    fetch("http://www.xeno-canto.org/api/2/recordings?query=" + query)
      .then(response => response.json())
      .then(responseJson => {
        this.setState({
          status: "fetched",
          response: responseJson
        });
      })
      .catch(error => {
        this.setState({
          status: "error"
        });
      });
  }

  render() {
    switch (this.state.status) {
      case "fetching":
        return (
          <View style={styles.container}>
            <ActivityIndicator size="small" color="#0000ff" />
          </View>
        );
      case "fetched":
        return (
          <View style={styles.container}>
            <Text>Fetched!</Text>
          </View>
        );
      case "error":
        return (
          <View style={styles.container}>
            <Text>Error!</Text>
          </View>
        );
      default:
        throw "Invalid state";
    }
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export default ResultsScreen;
