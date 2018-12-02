import { Platform } from "react-native";

export const colors = {
  white: "#F9F7F7",
  blue: "#00A0A0",
  black: "#35322f",
  red: "#DF5B38"
};

export const typography = {
<<<<<<< HEAD
  baseSize: 16
  // fontMainLight: "Montserrat-Light",
  // ...Platform.select({
  //     ios: {
  //         fontMain: "Montserrat"
  //     },
  //     android: {
  //         fontMain: "Montserrat-Regular"
  //     }
  // })
=======
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
>>>>>>> 770b49063cd62590847d110e08ebd1cde11cc592
};
