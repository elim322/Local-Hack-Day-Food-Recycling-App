import React from "react";
import { StyleSheet, View, Image } from "react-native";
import { Header } from "react-navigation";
import { colors } from "../assets/styles";

export const sharedNavigationOptions = navigation => ({
  headerBackTitle: null,
  header: props => <Header {...props} />,

  headerTitle: (
    <Image
      style={{ height: "100%", width: "50%", marginBottom: 10 }}
      source={require("../assets/images/three.png")}
    />
  ),
  headerStyle: {
    backgroundColor: colors.red
  }
});
