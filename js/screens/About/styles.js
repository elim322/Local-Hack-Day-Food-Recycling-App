import { StyleSheet } from "react-native";
import {colors, typography} from '../../assets/styles'

const styles = StyleSheet.create({
  aboutContainer: {
    height: "100%",
    marginLeft: 10,
    marginRight: 10
  },
  aboutHeader: {
    fontSize: 28,
    fontWeight: '900',
    textAlign: 'center',
    marginTop: '10%',
    color: colors.red
  },
  aboutText: {
    fontSize: 18,
    padding: 10,
    fontFamily: typography.fontMain,
    marginTop: '15%'
  }
});

export default styles;
