import { Header } from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      textTyped: "",
      displayText: "",
    };
  }

  render() {
    return (
      <View>
        <Header
          backgroundColor="red"
          centerComponent={{
            text: "Chunky Monkey",
            style: { fontSize: 30, color: "white" },
          }}
        />

        <TextInput
          style={styles.textInput}
          onChangeText={(text) => {
            this.setState({ textTyped: text });
          }}
          value={this.state.textTyped}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            this.setState({ displayText: this.state.textTyped });
          }}
        >
          <Text style={styles.buttonText}>Create Text Chunks!</Text>
        </TouchableOpacity>

        <Text>{this.state.displayText}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textInput: {
    borderColor: "#4a565c",
    borderWidth: 2,
    height: 50,
    width: "90%",
    alignSelf: "center",
    marginTop: "2.5%",
    textAlign: "center",
  },
  button: {
    alignSelf: "center",
    marginTop: "5%",
    backgroundColor: "#40bfff",
    justifyContent: "center",
    width: "50%",
    height: 50,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 20,
  },
});
