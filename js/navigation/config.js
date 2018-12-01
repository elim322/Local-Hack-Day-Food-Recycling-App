import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-navigation";
import {colors} from '../assets/styles'

export const sharedNavigationOptions = navigation => ({
    headerBackTitle: null,
    header: props => <Header {...props} />,
    headerStyle: {
        backgroundColor: colors.red
    }
});
