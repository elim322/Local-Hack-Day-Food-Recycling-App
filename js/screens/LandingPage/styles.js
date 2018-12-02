import { StyleSheet } from "react-native";
import { typography, colors } from "../../assets/styles";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignSelf: "center",
    marginLeft: 10,
    marginRight: 10,
    marginTop: 50
  },
  charityLabel: {
    width: "80%",
    textAlign: "center",
    color: colors.red,
    // fontFamily: typography.fontMain,
    // fontFamily: "Montserrat",
    borderColor: colors.red,
    fontSize: 30
  },
  header: {
    fontSize: 40,
    // fontFamily: typography.fontMain,
    alignSelf: "center"
  },
  charityLabelContainer: {
    borderColor: colors.red,
    marginTop: 50,
    height: 100
  }
});

export default styles;
