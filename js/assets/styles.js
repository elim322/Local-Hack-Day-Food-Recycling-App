import { Platform } from "react-native";

export const colors = {
  white: "#F9F7F7",
  blue: "#00A0A0",
  black: "#35322f",
  red: "#DF5B38"
};

export const typography = {
  baseSize: 16,
  fontMainLight: "Montserrat-Light",
  ...Platform.select({
      ios: {
          fontMain: "Montserrat"
      },
      android: {
          fontMain: "Montserrat-Regular"
      }
  })
  // fontMainLight: "Montserrat-Light",
  // ...Platform.select({
  //     ios: {
  //         fontMain: "Montserrat"
  //     },
  //     android: {
  //         fontMain: "Montserrat-Regular"
  //     }
  // })
>>>>>>> 2941c9f86d8265cfd128776be72f1ca18492f485
};
