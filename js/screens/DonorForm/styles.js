import { StyleSheet } from "react-native";
import { typography } from "../../assets/styles";

const styles = StyleSheet.create({
  button: {
    borderColor: "#DF5B38",
    alignSelf: "center",
    position: "absolute",
    bottom: -150
  },
  modal: {
    backgroundColor: "#00A0A0",
    height: 300,
    width: 500,
    position: "absolute",
    top: 70
  },
  buttonText: {
    color: "#DF5B38"
  },
  modaltext: {
    color: "white",
    padding: 20,
    width: 300
  }
});

export default styles;
