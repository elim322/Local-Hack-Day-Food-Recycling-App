import { StyleSheet } from "react-native";
import {colors, typography} from '../../assets/styles'

const styles = StyleSheet.create({
  aboutContainer: {
    height: "100%",
  },
  aboutHeader: {
    fontSize: 28,
    fontFamily: typography.fontMain,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: '10%'
  },
  aboutText: {
    fontSize: 18,
    padding: 10,
    fontFamily: typography.fontMain,
    marginTop: '15%'
  }
});

export default styles;
