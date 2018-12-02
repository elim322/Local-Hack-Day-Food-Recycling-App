import React from "react";
import { Text, View, Button } from "native-base";
import styles from "./styles";
import { withNavigation } from "react-navigation";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.navigation.setParams({
      tabStyle: {
        display: "none"
      }
    });
  }
  // static navigationOptions = {
  //   tabBarVisible: false
  // };

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.header}>I am a..</Text>
        <Button
          bordered
          style={styles.charityLabelContainer}
          onPress={() => {
            this.props.navigation.navigate("CharityForm");
          }}
          activeOpacity={0.5}
        >
          <Text style={styles.charityLabel}>Charity</Text>
        </Button>
        <Button
          bordered
          style={styles.charityLabelContainer}
          onPress={() => {
            this.props.navigation.navigate("DonorForm");
          }}
          activeOpacity={0.5}
        >
          <Text style={styles.charityLabel}>Food Donor</Text>
        </Button>
      </View>
    );
  }
}

export default withNavigation(LandingPage);
