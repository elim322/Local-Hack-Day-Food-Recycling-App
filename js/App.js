import React, { Component } from "react";
import { Text, View } from "react-native";
import AppNavigator from "./navigation/RootStackNavigator";




export default class App extends Component {
  render() {
    return (
      <AppNavigator />
    );
  }
}
