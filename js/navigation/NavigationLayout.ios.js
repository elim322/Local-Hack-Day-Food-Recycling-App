import React from "react";
import {
  createStackNavigator,
  createBottomTabNavigator
} from "react-navigation";
import LandingPage from "../screens/LandingPage/LandingPage";
import Map from "../screens/Map";
import About from "../screens/About/About";
import Ionicons from "react-native-vector-icons/Ionicons";
import { sharedNavigationOptions } from "./config";
import {colors} from '../assets/styles'

const AboutStack = createStackNavigator({
  About: About
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });

const LandingPageStack = createStackNavigator({
  LandingPage: LandingPage
},  {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });

const MapStack = createStackNavigator({
  Map: Map
}, {
    defaultNavigationOptions: ({ navigation }) => ({
      ...sharedNavigationOptions(navigation)
    })
  });

export default createBottomTabNavigator(
  {
    LandingPage: LandingPageStack,
    Map: MapStack,
    About: AboutStack
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === "About") {
          iconName = `ios-information-circle`;
        } else if (routeName === "LandingPage") {
          iconName = `ios-body`;
        } else if (routeName === "Map") {
          iconName = `ios-map`;
        }

        return (
          <Ionicons
            name={iconName}
            size={horizontal ? 20 : 25}
            color={tintColor}
          />
        );
      }
    }),
    tabBarOptions: {
      activeTintColor: "black",
      inactiveTintColor: "white",
      labelStyle: { fontSize: 15 },
      style: { backgroundColor: colors.red }
    }
  }
);
