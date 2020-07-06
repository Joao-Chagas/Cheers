import React from "react";
import { StatusBar, StyleSheet } from "react-native";

import { RectButton } from "react-native-gesture-handler";

import Routes from "./src/routes";

export default class App extends React.Component {
  render() {
    return (
      <>
        <StatusBar
          barStyle="light-content"
          backgroundColor="transparent"
          translucent
        />
        <Routes />
      </>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    opacity: 0.9,
    alignItems: "center",
  },

  main: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: 100,
  },

  image: {
    width: 150,
    height: 150,
    paddingBottom: 24,
    marginBottom: 60,
  },

  inputs: {
    backgroundColor: "rgba(246, 170, 28, 1)",
    width: 310,
    borderRadius: 5,
    color: "white",
    padding: 7,
    marginBottom: 16,
  },

  inputGroup: {
    paddingBottom: 8,
  },

  viewButton: {
    flex: 1,
    width: 310,
  },
  button: {
    backgroundColor: "#0575a3",
    opacity: 0.9,
    color: "#fff",
    textAlign: "center",
    padding: 12,
    borderRadius: 2,
    alignItems: "center",
  },

  senha: {
    color: "#fff",
    textAlign: "center",
    marginTop: 22,
  },
});
