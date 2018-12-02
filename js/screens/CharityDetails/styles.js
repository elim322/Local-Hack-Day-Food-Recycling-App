import { StyleSheet, Platform } from "react-native";

const montserratLight = Platform.select({
  ios: "Montserrat-light",
  android: "Montserrat-Light"
});

const montserrat = Platform.select({
  ios: "Montserrat",
  android: "Montserrat-Regular"
});
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    padding: 30
  },
  pageTitle: {
    fontWeight: "bold",
    fontSize: 24,
    marginBottom: 20,
    textAlign: 'center'
  },
  header: {
    fontWeight: "bold",
    backgroundColor: "#e6e6e6",
    height: 25,
    paddingTop: 5,
    paddingLeft: 5,
    fontFamily: montserrat,
    width: 1000
  },
  separator: {
    borderWidth: 0.5,
    borderColor: "#e6e6e6"
  },
  items: {
    paddingLeft: 5,
    fontWeight: "400",
    fontSize: 16,
    fontFamily: montserrat
  }
});

export default styles;
